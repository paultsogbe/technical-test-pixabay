import React from "react";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ setSearch }) => {
  return (
    <div className="w-4/5 flex items-center justify-between xl m-auto py-2.5 px-0">
      <div>
        <img className="h-10 cursor-pointer" src={logo} alt="logo" />
      </div>

      <div className="relative flex flex-col mr-20">
        <input
          type="text"
          className="w-96 pl-10 bg-slate-200 rounded h-9 border-none outline-none text-base"
          placeholder="Recherche des articles"
          onChange={(event) => setSearch(event.target.value)}
        />
        <FontAwesomeIcon
          icon="search"
          className="absolute left-1.5 top-3 text-gray-300"
        />
      </div>
    </div>
  );
};

export default Header;
