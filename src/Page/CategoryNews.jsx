import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const data = useLoaderData();
  const { id } = useParams();
  // console.log(id,data)

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true,
      );
      setCategoryNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      console.log(id, filterNews);

      setCategoryNews(filterNews);
    }
  }, [data, id]);
  return <div>
    <h2 className="font-bold mb-5">Total <span className="text-secondary">{categoryNews.length}</span> news found</h2>

    <div className="grid grid-cols-1 gap-5">
        {
            categoryNews.map(news=> <NewsCard key={news} news={news}></NewsCard>)
        }
    </div>
  </div>;
};

export default CategoryNews;



// import React from "react";
// import { useLoaderData, useParams } from "react-router";
// import NewsCard from "../Components/NewsCard";

// const CategoryNews = () => {
//   const data = useLoaderData();
//   const { id } = useParams();

//   // DERIVED STATE: Calculate the filtered news directly during render
//   let categoryNews = [];

//   if (id === "0") {
//     categoryNews = data;
//   } else if (id === "1") {
//     categoryNews = data.filter((news) => news.others.is_today_pick === true);
//   } else {
//     // Note: Use == or Number(id) if your category_id is a number
//     categoryNews = data.filter((news) => news.category_id == id);
//   }

//   return (
//     <div>
//       <h2 className="font-bold mb-5">
//         Total <span className="text-secondary">{categoryNews.length}</span> news found
//       </h2>

//       <div className="grid grid-cols-1 gap-5">
//         {categoryNews.map((news) => (
//           <NewsCard key={news._id || news.id} news={news} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryNews;