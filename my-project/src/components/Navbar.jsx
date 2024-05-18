import React from "react";
import {AiOutlineMenu} from 'react-icons/ai'
import sphere from '../assets/the-sphere.jpg'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-28 max-w-[1240px] px-4 mx-auto text-white">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#eed349]">
          Insight
        </h1>
        <h1 className="w-full text-3xl font-bold text-[#eed349]">
          Sphere
        </h1>
      </div>
      <ul className="flex hidden">
      <img className="w-20 h-20" src={sphere}/>
        <li className="p-4 text-yellow-500 font-bold">Home</li>
        <li className="p-4 text-yellow-500 font-bold">Company</li>
        <li className="p-4 text-yellow-500 font-bold">Resources</li>
        <li className="p-4 text-yellow-500 font-bold">About</li>
        <li className="p-4 text-yellow-500 font-bold">Contact</li>
      </ul>
      <div>
        <AiOutlineMenu size={20}/>
      </div>
      <div className="fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#2e5f46]">
      <h1 className="w-full text-3xl font-bold text-[#eed349] m-4">Insight Sphere</h1>
        <ul className="pt-12 uppercase">
        <li className="p-4 text-yellow-500 font-bold">Home</li>
        <li className="p-4 text-yellow-500 font-bold">Company</li>
        <li className="p-4 text-yellow-500 font-bold">Resources</li>
        <li className="p-4 text-yellow-500 font-bold">About</li>
        <li className="p-4 text-yellow-500 font-bold">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
