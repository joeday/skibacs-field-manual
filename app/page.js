import Image from "next/image";
import styles from "./page.module.css";
import Card from "../app/ui/card";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Image
          src="/skibacs-logo.svg"
          height={32}
          width={122}
          className={styles.logo}
        />
      </header>
      <h1 className={styles.headline}>Field Manual</h1>
      <p className={styles.description}>
        Important information and resources to help SKIBACS instructors provide
        excellent instruction for their students.
      </p>
      <section className={styles.happyPath}>
        <h4 className={styles.happyPathHeadline}>happy path</h4>
        <Card />
      </section>
    </main>
  );
}
