import React from "react";
import { IoDiamond } from "react-icons/io5";
import { Link } from "react-router-dom";
function Footer() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // optional, adds a smooth scrolling effect
      });
    };

  return (
    <footer id="img" className=" w-full ">
      <div className="w-full max-w-screen-2xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            onClick={scrollToTop}
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
           <IoDiamond className="lg:text-4xl md:text-4xl text-2xl text-[#914042]"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#914042] ">
            Mohan Lal Sons
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 md:text-sm text-m font-medium text-[#914042] sm:mb-0 ">
            <li>
              <Link to='/' className=" me-4 md:me-6 relative line ">
                About
              </Link>
            </li>
            <li>
              <Link to='/' className=" me-4 md:me-6 relative line">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to='/' className="me-4 md:me-6 relative line">
                Licensing
              </Link>
            </li>
            <li>
              <Link to='/' className=" relative line">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-[#914042] sm:mx-auto  lg:my-8" />
        <span className="block md:text-sm text-[#914042] sm:text-center ">
          © 2023{" "}
          <Link to='/' className="hover:underline">
            Mohan Lal Sons
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
