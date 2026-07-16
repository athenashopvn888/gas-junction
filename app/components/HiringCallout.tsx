import Link from "next/link";
import styles from "./HiringCallout.module.css";

export default function HiringCallout() {
  return (
    <section aria-label="Gas Junction Cannabis hiring" className={styles.section}>
      <div className={styles.callout}>
        <div>
          <span className={styles.eyebrow}>
            Budtenders / Managers Wanted
          </span>
          <h2 className={styles.heading}>
            Join Gas Junction
          </h2>
          <p className={styles.copy}>
            The Junction needs reliable people with good counter energy, clear communication, and steady follow-through. Online applications only. Please do not call the store about hiring.
          </p>
        </div>
        <Link
          href="/careers/budtender"
          className={styles.apply}
        >
          Apply Online
        </Link>
      </div>
    </section>
  );
}
