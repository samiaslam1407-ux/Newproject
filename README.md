# Modern To‑Do App

A modern, fully-featured to‑do application built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. Features drag-and-drop task reordering, persistent storage, and sleek dark mode support.

## Features

✨ **Core Functionality**
- ✅ Add, edit, delete, and complete tasks
- 🎯 Drag-and-drop task reordering
- 💾 Persistent storage using localStorage
- 🌓 Dark mode support with system preference detection
- 📊 Task counter and bulk actions (clear completed, clear all)
- ⌨️ Keyboard shortcuts (Enter to add/save)

🎨 **Modern Stack**
- Next.js 16 with App Router
- React 19 for UI components
- TypeScript for type safety
- Tailwind CSS v4 for styling
- react-beautiful-dnd for smooth drag-drop UX

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install --legacy-peer-deps
```

### Running the Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app live.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── page.tsx          # Main page (renders TodoApp)
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global Tailwind styles
├── components/
│   ├── TodoApp.tsx       # Main to-do container with logic
│   └── TodoItem.tsx      # Individual task component
├── package.json
├── tsconfig.json
└── README.md
```

## Usage

1. **Add a Task:** Type in the input field and press Enter or click "Add"
2. **Mark Complete:** Click the circle checkbox to toggle completion status
3. **Edit a Task:** Click "Edit", modify text, and press Enter
4. **Delete a Task:** Click "Delete" to remove the task
5. **Reorder Tasks:** Drag tasks to reorder them
6. **Clear Completed:** Click "Clear completed" to remove finished tasks
7. **Clear All:** Click "Clear all" to reset the entire list

## Technologies Used

| Technology | Purpose |
|------------|---------|
| Next.js 16 | Full-stack React framework |
| React 19 | UI component library |
| TypeScript | Static type checking |
| Tailwind CSS v4 | Utility-first CSS framework |
| react-beautiful-dnd | Accessible drag-and-drop |
| UUID | Unique ID generation |

## Future Enhancements

- 📚 Categories/tags for tasks
- ⏰ Due dates and reminders
- 🔐 User authentication & backend sync (MongoDB)
- 📱 Mobile app support
- 📤 Export/import tasks

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel login
vercel
```

## License

MIT

## Author

Samia Aslam
