import React, { useEffect } from 'react';
import motion from 'framer-motion'
const useMousePosition = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { pageX, pageY } = event;
      setPosition({ x: pageX, y: pageY });
    };

    document.body.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('scroll', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('scroll', handleMouseMove);
    };
  }, []);

  return position;
};

function Cursor() {
  const position = useMousePosition();

  return (
    <motion.div
    animate={{x:`${position.x}`,y:`${position.y}`}}
    transition={{ease: 'expo'}}
      className="absolute z-[1000000] bg-black w-5 h-5 rounded-full top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] transition-all ease-in-out duration-0 pointer-events-none"
    ></motion.div>
  );
}

export default Cursor;
