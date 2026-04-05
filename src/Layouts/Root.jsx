import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";

const Root = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <div className="left_nav"></div>
        <div className="main">
          <Outlet></Outlet>
        </div>
        <div className="right_nav"></div>
      </main>
    </div>
  );
};

export default Root;
