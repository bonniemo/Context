import { createContext } from "react";
import uuid from 'react-uuid';

type Person = {
    id: string, 
    name: string,
    age: number,
    skills?: string[]
}

export const persons:{ professors: Person[], students: Person[] }  = {
    professors: [
        {
            id: uuid(),
            name: "Anna",
            age: 34,
            skills: ['java', 'c++']
        },
        {
            id: uuid(),
            name: "Clara",
            age: 46,
            skills: ['javaScripy', 'c#']
        },
        {
            id: uuid(),
            name: "Per",
            age: 26,
            skills: ['bla bla', 'en till']
        }
    ], 
    students: [
        {
            id: uuid(),
            name: "Bosse",
            age: 34
        },
        {
            id: uuid(),
            name: "Stina",
            age: 46
        },
        {
            id: uuid(),
            name: "Kim",
            age: 26
        }
    ]
}

export const GlobalContext = createContext(persons);