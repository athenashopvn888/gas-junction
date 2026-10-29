export type InlineNode =
  | { type: "text"; text: string }
  | { type: "bold"; text: string }
  | { type: "italic"; text: string }
  | { type: "link"; text: string; href: string }
  | { type: "break" };

export type ArticleBlock =
  | { kind: "h1"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "p"; inlines: InlineNode[] }
  | { kind: "ul"; items: InlineNode[][] }
  | { kind: "ol"; items: InlineNode[][] }
  | { kind: "table"; headers: InlineNode[][]; rows: InlineNode[][][] };

function parseInlines(text: string): InlineNode[] {
  const nodes: InlineNode[] = [];
  const lines = text.split("\n");
  lines.forEach((line, lineIndex) => {
    if (lineIndex > 0) nodes.push({ type: "break" });
    const re = /\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)]+)\)/g;
    let last = 0;
    let match: RegExpExecArray | null;
    while ((match = re.exec(line))) {
      if (match.index > last) nodes.push({ type: "text", text: line.slice(last, match.index) });
      if (match[1] !== undefined) {
        nodes.push({ type: "bold", text: match[1] });
      } else if (match[2] !== undefined) {
        nodes.push({ type: "italic", text: match[2] });
      } else {
        const label = match[3];
        const href = match[4];
        if (href.startsWith("/") && !href.startsWith("//")) nodes.push({ type: "link", text: label, href });
        else nodes.push({ type: "text", text: label });
      }
      last = match.index + match[0].length;
    }
    if (last < line.length) nodes.push({ type: "text", text: line.slice(last) });
  });
  return nodes;
}

function isTable(block: string): boolean {
  const lines = block.split("\n");
  return lines.length >= 2 && lines.every((line) => line.startsWith("|"));
}

function isSeparatorRow(line: string): boolean {
  const cells = line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|");
  return cells.length > 0 && cells.every((cell) => /^:?-+:?$/.test(cell.trim()));
}

function parseTableRow(line: string): InlineNode[][] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => parseInlines(cell.trim()));
}

function parseTable(block: string): ArticleBlock {
  const lines = block.split("\n");
  const headers = parseTableRow(lines[0]);
  const start = lines[1] && isSeparatorRow(lines[1]) ? 2 : 1;
  const rows = lines.slice(start).filter((line) => !isSeparatorRow(line)).map(parseTableRow);
  return { kind: "table", headers, rows };
}

function parseList(block: string, kind: "ul" | "ol"): ArticleBlock {
  const marker = kind === "ul" ? /^-\s+/ : /^\d+\.\s+/;
  return {
    kind,
    items: block.split("\n").map((line) => parseInlines(line.replace(marker, ""))),
  };
}

export function parseArticleMarkdown(markdown: string): ArticleBlock[] {
  return markdown
    .replace(/\r\n/g, "\n")
    .trim()
    .split(/\n\n+/)
    .map((block) => {
      if (block.startsWith("## ")) return { kind: "h2", text: block.slice(3).trim() };
      if (block.startsWith("# ")) return { kind: "h1", text: block.slice(2).trim() };
      if (isTable(block)) return parseTable(block);
      if (block.split("\n").every((line) => line.startsWith("- "))) return parseList(block, "ul");
      if (block.split("\n").every((line) => /^\d+\. /.test(line))) return parseList(block, "ol");
      return { kind: "p", inlines: parseInlines(block) };
    });
}

export function inlinePlainText(inlines: InlineNode[]): string {
  return inlines.map((node) => (node.type === "break" ? "\n" : node.text)).join("");
}

function collectLinks(nodes: InlineNode[], links: string[]) {
  for (const node of nodes) {
    if (node.type === "link") links.push(node.href);
  }
}

export function articleLinks(markdown: string): string[] {
  const links: string[] = [];
  for (const block of parseArticleMarkdown(markdown)) {
    if (block.kind === "p") collectLinks(block.inlines, links);
    else if (block.kind === "ul" || block.kind === "ol") {
      for (const item of block.items) collectLinks(item, links);
    } else if (block.kind === "table") {
      for (const cell of block.headers) collectLinks(cell, links);
      for (const row of block.rows) for (const cell of row) collectLinks(cell, links);
    }
  }
  return links;
}
