// Card.jsx
import React from "react";
import "../card.css";
import { Link } from "react-router-dom";

function Card({ name, desc, img, toggle }) {
  return (
    <Link className={`md:w-full bg-[#BCAA99] w-full  `} >
      <div className="w-full  p-2  rounded-lg shadow-xl  ">
        <div className="w-full  object-cover overflow-hidden rounded-xl">
          <img
            className=" md:hover:scale-125 transition-all duration-200 ease-out   w-full object-cover md:h-56 h-48 "
            src={img}
            alt="image"
          />
        </div>
        <div className="pl-2  mt-10">
          <h4 className="md:text-xl font-extrabold tracking-wider  text-black">
            {name}
          </h4>
          <p
            className={`mb-2 md:text-sm leading-normal text-black ${
              toggle === "false" ? "hidden" : null
            }`}
          >
            {desc}
          </p>
          <button
            className={`px-6 py-2 hover:bg-black hover:text-white transition-all ease-linear duration-500 hover:w-full text-sm border text-black bg-white rounded shadow style font-semibold ${
              toggle === "false" ? "hidden" : null
            }`}
          >
            Shop {name} -
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Card;
