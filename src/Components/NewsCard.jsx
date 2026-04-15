import React from 'react';
import { FaRegBookmark, FaShareAlt, FaEye, FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';


const NewsCard = ({ news }) => {
  // Destructuring the provided data structure
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
    id,
  } = news;

  return (
    <div className="card w-full bg-base-100 border border-gray-200 rounded-lg overflow-hidden shadow-sm transition hover:shadow-md">
      
      {/* 1. Top Section: Author and Actions */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-11 rounded-full ring ring-offset-2 ring-gray-100">
              <img src={author?.img} alt="author" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-700">{author?.name}</span>
            <span className="text-xs text-gray-500">
              {new Date(author?.published_date).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
            </span>
          </div>
        </div>
        <div className="flex gap-4 text-gray-400">
          <FaRegBookmark className="cursor-pointer hover:text-primary transition-colors" />
          <FaShareAlt className="cursor-pointer hover:text-primary transition-colors" />
        </div>
      </div>

      {/* 2. Middle Section: Title, Image, and Summary */}
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-extrabold text-gray-800 leading-snug">
          {title}
        </h2>
        
        <figure className="relative h-64 w-full overflow-hidden rounded-lg">
          <img
            src={image_url}
            alt="news thumbnail"
            className="w-full h-full object-cover"
          />
        </figure>

        <p className="text-sm text-gray-600 leading-relaxed">
          {details.length > 250 ? (
            <>
              {details.substring(0, 200)}... 
              <Link to={`/newsDetails/${id}`} className="text-orange-500 font-bold cursor-pointer hover:underline ml-1">
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      <div className="divider px-4 my-0 opacity-50"></div>

      {/* 3. Bottom Section: Ratings and Views */}
      <div className="flex items-center justify-between p-4 pt-2">
        <div className="flex items-center gap-1.5">
          <div className="flex text-orange-400">
            {[...Array(5)].map((_, i) => (
              i < Math.round(rating?.number || 0) ? <FaStar key={i} /> : <FaRegStar key={i} />
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-500">{rating?.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500 font-medium">
          <FaEye className="text-lg" />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;