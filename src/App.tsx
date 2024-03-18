import { StudentContext } from "./Components/StudentContext";
import StudentList from "./Components/StudentList";
import { initialStudents } from "./Components/StudentContext";
import { ProfessorContext, professors } from "./Components/ProfessorContext";
import ProfessorList from "./Components/ProfessorList";
import { PetsContext, petsArray } from "./Components/PetContext";
import PetList from "./Components/PetList";
const App = () => {
  return (
    <>
      <StudentContext.Provider value={initialStudents}>
          <h1>Student Context demo</h1>
          <StudentList/>
      </StudentContext.Provider>

      <ProfessorContext.Provider value={professors}>
        <h2>Professors</h2>
        <ProfessorList/>
      </ProfessorContext.Provider>

      <PetsContext.Provider value={petsArray}>
        <h2>Pets</h2>
        <PetList/>
        </PetsContext.Provider>
    </>
  );
};

export default App;
