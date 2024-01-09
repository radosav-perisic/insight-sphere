import React from "react";
import sphere from '/assets/the-sphere.jpg';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-32 max-w-[1240px] mx-auto text-white">
      <div>
        <img src={sphere}/>
        <h1 className="w-full text-3xl font-bold text-[#eed349]">
          Insight
        </h1>
        <h1 className="w-full text-3xl font-bold text-[#eed349]">
          Sphere
        </h1>
      </div>
      <ul>
        <li>Home</li>
        <li>Company</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
