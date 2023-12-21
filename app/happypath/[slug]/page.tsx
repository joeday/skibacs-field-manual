import Link from "next/link";
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
        <Link href="/">Home</Link>
      </header>
      <h1>{task.title}</h1>
      <p>Fundamental {task.fundamental}</p>
      <div
        className={styles.episodeText}
        dangerouslySetInnerHTML={{ __html: task.contentHtml }}
      />
    </main>
  );
}
