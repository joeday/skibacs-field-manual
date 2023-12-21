interface Task {
  id: string,
  title: string,
  description: string,
  slug: string,
  fundamental?: string,
  contentHtml: string
}

export default Task;