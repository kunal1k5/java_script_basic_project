# React Student Management App (Props Only - No Hooks)

A simple React application that displays a student list using **only props** - no `useState`, `useEffect`, or any other hooks.

## ✅ Requirements Met

- ✔ Parent component (`App.jsx`) stores hard-coded student data
- ✔ Props passed from `App` → `StudentList` → `StudentCard`
- ✔ No hooks used (`useState`, `useEffect`, etc.)
- ✔ Function components only
- ✔ Clean component hierarchy

## 📁 Project Structure

```
react/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx         # Entry point
    ├── App.jsx          # Parent component with student data
    ├── StudentList.jsx  # Child component that receives array
    ├── StudentCard.jsx  # Displays individual student
    ├── App.css          # Styling
    └── index.css        # Global styles
```

## 🚀 How to Run

```powershell
cd react
npm install
npm run dev
```

Then open your browser to the URL shown (usually `http://localhost:5173`)

## 🎯 Component Hierarchy

```
App (stores student array)
  └── StudentList (receives students via props)
        └── StudentCard (receives individual student via props)
```

## 👨‍🎓 Student Data

```javascript
[
  { name: "Amit", grade: "A" },
  { name: "Sumit", grade: "B" },
  { name: "Priya", grade: "A" }
]
```

## 🎨 Features

- Beautiful gradient background
- Responsive card layout
- Hover effects on student cards
- Clean, modern UI
- **100% props-based (no hooks!)**
