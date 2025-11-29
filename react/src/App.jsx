// App Component - Parent component with hard-coded student data
// Passes student array to StudentList via props (no hooks used)

import './App.css';
import StudentList from './StudentList';

function App() {
  // Hard-coded student data (no useState)
  const students = [
    { name: "Amit", grade: "A" },
    { name: "Sumit", grade: "B" },
    { name: "Priya", grade: "A" }
  ];

  return (
    <div className="App">
      <h1>🎓 Student Management System</h1>
      <p className="subtitle">Using Only Props - No Hooks</p>
      <StudentList students={students} />
    </div>
  );
}

export default App;
