import React from "react";
import { useSelector } from "react-redux";

const NotesList = () => {
  const notesValues = useSelector((state) => state.notes);

  return (
    <div className="p-10 w-full">
      <p className="text-xl text-slate mb-6">Bienvenue sur Notes101</p>
      <div className="grid lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {notesValues.list &&
          notesValues.list.map((note) => (
            <div
              className="bg-slate-100 hover:bg-slate-50 rounded cursor-pointer"
              key={note.id}
            >
              <p className="text-lg font-semibold">{note.title}</p>
              <p className="text-gray-700">{note.subtitle}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NotesList;
