import React, { useState, useEffect } from "react";
import "../style.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineAccountCircle, MdAccountCircle } from "react-icons/md";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Header = () => {
  const [scroll, setscroll] = useState(0);
  const navItems = [
    { id: 1, name: "Sale", link: "/sale" },
    { id: 2, name: "New In", link: "/new_in" },
    { id: 3, name: "Gold", link: "/gold" },
    { id: 4, name: "Silver", link: "/silver" },
    { id: 5, name: "Accessories", link: "/accessories" },
    { id: 6, name: "Diamonds", link: "/diamonds" },
    { id: 7, name: "Gift", link: "/gifts" },
    { id: 8, name: "World of Mohan Lal Sons", link: "/world_of_mls" },
  ];
  const [navi, setNavi] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [header, setheader] = useState(true);
  const handleNavi = () => {
    setNavi(!navi);
  };

  useEffect(() => {
    if (navi) {
      const timeoutId = setTimeout(() => {
        setShowButtons(true);
      }, 500);

      return () => clearTimeout(timeoutId);
    } else {
      setShowButtons(false);
    }
  }, [navi]);

  useEffect(() => {
    const handleScroll = () => {
      setscroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    if (scroll < 50 ? setheader(true) : setheader(false))
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  }, [scroll]);
  useGSAP(() => {
    gsap.from("#h2", {
      scale: 0,
    });
  });

  return (
    <>
      {header ? (
        <header id="img" className="w-full backdrop-blur-sm md:z-[999]  md:bg-opacity-60 ">
          <div
            className={`  navbar overflow-hidden   items-center h-[2.5rem] md:h-[13.5rem] lg:h-[7rem] md:bg-transparent lg:bg-transparent ${
              navi ? "bg-[#F2E9E9] rounded-bl-none rounded-br-none" : null
            }`}
          >
            <div className=" md:items-center  md:justify-center  px-3 md:px-7 ">
              <div className="flex w-full   justify-end items-center font-extrabold">
                <Link to="/login">
                  <span className="md:cursor-pointer  md:text-sm text-[#914042] show">
                    Login |
                  </span>
                </Link>
                <Link to="/register">
                  <span className="md:cursor-pointer  md:text-sm text-[#914042] show">
                    | Register
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex  justify-between items-center  text-left text-xl px-8  ">
              <div className="flex items-center w-full md:justify-center md:gap-3 gap-2">
                <IoDiamond className="lg:text-4xl md:text-3xl text-[#914042]" />
                <motion.h1
                  initial={{ y: -100, opacity: 0, scale: 0.7 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ ease: "linear", duration: 1 }}
                  className="webName text-[#914042] lg:text-4xl md:text-2xl "
                >
                  MOHAN LAL SONS
                </motion.h1>
                <motion.h1
                  initial={{ y: -100, opacity: 0, scale: 0.7 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ ease: "linear", duration: 1 }}
                  className="md:text-4xl md:hidden "
                >
                  MLS
                </motion.h1>
              </div>
              <div className="flex justify-center items-center gap-6">
                <div className="p-2 relative flex items-center justify-center">
                  <div className="absolute bg-[#F2E9E9] rounded-full p-1 px-2 -right-2 -top-1">
                    <h6 className="text-sm">0</h6>
                  </div>
                  <button>
                    <Link to="/cart" className="md:cursor-pointer">
                      <BsCartCheckFill className="md:text-2xl" />
                    </Link>
                  </button>
                </div>
                {navi ? (
                  <ImCross
                    className="md:hidden cursor-pointer"
                    onClick={handleNavi}
                  />
                ) : (
                  <FaBars
                    onClick={handleNavi}
                    className="md:hidden cursor-pointer"
                  />
                )}
              </div>
            </div>
            <nav className="nav md:text-center  ">
              {navItems.map((item, index) => (
                <motion.button
                  initial={{ y: 100, opacity: 0, scale: 0.3 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{
                    ease: "easeIn",
                    duration: 1,
                    delay: index * 0.06,
                  }}
                  key={item.id}
                  className="text-sm text-[#914042] transition-all ease-linear font-bold mx-[20px] bg-transparent px-1 hover:text-[#914042] relative line"
                >
                  <Link to={item.link}>{item.name}</Link>
                </motion.button>
              ))}
            </nav>
          </div>

          <div
            className={`mobile_nav absolute ${
              navi ? "w-[100%]" : "w-0"
            } transition-all justify-between z-[999] flex flex-col ease-in-out duration-300 bg-[#BCAA99]`}
          >
            <div>
              {showButtons &&
                navItems.map((item, index) => (
                  <div key={item.id} className="px-8 overflow-hidden">
                    <motion.button
                      initial={{ y: 50 }}
                      animate={navi ? { y: 0, opacity: 1 } : null}
                      transition={{
                        delay: `${index * 0.06}`,
                      }}
                      onClick={handleNavi}
                      className=" border-b-4 text-[#914042]  border-black  transition-all  ease-in text-xl py-3  hover:rounded-3xl w-full items-center"
                    >
                      <Link to={item.link}>{item.name}</Link>
                    </motion.button>
                  </div>
                ))}
            </div>
            {showButtons && (
              <div className=" flex w-full ">
                <Link to="/login" className="w-[50%] bg-[#F2E9E9]">
                  <button className=" text-2xl flex w-full items-center justify-center gap-2 bg-slate-300 py-3 rounded-xl mx-2 text-red-800 font-bold">
                    <MdOutlineAccountCircle className="text-2xl" />
                    <h2>Login</h2>
                  </button>
                </Link>
                <Link to="/register" className="w-[50%] mx-3">
                  <button className="w-full text-2xl  bg-[#F2E9E9] flex items-center justify-center gap-2 py-3 rounded-xl mx-2 text-red-800 font-bold">
                    <MdAccountCircle className="text-2xl" />
                    <h2>Register</h2>
                  </button>
                </Link>
              </div>
            )}

            <div className="mb-6">
              {showButtons && (
                <>
                  <h2 className=" text-xl text-[#914042] w-full  text-center">
                    -MLS-
                  </h2>
                  <h2 className=" text-xl text-[#914042] w-full  text-center">
                    Contact :- 987xxxxxxx
                  </h2>
                </>
              )}
            </div>
          </div>
        </header>
      ) : (
        <header id="h2 " className="w-full flex items-center overflow-hidden">
          <div id="img" className="flex    justify-between z-[99999] w-[100%]    fixed    items-center  mt-12    py-2 px-8">
            <div className="flex gap-3 justify-center items-center  ">
              <IoDiamond className="lg:text-2xl md:text-3xl text-[#914042]" />
              <h1 className="md:text-2xl text-[#914042]">Mohan Lal Sons</h1>
            </div>
            <div className="flex justify-center items-center ">
              <ul className="flex gap-3">
                {navItems.map((item) => (
                  <li className="text-[#914042]  ">
                    <Link to={item.link}>
                      <h1 className="line">{item.name}</h1>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
