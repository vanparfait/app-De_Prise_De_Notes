import { useDispatch, useSelector } from "react-redux";
import { getNotesFromApi } from "./features/notes";
import NotesList from "./components/NotesList";
import Sidebar from "./components/Sidebar";

function App() {
  const dispatch = useDispatch();
  const notesValues = useSelector((state) => state.notes);
  console.log(notesValues);

  if (!notesValues.list) {
    dispatch(getNotesFromApi());
  }

  return (
    <div className="bg-slate-800 min-h-screen flex">
      <Sidebar />
      <NotesList />{" "}
    </div>
  );
}

export default App;
