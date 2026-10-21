export type InlineNode =
  | { type: "text"; text: string }
  | { type: "bold"; text: string }
  | { type: "link"; text: string; href: string }
  | { type: "break" };

export type ArticleBlock =
  | { kind: "h2"; text: string }
  | { kind: "p"; inlines: InlineNode[] };

function parseInlines(text: string): InlineNode[] {
  const nodes: InlineNode[] = [];
  const lines = text.split("\n");
  lines.forEach((line, lineIndex) => {
    if (lineIndex > 0) nodes.push({ type: "break" });
    const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
    let last = 0;
    let match: RegExpExecArray | null;
    while ((match = re.exec(line))) {
      if (match.index > last) nodes.push({ type: "text", text: line.slice(last, match.index) });
      if (match[1] !== undefined) {
        nodes.push({ type: "bold", text: match[1] });
      } else {
        const label = match[2];
        const href = match[3];
        if (href.startsWith("/") && !href.startsWith("//")) nodes.push({ type: "link", text: label, href });
        else nodes.push({ type: "text", text: label });
      }
      last = match.index + match[0].length;
    }
    if (last < line.length) nodes.push({ type: "text", text: line.slice(last) });
  });
  return nodes;
}

export function parseArticleMarkdown(markdown: string): ArticleBlock[] {
  return markdown
    .replace(/\r\n/g, "\n")
    .trim()
    .split(/\n\n+/)
    .map((block) => {
      if (block.startsWith("## ")) return { kind: "h2", text: block.slice(3).trim() };
      return { kind: "p", inlines: parseInlines(block) };
    });
}

export function inlinePlainText(inlines: InlineNode[]): string {
  return inlines.map((node) => (node.type === "break" ? "\n" : node.text)).join("");
}

export function articleLinks(markdown: string): string[] {
  const links: string[] = [];
  for (const block of parseArticleMarkdown(markdown)) {
    if (block.kind !== "p") continue;
    for (const node of block.inlines) {
      if (node.type === "link") links.push(node.href);
    }
  }
  return links;
}
