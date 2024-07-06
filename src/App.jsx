import { useDispatch, useSelector } from "react-redux";
import { getNotesFromApi } from "./features/notes";
import NotesList from "./components/NotesList";
import Sidebar from "./components/Sidebar";
import SideNotes from "./components/SideNotes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const notesValues = useSelector((state) => state.notes);
  console.log(notesValues);

  if (!notesValues.list) {
    dispatch(getNotesFromApi());
  }

  return (
    <div className="bg-slate-800 min-h-screen flex">
      <BrowserRouter>
        <Sidebar />
        <SideNotes />
        <Routes>
          <Route path="/" element={<NotesList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
