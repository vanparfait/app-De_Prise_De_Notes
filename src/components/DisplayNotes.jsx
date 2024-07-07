import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteNote } from "../features/notes";

const DisplayNotes = () => {
  const notesValues = useSelector((state) => state.notes);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const actualNote = notesValues.list?.find((note) => note.id === id);
  console.log(actualNote);

  return (
    <div className="p-10">
      <Link
        to="/"
        className="px-2 py-1 text-slate-800 bg-slate-300 rounded mr-2"
      >
        Notes
      </Link>
      <Link
        to={`/editer/${id}`}
        className="px-2 py-1 text-slate-800 bg-green-600 rounded mr-2"
      >
        Mettre a jour
      </Link>
      <button
        onClick={() => {
          dispatch(deleteNote(id));
          navigate("/");
        }}
        className="px-2 py-1 text-slate-800 bg-red-600 rounded mr-2"
      >
        Supprimer
      </button>
      <p className="text-slate-100 text-4xl mb-2 mt-8">{actualNote?.title} </p>
      <p className="text-slate-200 text-xl mb-4">{actualNote?.subtitle}</p>
      <p className="text-slate-300">{actualNote?.bodyText}</p>
    </div>
  );
};

export default DisplayNotes;
