import { createContext } from "react";
import uuid from 'react-uuid';

type Pets = {
    id: string, 
    name: string,
    age: number,
}

export const petsArray: Pets[] = [
    {
        id: uuid(),
        name: "Monkey",
        age: 34
    },
    {
        id: uuid(),
        name: "Donkey",
        age: 46
    },
    {
        id: uuid(),
        name: "Fly",
        age: 26
    }
];

export const PetsContext = createContext([] as Pets[])