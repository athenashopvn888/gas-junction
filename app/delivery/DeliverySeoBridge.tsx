import Link from "next/link";
import LocalSeoMesh from "../components/LocalSeoMesh";
import styles from "./delivery-seo-bridge.module.css";

export default function DeliverySeoBridge() {
  return (
    <aside className={styles.bridge} aria-label="Junction delivery neighbourhood page">
      <p className={styles.kicker}>Neighbourhood owner</p>
      <h2 className={styles.title}>Cannabis delivery in The Junction</h2>
      <p className={styles.copy}>
        This catalog is the live delivery menu. Radius, the 10:00 a.m.–10:00 p.m. window, and
        how delivery sits beside the 24-hour Keele &amp; Dundas walk-in live on{" "}
        <Link href="/cannabis-delivery-junction">cannabis delivery in The Junction</Link>.
        Adults 19+.
      </p>
      <LocalSeoMesh
        currentPath="/delivery"
        variant="light"
        heading="Junction pages beside this menu"
      />
    </aside>
  );
}
