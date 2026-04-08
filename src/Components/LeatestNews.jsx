import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 bg-base-200 p-2">
      <p className="text-base-100 bg-secondary px-3 py-1">Latest</p>
      <marquee className="font-semibold " scrollamount="8">
        <span className="mr-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, nesciunt.
        </span>
        <span className="mr-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, nesciunt.
        </span>
        <span className="mr-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, nesciunt.
        </span>
      </marquee>
      {/* <Marquee>
        ikhfkjgbjkfgbuik
      </Marquee> */}
    </div>
  );
};

export default LatestNews;
