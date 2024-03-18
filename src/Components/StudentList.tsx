import  { useContext } from 'react'
import { StudentContext } from './StudentContext';


const StudentList = () => {
    const students = useContext(StudentContext);
  return (
    <>
    <h2>Student List</h2>
    <ul>
        {students.map((student) => (
            <li key={student.id}>
                Name: {student.name}
            </li>
        ))}
    </ul>
    </>

  )
}

export default StudentList;