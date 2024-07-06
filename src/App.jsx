import { useDispatch, useSelector } from "react-redux";
import { getNotesFromApi } from "./features/notes";

function App() {
  const dispatch = useDispatch();
  const notesValues = useSelector((state) => state.notes);
  console.log(notesValues);

  if (!notesValues.list) {
    dispatch(getNotesFromApi());
  }

  return <></>;
}

export default App;
