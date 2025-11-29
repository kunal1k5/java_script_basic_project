// StudentList Component - Displays list of all students
// Receives students array via props and renders StudentCard for each

import StudentCard from './StudentCard';

function StudentList(props) {
  const { students } = props;
  
  return (
    <div className="student-list">
      <h2>Student List</h2>
      <div className="cards-container">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  );
}

export default StudentList;
