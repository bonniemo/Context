import { createContext } from "react";
import uuid from 'react-uuid';

type Professor = {
    id: string, 
    name: string,
    age: number,
    skills: string[],
}

export const professors: Professor[] = [
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
];

export const ProfessorContext = createContext([] as Professor[])