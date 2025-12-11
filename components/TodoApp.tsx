"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const STORAGE_KEY = "todo:items";

export default function TodoApp() {
  const [items, setItems] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch (e) {
      setItems([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function addItem() {
    if (!text.trim()) return;
    setItems((s) => [{ id: uuidv4(), text: text.trim(), completed: false }, ...s]);
    setText("");
  }

  function toggle(id: string) {
    setItems((s) => s.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  function remove(id: string) {
    setItems((s) => s.filter((t) => t.id !== id));
  }

  function edit(id: string, newText: string) {
    setItems((s) => s.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  }

  function onDragEnd(result: DropResult) {
    if (!result.destination) return;
    const src = result.source.index;
    const dest = result.destination.index;
    if (src === dest) return;
    const next = Array.from(items);
    const [moved] = next.splice(src, 1);
    next.splice(dest, 0, moved);
    setItems(next);
  }

  return (
    <section className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
      <h1 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">Modern To‑Do</h1>

      <div className="mb-4 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addItem()}
          placeholder="Add a new task..."
          className="flex-1 rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
        />
        <button
          onClick={addItem}
          className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
        >
          Add
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul className="space-y-2" {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((it, index) => (
                <Draggable key={it.id} draggableId={it.id} index={index}>
                  {(prov) => (
                    <li ref={prov.innerRef} {...prov.draggableProps} {...prov.dragHandleProps}>
                      <TodoItem
                        todo={it}
                        onToggle={() => toggle(it.id)}
                        onDelete={() => remove(it.id)}
                        onEdit={(newText) => edit(it.id, newText)}
                      />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
        <span>{items.length} tasks</span>
        <div className="flex gap-2">
          <button
            onClick={() => setItems((s) => s.filter((t) => !t.completed))}
            className="rounded px-3 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Clear completed
          </button>
          <button
            onClick={() => setItems([])}
            className="rounded px-3 py-1 bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-200/10"
          >
            Clear all
          </button>
        </div>
      </div>
    </section>
  );
}
