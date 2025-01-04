import { MainLayout } from "@/components/layouts/main-layout";
import { TaskList } from "@/features/tasks/components/task-list";

export default　function Home() {
  return (
    <MainLayout>
      <TaskList />
    </MainLayout>
  );
}
