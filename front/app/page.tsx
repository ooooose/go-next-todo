import { MainLayout } from "@/components/layouts/main-layout";
import { getTasks } from "@/features/tasks/api";
import { TaskList } from "@/features/tasks/components/task-list";

export default async function Home() {
  const tasks = await getTasks()
  return (
    <MainLayout>
      <TaskList tasks={tasks} />
    </MainLayout>
  );
}
