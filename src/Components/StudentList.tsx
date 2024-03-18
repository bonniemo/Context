import  { useContext } from 'react'
import { GlobalContext } from './GlobalStateContext';



const StudentList = () => {
    const students = useContext(GlobalContext);
  return (
    <>
    <h2>Student List</h2>
    <ul>
        {students.students.map((student) => (
            <li key={student.id}>
                Name: {student.name}
            </li>
        ))}
    </ul>
    </>

  )
}

export default StudentList;