import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNoteFromUser } from "../features/notes";

const Edit = () => {
  const dispatch = useDispatch();
  const [inputStates, setInputStates] = useState({
    title: "",
    subtitle: "",
    bodyText: "",
  });
  const [showValidation, setShowValidation] = useState({
    title: false,
    subtitle: false,
    bodyText: false,
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.values(inputStates).every((value) => value)) {
      console.log(Object.values(inputStates).every((value) => value));
      setShowValidation({
        title: false,
        subtitle: false,
        bodyText: false,
      });
      dispatch(addNoteFromUser({ ...inputStates, id: nanoid(8) }));
      setInputStates({ title: "", subtitle: "", bodyText: "" });
    } else {
      for (const [key, value] of Object.entries(inputStates)) {
        if (value.length === 0) {
          setShowValidation((state) => ({ ...state, [key]: true }));
        } else {
          setShowValidation((state) => ({ ...state, [key]: false }));
        }
      }
      console.log(Object.entries(inputStates));
    }
  }

  return (
    <div className="w-full p-10">
      <p className="text-slate-100 text-xl mb-4">Ajouter une Note</p>
      <form onSubmit={handleSubmit}>
        <label className="mb-2 block text-slate-100" htmlFor="titre">
          Le titre
        </label>
        <input
          type="text"
          id="titre"
          value={inputStates.title}
          onChange={(e) =>
            setInputStates({ ...inputStates, title: e.target.value })
          }
          className="p-2 text-md block w-full rounded bg-slate-200"
          spellCheck="false"
        />
        {showValidation.title && (
          <p className="text-red-400 mb-2">Veuillez renseigner un titre.</p>
        )}
        <label className="mb-2 block text-slate-100" htmlFor="soustitre">
          Le sous-titre
        </label>
        <input
          type="text"
          id="soustitre"
          value={inputStates.subtitle}
          onChange={(e) =>
            setInputStates({ ...inputStates, subtitle: e.target.value })
          }
          className="p-2 text-md block w-full rounded bg-slate-200"
          spellCheck="false"
        />
        {showValidation.subtitle && (
          <p className="text-red-400 mb-2">
            Veuillez renseigner un sous titre.
          </p>
        )}
        <label className="mb-2 block text-slate-100" htmlFor="contenu">
          Contenu de la note
        </label>
        <input
          type="text"
          id="contenu"
          value={inputStates.bodyText}
          onChange={(e) =>
            setInputStates({ ...inputStates, bodyText: e.target.value })
          }
          className="p-2 text-md block w-full rounded bg-slate-200"
          spellCheck="false" //pour que ca ne souligne plus le texte en rouge
        />
        {showValidation.bodyText && (
          <p className="text-red-400 mb-2">Veuillez renseigner un contenu.</p>
        )}
        <button className="mt-4 px-3 py-1 bg-slate-100 rounded">
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default Edit;
