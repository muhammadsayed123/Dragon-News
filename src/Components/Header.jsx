import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <img src={logo} alt="" className="w-[400px]" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="">{format(new Date(), "EEEE , MMMM MM , yyyy")}</p>
    </div>
  );

  
};

export default Header;
