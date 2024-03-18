import  { useContext } from 'react'
import { ProfessorContext } from './ProfessorContext'
import uuid from 'react-uuid'

const ProfessorList = () => {
    const professors = useContext(ProfessorContext)
  return (
    <>
    <h1>ProfessorList</h1>
    <ul>
    {professors.map((professor) => (
        <li key={professor.id}>
            Name: {professor.name}
            Skills: {professor.skills.join()}
        </li>
    ))}
        </ul>
    </>
  )
}

export default ProfessorList