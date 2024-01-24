// Card.jsx
import React from "react";
import "../card.css";
import { Link } from "react-router-dom";

function Card({ name, desc, img, toggle }) {
  return (
    <Link className={`md:w-[30%] bg-red-200 w-full md:hover:scale-105 ${toggle === 'false' ? 'w-1/2' : null}`} >
      <div className="w-full  p-2  rounded-lg shadow-xl  ">
        <div className="w-full  object-cover overflow-hidden rounded-xl">
          <img
            className="   w-full object-cover md:h-96 h-48"
            src={img}
            alt="image"
          />
        </div>
        <div className="pl-2  mt-10">
          <h4 className="md:text-3xl font-extrabold tracking-wider  text-black">
            {name}
          </h4>
          <p
            className={`mb-2 md:text-xl leading-normal text-black ${
              toggle === "false" ? "hidden" : null
            }`}
          >
            {desc}
          </p>
          <button
            className={`px-6 py-2 text-sm border text-black bg-white rounded shadow ${
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
