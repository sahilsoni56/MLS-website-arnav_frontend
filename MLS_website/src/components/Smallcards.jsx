import React from "react";
import '../style.css'
import { motion } from 'framer-motion';
const Smallcards = ({name1,name2,svg,productcount}) => {
    const hoverVariants = {
        hover: {
          x: 12, // Adjust the value based on how much you want the h1 tags to move
          transition: {
            duration: 0.3, // Adjust the duration of the animation
          },
        },
      };
        
  return (
    <motion.div
    className="py-2  md:mt-0 my-2 px-2 border-4 bg-[#f8cccc] md:cursor-pointer"
    whileHover="hover"
    variants={hoverVariants}
  >
    <motion.div className="flex py-4 flex-col pr-10 pl-7 border-4">
      <div className="h-20 w-20">
        {svg}
      </div>
      <div className="md:text-2xl text-xl font-bold text-[#914042] fonty  my-2">
        <h1>{name1}</h1>
        <h1>{name2}</h1>
      </div>
      <div className="md:text-sm text-[#914042]">
        <h1>{productcount} Products</h1>
      </div>
    </motion.div>
  </motion.div>
  );
};

export default Smallcards;
