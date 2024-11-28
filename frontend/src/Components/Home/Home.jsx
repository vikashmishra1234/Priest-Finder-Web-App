import React, { useEffect } from "react";
import "./style.scss";
import Mandirs from "../Mandirs";
import PriestIntro from "../searchPriest/PriestIntro";
import { useSelector, useDispatch } from "react-redux";
import { fetchPriestData } from "../redux/Priest/getPriest";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Cards from "../Restaurents/Cards";
import restaurentData from "../../RestaurentData.json";
import About from "./About";
import Footer from "../footer/Footer";
import Landing from "./Carousels";

const Priests = () => {
  const Navigate = useNavigate();
  const priests = useSelector((state) => state.PriestData.priests) || null;

  const dispatch = useDispatch();
  useEffect(() => {
    !priests && dispatch(fetchPriestData());
  }, [priests]);
  return (
    <div>
      <Landing />
      <About />
      <Mandirs />
      <div>
        {priests ? ( 
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-center text-orange-800 mb-8 flex items-center justify-center">Some Popular Priests in Vrindavan</h2>
            {  priests.map((priest, ind) =>
                ind < 3 ? <PriestIntro priest={priest} key={priest._id} /> : ""
              )}
                 <button
      onClick={() => Navigate('/priest/find')}
      className="group flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 shadow-md hover:shadow-lg"
    >
      <span className="text-sm md:text-base">See All Priests</span>
      <FaLongArrowAltRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
    </button>
          </div>
          
        ) : (
          <div>No Priest Found.</div>
        )}
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-8 flex items-center justify-center">
          Bhojanalaya in Vrindavan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurentData.restaurents.map((data) => (
            <Cards data={data} />
          ))}
        </div>
      
      </div>
      <Footer />
    </div>
  );
};

export default Priests;
