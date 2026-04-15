import React, { useEffect, useState } from "react";
import Header from "./Header";
import RightAside from "./HomeLayout/RightAside";
import NewsDetailsCard from "./NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  
//   console.log(news, id);

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header></Header>
      </header>
      <div className="grid grid-cols-12 py-8 gap-4">
        <div className="col-span-9">
            <h1 className="font-bold text-3xl mb-3">News Details</h1>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </div>
        <div className="col-span-3">
          <RightAside></RightAside>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
