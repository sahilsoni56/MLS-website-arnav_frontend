
import React from "react";
import "../style.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
function Landing_page() {
  const carditems = [
    {
      img: "https://images.pexels.com/photos/7541808/pexels-photo-7541808.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Necklace",
      desc: `More than adornment, a whispered poem, your necklace speaks of who
      you've been.`,
    },
    {
      img: "https://images.pexels.com/photos/10976653/pexels-photo-10976653.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Rings",
      desc: `Gemstone secrets, whispered fate, a ring's embrace, unfolds your gate.`,
    },
    {
      img: "https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Earrings",
      desc: `Metal kisses, secrets they keep, on gilded whispers, dreams softly sleep.`,
    },
  ];

  const category = [
    {
      name: "Gold- Jewelry",
      img: "https://images.pexels.com/photos/2058070/pexels-photo-2058070.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: `Metal kisses, secrets they keep, on gilded whispers, dreams softly sleep.`,
      link: "/",
    },

    {
      name: "Diamond- Jewelry",
      img: "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/",
    },
    {
      name: "silver- Jewelry",
      img: "https://images.pexels.com/photos/5673960/pexels-photo-5673960.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/",
    },
  ];
  return (
    <>
      <div className="h-screen w-full">
        <Header />
        <div className="absolute -z-10 top-0 h-screen   w-full  overflow-hidden ">
          <video
            autoPlay
            playsInline
            loop
            className="h-full w-full  object-cover"
            poster="https://asset.swarovski.com/videos/f_auto,q_auto,w_1920,h_1080,c_fill/ac_none/so_0/swa-cms/videos/2024_VD_VIDEO-AUTOMATA1-HOR-6SEC-NOVO_VID_GL_25FPS_PRORES/TT.jpg"
            src="https://firebasestorage.googleapis.com/v0/b/mls-ade8b.appspot.com/o/images%2F1705911833999TT.webm?alt=media&token=fbac457b-703c-4996-8977-bb46d12edeec"
          />
        </div>
      </div>
      {/* ignite your dreams/ */}
      <div className="w-full bg-red-300 flex justify-center flex-col items-center  md:px-8">
        <h1
         
          className="text-2xl py-2 md:text-4xl tracking-wider italic font "
        >
          Ignite Your Dreams
        </h1>
        <h2 className="md:px-16 flex flex-wrap pt-2 pb-5 px-3 md:py-2  text-center text-sm md:text-xl font-medium">
          Since 1992, Mohanlal Sons epitomizes unbridled innovation and design
          mastery in jewelry and accessories. We redefine luxury with an
          audacious spirit, setting new standards with each piece. Welcome to
          the pinnacle of distinction—welcome to Mohanlal Sons.
        </h2>
      </div>
      {/* green gem */}
      <div className="relative w-full md:h-screen h-screen">
        <div className="w-full absolute -z-10 h-full  object-contain">
          <img
            className="transform h-full scale-x-[-1] w-full"
            src="https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <div className=" h-full md:h-screen top-0 w-full  flex md:flex-row items-end md:items-end  flex-row   md:bg-transparent ">
          <div className="  md:pb-36  px-6 md:px-32 md:inline-block  h-[40%] w-[80%]">
            <h1 className="  text-xl   text-white tracking-wider  md:text-3xl">
              Dazzling Emerald Drop
            </h1>
            <h2 className=" text-white tracking-wider text-sm mb-3  md:text-2xl md:w-96 w-full backdrop-blur-lg md:mt-4">
              The sparkling diamonds add an extra touch of glamour.
            </h2>
            <Link to="/diamonds">
              <button className="bg-black text-white md:mt-4 px-3 py-2 hover:scale-110 hover:bg-white transition-all ease-linear hover:text-black font md:px-12 md:py-4 md:-mb-4 ">
                Discover more
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* cardss */}
      <div className="w-full  bg-red-300 flex flex-col justify-center items-center text-2xl text-black md:text-5xl">
        <h1 className="tracking-wider py-6 md:py-15">Love at First Sight</h1>
      </div>
      <div className="flex w-full bg-red-300 py-4 gap-3 justify-center flex-wrap">
        {carditems.map((item, index) => (
          <Card key={index} name={item.name} desc={item.desc} img={item.img} />
        ))}
      </div>
      {/* chains */}
      <div className="w-full md:h-screen gap-8  bg-red-300 md:flex px-6 items-center">
        <div className="md:w-[50%]  md:flex md:justify-center md:flex-col w-full   h-[70%] ">
          <h1 className="md:text-4xl text-2xl    font-bold">
            Matrix
          </h1>
          <h1 className="w-[100%] md:mt-4 mt-2 md:text-sm">
            An expression of expert savoir-faire, our mesmerizing Matrix family
            is designed to inspire and impress. Showcasing an unexpected
            fluidity embracing classic cuts, vibrant colors, and essential
            Tennis styles, these works of wonder can be worn solo or stacked
            together for self-expression
          </h1>
          <button className="bg-white hover:bg-black hover:text-white transition-all ease-linear delay-100 text-black w-1/2 md:px-6 lg:px-8 lg:py-3 md:mt-4 my-3 md:py-2">
           Shop chains
          </button>
        </div>
        <div className="w-full flex items-center justify-center  h-[75%] object-cover object-center">
          <video
            autoPlay
            playsInline
            muted
            loop
            className=" w-full h-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/mls-ade8b.appspot.com/o/images%2F1705935470997pexels-sunsetoned-6469640%20(2160p).mp4?alt=media&token=fe6d4ba7-d1a3-4341-b5b5-1b302a532a85"
            alt=""
          />
        </div>
      </div>
      {/* Shop by Category */}
      <div className="w-full py-3    bg-red-300">
        <div className="md:h-28 bg-red-300 flex items-center justify-center">
          <h1 className="md:text-4xl text-3xl py-4">Shop by Category</h1>
        </div>
        <div className="flex gap-3   w-full  justify-center flex-wrap">
          {category.map((item, index) => (
            <Card key={index} toggle="false" name={item.name} img={item.img} />
          ))}
        </div>
      </div>
      {/* world 0f MLS */}
      <div className="w-full py-4 md:pt-3 bg-red-300 px-4">
        <div className=" md:py-3 flex items-center justify-center">
          <h1 className="md:text-3xl font-bold tracking-wider">World of MLS</h1>
        </div>
        <div className=" flex md:py-3 py-2 items-center justify-center">
          <h1 className="tracking-wide text-center text-sm">
            Illuminating the many facets of MLS from heritage to lifestyle
          </h1>
        </div>
        <div className="flex items-center md:py-4 justify-center w-full">
          <Link to="/world_of_mls">
            <button className="outline text-black hover:bg-black hover:text-white transition-all ease-linear px-8 py-2 md:py-2 md:px-10">
              Explore all
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing_page;
