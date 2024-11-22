import React from "react";
import { FaLocationArrow, FaSun, FaSnowflake } from "react-icons/fa";
import { MdTempleHindu } from "react-icons/md";



const Cards = ({ data }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img className="w-full h-48 object-cover" src={data.url} alt={data.Name} />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{data.Name}</h3>
        <p className="text-gray-700 text-base mb-4">{data.description}</p>
        {data.winter && data.summer && (
          <div className="mb-4">
            <p className="flex items-center text-blue-600 mb-1">
              <FaSnowflake className="mr-2" />
              <span className="font-semibold">Winter:</span>
              <span className="ml-2">{data.winter}</span>
            </p>
            <p className="flex items-center text-yellow-600">
              <FaSun className="mr-2" />
              <span className="font-semibold">Summer:</span>
              <span className="ml-2">{data.summer}</span>
            </p>
          </div>
        )}
      </div>
      <div className="px-6 pt-4 pb-6">
        <a
          href={data.location}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-colors duration-300 ease-in-out"
        >
          Location
          <FaLocationArrow className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default Cards;

