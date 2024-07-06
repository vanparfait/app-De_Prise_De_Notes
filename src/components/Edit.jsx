import React, { useState } from "react";

const Edit = () => {
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
  return (
    <div className="w-full p-10">
      <p className="text-slate-100 text-xl mb-4">Ajouter une Note</p>
      <form>
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
