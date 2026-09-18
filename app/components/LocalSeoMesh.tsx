import Link from "next/link";
import { LOCAL_MESH_LINKS, TIER_MESH_LINKS } from "../lib/store";
import styles from "./LocalSeoMesh.module.css";

export default function LocalSeoMesh({
  currentPath,
  includeTiers = true,
  heading = "Around this Junction shop",
  variant = "dark",
}: {
  currentPath?: string;
  includeTiers?: boolean;
  heading?: string;
  variant?: "dark" | "light";
}) {
  const owners = LOCAL_MESH_LINKS.filter((link) => link.href !== currentPath);
  const tiers = includeTiers
    ? TIER_MESH_LINKS.filter((link) => link.href !== currentPath)
    : [];

  return (
    <nav
      className={`${styles.mesh} ${variant === "light" ? styles.light : ""}`}
      aria-label="Junction store pages"
    >
      <p className={styles.heading}>{heading}</p>
      <div className={styles.row}>
        {owners.map((link) => (
          <Link key={link.href} href={link.href} className={styles.chip}>
            {link.label}
          </Link>
        ))}
      </div>
      {tiers.length > 0 && (
        <div className={styles.row}>
          {tiers.map((link) => (
            <Link key={link.href} href={link.href} className={`${styles.chip} ${styles.tierChip}`}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

