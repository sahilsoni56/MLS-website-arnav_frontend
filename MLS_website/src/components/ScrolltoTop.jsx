import React from 'react'
import { GoArrowUp } from "react-icons/go";
function ScrolltoTop() {
    const scrolling = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // optional, adds a smooth scrolling effect
        });
      };
  return (
    <div onClick={scrolling} className='flex fixed z-[100000000] bg-red-500 rounded-full md:p-3 bottom-10 right-10'>
        <GoArrowUp className='md:text-2xl' />
    </div>
  )
}

export default ScrolltoTop