import styles from "./card.module.css";
import Link from "next/link";

export default function Card(props) {
  const { title, description, slug } = props;
  const link = "happypath/" + slug;
  return (
    <Link href={link} className={styles.card}>
      <div>
        <h2 className={styles.cardHeader}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
}
