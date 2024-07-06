import React from "react";
import edit from "../assets/edit.svg";
import folder from "../assets/folder.svg";

const Sidebar = () => {
  return (
    <aside className="shrink-0 bg-slate-800 w-[100px] flex flex-col items-center pt-10">
      <div className=" flex justify-center mb-12">
        <div className="w-4 h-4 rounded-full bg-red-500 mx-1"></div>
        <div className="w-4 h-4 rounded-full bg-yellow-500 mx-1"></div>
        <div className="w-4 h-4 rounded-full bg-green-500 mx-1"></div>
      </div>
      <a href="#">
        <img
          src={folder}
          alt="Voir toutes les notes"
          className="w-10 h-10 mb-10"
        />
      </a>
      <a href="#">
        <img src={edit} alt="Ecrire une note" className="w-10 h-10 mb-10" />
      </a>
    </aside>
  );
};

export default Sidebar;
