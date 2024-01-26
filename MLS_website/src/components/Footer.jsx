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
    <footer className="bg-red-300 w-full ">
      <div className="w-full max-w-screen-2xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            onClick={scrollToTop}
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
           <IoDiamond className="lg:text-4xl md:text-4xl text-2xl"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Mohan Lal Sons
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 md:text-sm text-m font-medium text-black sm:mb-0 ">
            <li>
              <Link to='/' className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to='/' className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to='/' className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link to='/' className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-black sm:mx-auto  lg:my-8" />
        <span className="block md:text-sm text-gray-500 sm:text-center ">
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
