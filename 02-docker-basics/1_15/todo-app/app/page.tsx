import GreetingHeader from "@/src/components/GreetingHeader";
import TodoList from "@/src/components/TodoList";
import AddTaskBar from "@/src/components/AddTaskBar";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col gap-3 p-6 max-w-210 mx-auto pt-8 min-h-0">
      <GreetingHeader />
      <TodoList />
      <AddTaskBar />
    </main>
  );
}
