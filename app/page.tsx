"use client";

import dynamic from "next/dynamic";
const TodoApp = dynamic(() => import("../components/TodoApp"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="mx-auto max-w-3xl px-6 py-10">
        <TodoApp />
      </main>
    </div>
  );
}
