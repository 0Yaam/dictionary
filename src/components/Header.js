import React, { useState } from "react";
import { BiBookAlt } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import ToogleBtn from "./ToogleBtn";
import { FaHome, FaConciergeBell } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";
import { Link, Routes, Route } from "react-router-dom"

const Header = ({ toggle, setToggle }) => {
  return (
    <div>
      <div class="  rounded-r-2xl flex justify-center">
             
              
              
             <ul class="px-4 py-4 h-full space-y-2 text-gray-800 font-serif flex text-center">
                <li>
                  <Link to = "/"
                   class="flex w-full items-center p-2 rounded-lg mt-2 mx-5
                   hover:bg-white hover:text-green-400">
                    <FaHome />
                    <span class="ml-3">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to = "/news"
                    class="flex w-full items-center p-2 rounded-lg mx-5 hover:bg-white hover:text-green-400">
                    <GiCoffeeCup />
                    <span class="ml-3">News</span>
                  </Link>
                </li>
                <li>
                  <Link to = "/"
                   class="flex w-full items-center p-2 rounded-lg mx-5 hover:bg-white hover:text-green-400">
                    <FaConciergeBell/>
                    <span class="ml-3">Sevice</span>
                  </Link>
                </li>
                <li>
                  <Link to = "/"
                   class="flex w-full items-center p-2 rounded-lg mx-5 hover:bg-white hover:text-green-400">
                    <IoSettings />
                    <span class="ml-3">Contact</span>
                  </Link>
                </li>
             </ul>
           </div>
    </div>
  );
};

export default Header;
