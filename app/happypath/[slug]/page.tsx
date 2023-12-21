import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { getAllTaskIds, getTaskData } from "@/app/lib/happyPathTasks";

export async function generateStaticParams() {
  const tasks = getAllTaskIds();
  return tasks;
}

export async function getHappyPathTaskData(slug: string) {
  const taskData = await getTaskData(slug);
  return taskData;
}

export default async function Page({ params }) {
  const { slug } = params;
  const task = await getHappyPathTaskData(slug);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Image
          src="/arrow_back.svg"
          height={16}
          width={16}
          alt="back arrow"
          className={styles.backArrow}
        />
        <Link className={styles.backLink} href="/">
          Home
        </Link>
      </header>
      <h1 className={styles.title}>{task.title}</h1>
      <p className={styles.metadata}>Fundamental {task.fundamental}</p>
      <div
        className={styles.taskContent}
        dangerouslySetInnerHTML={{ __html: task.contentHtml }}
      />
    </main>
  );
}
