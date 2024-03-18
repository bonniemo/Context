


import { ProfessorContext, professors } from "./Components/ProfessorContext";
import ProfessorList from "./Components/ProfessorList";
import { PetsContext, petsArray } from "./Components/PetContext";
import PetList from "./Components/PetList";
import SearchTeacher from "./Components/SearchTeacher";
import { GlobalContext, persons } from "./Components/GlobalStateContext";
import StudentList from "./Components/StudentList";

const App = () => {
  return (
    <>
      <GlobalContext.Provider value={persons}>
        <h1>Students</h1>
        <StudentList/>
      </GlobalContext.Provider>

      <ProfessorContext.Provider value={professors}>
        <h2>Professors</h2>
        <ProfessorList/>
      </ProfessorContext.Provider>

      <PetsContext.Provider value={petsArray}>
        <h2>Pets</h2>
        <PetList/>
        </PetsContext.Provider>

        <SearchTeacher/>
    </>
  );
};

export default App;
