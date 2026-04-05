import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LeatestNews";
import Navbar from "../Components/Navbar";

const Root = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
            <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-3">
            <Navbar></Navbar>
        </nav>
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
