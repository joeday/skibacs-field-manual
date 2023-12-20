import styles from "./card.module.css";
import Link from "next/link";

export default function Card() {
  return (
    <Link href="/" className={styles.card}>
      <div>
        <h2 className={styles.cardHeader}>Feeling skis on snow</h2>
        <p className={styles.description}>
          Use slightly sloped terrain. Move symmetrically from a parallel stance
          to wedged stance and then back.{" "}
        </p>
      </div>
    </Link>
  );
}
