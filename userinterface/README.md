# 🧩 Drag-and-Drop Component Manager (Next.js + dnd-kit)

A simple React (Next.js) application that lets you **drag and drop components** (like cards or buttons) between two lists: "Available Items" and "Dropped Items". Built using `@dnd-kit/core` for smooth and accessible drag-and-drop interactions.

---

## 🚀 Features

- ✅ Drag components (Cards, Buttons, etc.) from one list to another
- ✅ Reversible drop – you can drag items back to the available list
- ✅ Supports rendering different component types
- ✅ Built with Tailwind CSS for a clean layout
- ✅ Fully functional with React state management

---

## 📁 Project Structure

```bash
.
├── app/
│   └── page.tsx / page.jsx         # Main application logic
├── Components/
│   ├── Draggable.jsx               # Draggable wrapper using @dnd-kit
│   ├── Droppable.jsx               # Droppable wrapper using @dnd-kit
│   └── Card.jsx                    # Sample Card component
├── styles/
│   └── globals.css                 # Tailwind or global styles (optional)
└── README.md                       # This file



```

## 📦 Installation

```bash
# Clone the repo

[git clone https://github.com/your-username/CMS.git](https://github.com/kazx22/CMS.git)

# Navigate into the project

cd cms/userInterface

# Install dependencies

npm install

# Run the dev server

npm run dev

Open http://localhost:3000 to see the app in action.

```

## 📄 License

MIT — Feel free to use and modify for personal or commercial projects.

## ✨ Acknowledgements

dnd-kit – awesome drag-and-drop toolkit for React
