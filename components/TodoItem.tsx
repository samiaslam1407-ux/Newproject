"use client";

import { useState } from "react";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
}: {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: (text: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(todo.text);

  return (
    <div className="flex items-center gap-3 rounded border p-3 dark:border-gray-700">
      <button onClick={onToggle} className="shrink-0">
        <div
          className={`h-5 w-5 rounded-full border flex items-center justify-center ${
            todo.completed ? "bg-indigo-600" : "bg-white"
          }`}
        >
          {todo.completed ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          ) : null}
        </div>
      </button>

      <div className="flex-1">
        {editing ? (
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => {
              onEdit(value);
              setEditing(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onEdit(value);
                setEditing(false);
              }
            }}
            className="w-full bg-transparent focus:outline-none"
            autoFocus
          />
        ) : (
          <div className={`select-none ${todo.completed ? "line-through text-gray-400" : "text-gray-900"}`}>
            {todo.text}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setEditing((s) => !s)}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Edit
        </button>
        <button onClick={onDelete} className="text-sm text-red-500">
          Delete
        </button>
      </div>
    </div>
  );
}
