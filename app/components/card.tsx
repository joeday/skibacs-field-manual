import styles from "./card.module.css";
import Link from "next/link";

export default function Card(props) {
  const { title, description } = props;
  return (
    <Link href="/" className={styles.card}>
      <div>
        <h2 className={styles.cardHeader}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
}
