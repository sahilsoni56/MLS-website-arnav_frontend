import { Link } from "react-router-dom";
import { IoDiamond } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: "",
    password: "",
  });

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

 

  return (
    <>
      <nav className="absolute w-full flex-col flex shadow-2xl shadow-black items-center h-12 gap-2 md:justify-center justify-between text-2xl md:h-20 md:py-2 md:gap-4 px-6 ">
        <div className="flex justify-center items-center py-1 gap-3">
          <IoDiamond className="md:text-4xl" />
          <h1 className=" md:text-4xl tracking-widest">Mohanl Lal Sons</h1>
        </div>
       
      </nav>

      <video
        className="w-full bg-zinc-800 object-cover h-screen"
        autoPlay
        loop
        disablePictureInPicture = 'false'
        
        src="https://firebasestorage.googleapis.com/v0/b/mls-ade8b.appspot.com/o/images%2F1705840738329login.mp4?alt=media&token=d462439b-80e3-495b-b100-d78042bc508b"
      />

      <div className="md:top-[6rem] top-[3rem]  z-9 absolute w-full flex flex-col justify-around md:justify-between md:mt-1 items-center bg-transparent login">
        
        <div className="w-[80%]  bg-transparent shadow-2xl backdrop-blur-xl shadow-black md:max-w-[40%] rounded-3xl text-center text-4xl py-4 min-h-[60%] lg:h-[70%] lg:w-[50%]">
          <div className="h-full mx-12">
            <h1>Register</h1>
            <h2 className="text-2xl tracking-widest mt-1">Welcome</h2>
            {/* Email Field */}
            <div className="flex flex-col mt-1 justify-center items-center">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block  text-left font-medium text-xl text-white"
                >
                  Username :
                </label>
              </div>
              <input
                type="text"
                id="Username"
                className="bg-gray-50 border border-red-800 text-gray-900 text-sm rounded-lg placeholder-black  block w-full p-2.5"
                placeholder="Username"
                value={formData.username}
                required
                onChange={(e) => handleInputChange("username", e.target.value)}
              />
            </div>
            {/* Password Field */}
            <div className="flex flex-col mt-1  justify-center items-center">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block  text-left font-medium text-xl text-white "
                >
                  Email :
                </label>
              </div>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border placeholder-black border-red-800 text-gray-900 text-sm rounded-lg   block w-full p-2.5"
                placeholder="John@gmail.com"
                value={formData.email}
                required
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
            <div className="flex flex-col mt-1 justify-center items-center">
              <div className="w-full">
                <label
                  htmlFor="password"
                  className="block  text-left font-medium text-xl text-white "
                >
                  Password :
                </label>
              </div>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border placeholder-black border-red-800 text-gray-900 text-sm rounded-lg   block w-full p-2.5"
                placeholder="Password"
                value={formData.password}
                required
                onChange={(e) => handleInputChange("password", e.target.value)}
              />
            </div>
            <div className="w-full mt-3">
              <button
                type="submit"
                className="text-2xl bg-red-900 text-white rounded-2xl w-full py-2"
              >
                Register
              </button>
            </div>
            <div className="flex gap-2 md:gap-3 mt-3 text-white items-center md:justify-center">
            <h2 className="text-sm ">Have account?</h2>
            <Link to='/login'>
                <h1  className="text-sm  text-blue-600 md:cursor-pointer ">LOGIN</h1>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
