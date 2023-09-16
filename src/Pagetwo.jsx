import React from "react";
import { NavLink } from "react-router-dom";

const Pagetwo = () => {
  return (
    <div className="mt-24 w-full text-center">
      <NavLink to={"/"} className=" rounded-2xl bg-blue-100 p-4 ">
        Homepage
      </NavLink>
    </div>
  );
};

export default Pagetwo;
