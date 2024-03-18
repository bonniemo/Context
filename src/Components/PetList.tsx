import React, { useContext } from 'react'
import { PetsContext } from './PetContext'

const PetList = () => {
    const pets = useContext(PetsContext)
  return (
    <>
    <h2>PetList</h2>
    <ul>
    {pets.map((pet) => (
        <li key={pet.id}>
            Name: {pet.name}
            Age: {pet.age}
        </li>
        ))}
        </ul>
    </>
  )
}

export default PetList