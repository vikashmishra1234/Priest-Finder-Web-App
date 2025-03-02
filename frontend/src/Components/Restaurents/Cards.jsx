import React from "react";
import { FaLocationArrow, FaSun, FaSnowflake, FaMapMarkedAlt } from "react-icons/fa";
import { MdTempleHindu } from "react-icons/md";



const Cards = ({ data,distance=null }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={data.url} alt={data.Name} />
        {data.winter&&<div className="absolute top-0 left-0 bg-orange-500 text-white px-3 py-1 rounded-br-lg">
          <MdTempleHindu className="inline-block mr-1" />
          Temple
        </div>}
      </div>
      <div className="px-6 py-4">
        <h3 className="font-bold text-2xl mb-2 text-gray-800">{data.Name}</h3>
        <p className="text-gray-600 text-base mb-4 line-clamp-3">{data.description}</p>
        {data.winter && data.summer && (
          <div className="mb-4 bg-gray-100 rounded-lg p-3">
            <p className="flex items-center text-blue-600 mb-2">
              <FaSnowflake className="mr-2 text-lg" />
              <span className="font-semibold">Winter:</span>
              <span className="ml-2">{data.winter}</span>
            </p>
            <p className="flex items-center text-yellow-600">
              <FaSun className="mr-2 text-lg" />
              <span className="font-semibold">Summer:</span>
              <span className="ml-2">{data.summer}</span>
            </p>
            {
              distance&&<p className="flex items-center text-yellow-600">
              <FaSun className="mr-2 text-lg" />
              <span className="font-semibold">Distace From You:</span>
              <span className="ml-2">{distance} km.</span>
            </p>
            }
          </div>
        )}
      </div>
      <div className="px-6 pt-2 pb-6">
        <a
          href={data.location}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        >
          <FaMapMarkedAlt className="mr-2" />
          View on Map
        </a>
      </div>
    </div>
  );
};

export default Cards;

