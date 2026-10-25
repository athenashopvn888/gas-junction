"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { hidesMobileBottomBar } from "../lib/mobileBottomBarPath";
import { STORE } from "../lib/store";
import { storeHoursStatus } from "../lib/storeHoursStatus";
import styles from "./MobileBottomBar.module.css";

/**
 * Mobile-only sticky actions. Directions uses the store Google Maps link.
 * Hours copy is computed in America/Toronto from STORE opening hours.
 * /tv and /tv2 render null so the nav is absent from those documents.
 */
export default function MobileBottomBar() {
  const pathname = usePathname();
  const hidden = hidesMobileBottomBar(pathname);
  const [status, setStatus] = useState(() => storeHoursStatus(new Date()));

  useEffect(() => {
    if (hidden) return;
    const update = () => setStatus(storeHoursStatus(new Date()));
    update();
    const id = window.setInterval(update, 30_000);
    return () => window.clearInterval(id);
  }, [hidden]);

  if (hidden) return null;

  return (
    <nav
      className={styles.bar}
      aria-label="Store actions"
      data-mobile-bottom-bar=""
      data-hours-kind={status.kind}
      suppressHydrationWarning
    >
      <a
        className={`${styles.action} ${styles.directions}`}
        href={STORE.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Directions
      </a>
      <Link className={`${styles.action} ${styles.hours}`} href="/hours">
        <span className={styles.srOnly}>Hours. </span>
        <span className={styles.hoursLabel} suppressHydrationWarning>
          {status.label}
        </span>
      </Link>
      <Link className={`${styles.action} ${styles.minor}`} href="/exotic-weed">
        Menu
      </Link>
      <Link className={`${styles.action} ${styles.minor}`} href="/delivery">
        Delivery
      </Link>
    </nav>
  );
}
