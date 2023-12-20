import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/app/components/card";
import { getSortedTasksData } from "@/app/lib/happyPathTasks";


export async function getHappyPathTasks() {
  const tasksData = getSortedTasksData();
  return tasksData;
}

export default async function Home() {
  const tasks = await getHappyPathTasks();
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Image
          src="/skibacs-logo.svg"
          height={32}
          width={122}
          className={styles.logo}
          alt="Vintage SKIBACS logo"
        />
      </header>
      <h1 className={styles.headline}>Field Manual</h1>
      <p className={styles.description}>
        Important information and resources to help SKIBACS instructors provide
        excellent instruction for their students.
      </p>
      <section className={styles.happyPath}>
        <h4 className={styles.happyPathHeadline}>happy path</h4>
        <div className={styles.happyPathCards}>
          {tasks.map(
            ({
              title,
              description,
              slug,
              id,
              fundamental,
              skills
            }) => (
              <Card
                key={id}
                title={title}
                description={description}
                slug={slug}
                num={id}
                fundamental={fundamental}
                skills={skills}
              />
            )
          )}
        </div>
      </section>
    </main>
  );
}
