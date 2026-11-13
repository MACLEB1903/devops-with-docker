"use client";
import { useState } from "react";
import { useTodoStore } from "../store/useTodosStore";

type Props = {
  onAdd: (title: string) => void;
};

export default function AddTaskBar() {
  const { addTodo } = useTodoStore()!;
  const [title, setTitle] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim()) return;

    addTodo(title.trim());
    setTitle("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[min(600px,90%)] mx-auto items-center gap-3 rounded-full bg-[#191a1b] px-5 py-3 text-white shadow-lg mt-4.5"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What do you want to do right now?"
        aria-label="New task"
        className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-gray-300 pl-1.5 font-satoshi"
      />

      <span className="text-lg">+</span>
    </form>
  );
}
