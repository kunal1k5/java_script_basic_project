// StudentCard Component - Displays a single student's information
// Receives student object via props (no hooks)

function StudentCard(props) {
  const { student } = props;
  
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p className="grade">Grade: {student.grade}</p>
    </div>
  );
}

export default StudentCard;
