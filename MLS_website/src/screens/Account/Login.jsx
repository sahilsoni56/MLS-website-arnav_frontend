import { Link } from "react-router-dom";
import { IoDiamond } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
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

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const [w, setw] = useState(false);

  const handleChange = () => {
    setw(!w);
  };

  return (
    <>
      <nav className="absolute w-full flex md:flex-col shadow-2xl shadow-black items-center h-12  gap-2 justify-center  text-2xl md:h-32 c md:gap-4 px-6 ">
        <div className="flex justify-center items-center py-1 gap-3">
          <IoDiamond className=" md:text-4xl" />
          <h1 className=" md:text-4xl tracking-wider">Mohanl Lal Sons</h1>
        </div>
        <nav className="nav md:text-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="text-xl mx-[20px] font-bold bg-transparent px-1  button"
            >
              <Link to={item.link}>{item.name}</Link>
            </button>
          ))}
        </nav>
      </nav>

      <video
        className="w-full bg-zinc-800 object-cover h-screen"
        autoPlay
        loop
        disablePictureInPicture = 'false'
        
        src="https://firebasestorage.googleapis.com/v0/b/mls-ade8b.appspot.com/o/images%2F1705840738329login.mp4?alt=media&token=d462439b-80e3-495b-b100-d78042bc508b"
      />

      <div className="md:top-[8rem] top-[3rem] z-9 absolute w-full flex flex-col justify-around md:justify-between md:py-2 items-center bg-transparent login">
        <div className="w-full md:mb-1 backdrop-blur-xl   px-4 mt-2 md:px-28">
          <h1 className="md:text-xl text-xl flex flex-wrap text-center text-red-900 ">
            "Embrace opulence and luxury; adorn yourself in the language of
            exquisite pieces, each narrating a luminous chapter in the book of
            your unique style journey."
          </h1>
        </div>
        <div className="w-[80%]  bg-transparent shadow-2xl backdrop-blur-xl shadow-black md:max-w-[40%] rounded-3xl text-center text-3xl py-3 min-h-[45%] lg:h-[70%] lg:w-[50%]">
          <div className="h-full mx-12">
            <h1>Login</h1>
            <h2 className="md:text-2xl text-xl tracking-widest">Welcome back :)</h2>
            {/* Email Field */}
            <div className="flex flex-col  justify-center items-center">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-left font-medium text-xl text-white"
                >
                  Email :
                </label>
              </div>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-red-800 text-gray-900 text-sm rounded-lg placeholder-black  block w-full p-2.5"
                placeholder="John@gmail.com"
                value={formData.email}
                required
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
            {/* Password Field */}
            <div className="flex flex-col justify-center items-center">
              <div className="w-full">
                <label
                  htmlFor="password"
                  className="block mb-2 md:mt-1 text-left font-medium text-xl text-white "
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
                Login
              </button>
              <div className="flex gap-2 md:gap-3 mt-3 text-white">
            <h2 className="text-sm ">Don't have any account?</h2>
            <Link to='/register'>
                <h1  className="text-sm  text-blue-600 md:cursor-pointer ">Register</h1>
            </Link>
            </div>
            </div>
          </div>
        </div>
      </div> 
      
    </>
  );
};

export default Navbar;
