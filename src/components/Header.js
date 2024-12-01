import React, { useState } from "react";
import { BiBookAlt } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import ToogleBtn from "./ToogleBtn";
import { FaHome, FaConciergeBell } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";
import { Link, Routes, Route } from "react-router-dom"
import { TbVocabulary } from "react-icons/tb";
import { FaDev } from "react-icons/fa";
import { BiAccessibility } from "react-icons/bi";


const Header = ({ toggle, setToggle }) => {
  return (
    <div>
      <div class="  rounded-r-2xl flex justify-center ">
             
              
              
             <ul class="px-4 py-4 h-full space-y-2 text-gray-800 font-serif flex text-center ">
                <li>
                  <Link to = "/"
                   class="flex w-full items-center p-2 rounded-lg mt-2 mx-10
                   hover:bg-white hover:text-green-400">
                    <FaHome size={29} />
                    <span class="ml-3 font-sans font-semibold">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to = "/news"
                    class="flex w-full items-center p-2 rounded-lg mx-10 hover:bg-white hover:text-green-400">
                    <TbVocabulary size={29} />

                    <span class="ml-3 font-sans font-semibold">Bilingual</span>
                  </Link>
                </li>
                <li>
                  <Link to = "/"
                   class="flex w-full items-center p-2 rounded-lg mx-10 hover:bg-white hover:text-green-400">
                    <BiAccessibility size={29} />
                    <span class="ml-3 font-sans font-semibold">Sevice</span>
                  </Link>
                </li>
                <li>
                  <Link to = "/"
                   class="flex w-full items-center p-2 rounded-lg mx-10 hover:bg-white hover:text-green-400">
                    <FaDev size={29} />
                    <span class="ml-3 font-sans font-semibold">Contact</span>
                  </Link>
                </li>
             </ul>
           </div>
    </div>
  );
};

export default Header;
