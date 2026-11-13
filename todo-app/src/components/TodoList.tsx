"use client";

import { useTodoStore } from "../store/useTodosStore";

import { Trash } from "lucide-react";

export default function TodoList() {
  const { todos, toggleTodo, removeTodo } = useTodoStore()!;
  return (
    <section
      id="todo-list"
      className="overflow-scroll min-h-0 flex-1 overflow-y-auto overflow-x-hidden font-satoshi text-white pt-4.5"
    >
      <ul className="flex flex-col gap-2">
        {todos.map(({ id, title, completed }) => (
          <li
            className={`bg-[#191a1b] py-1 px-3 h-12 flex flex-row 
              items-center gap-2 rounded-lg text-sm font-medium shadow-lg ${completed ? "line-through text-[#777777]" : ""}`}
          >
            <label className="relative inline-flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center">
              <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodo(id)}
                className="peer h-4.5 w-4.5 cursor-pointer appearance-none rounded
      border-2 border-white/35 bg-transparent 
      checked:border-white/30 checked:bg-white/30"
              />

              <svg
                className="pointer-events-none absolute h-3.5 w-3.5
      text-white opacity-0 peer-checked:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 13L9 17L19 7" />
              </svg>
            </label>

            <span
              className="flex-1 cursor-pointer"
              onClick={() => {
                toggleTodo(id);
              }}
            >
              {title}
            </span>

            <button onClick={() => removeTodo(id)}>
              <Trash size={18} color="#777777" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
