// Skapa en ny komponent SearchTeacher som ha ett inputfält, 
// knapp och lista. Listan visar sökresultaten. 
// Söka gör man på lärares namn genom att skriva i inputfältet och klicka på knappen. 

import { useRef } from "react"

const SearchTeacher = () => {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
    <h1>Search Teacher</h1>
    <input type="text" ref={inputRef}/>
    <button>Search</button>
    </>
  )
}

export default SearchTeacher