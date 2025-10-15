import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbVocabulary } from "react-icons/tb";
import { FaDev } from "react-icons/fa";
import { BiAccessibility } from "react-icons/bi";


const Header = ({ toggle, setToggle }) => {
  return (
    <div>
      <div className="  rounded-r-2xl flex justify-center ">
             <ul className="px-4 py-4 h-full space-y-2 text-gray-800 font-serif flex text-center ">
                <li>
                  <Link to = "/"
                   className="flex w-full items-center p-2 rounded-lg mt-2 mx-10
                   hover:bg-white hover:text-[#6c63ff]">
                    <FaHome size={29} />
                    <span className="ml-3 font-sans font-semibold">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to = "/bilingual"
                    className="flex w-full items-center p-2 rounded-lg mx-10 hover:bg-white hover:text-[#6c63ff]">
                    <TbVocabulary size={29} />

                    <span className="ml-3 font-sans font-semibold">Bilingual</span>
                  </Link>
                </li>
                <li>
                  <Link to = "/vocabulary"
                   className="flex w-full items-center p-2 rounded-lg mx-10 hover:bg-white hover:text-[#6c63ff]">
                    <BiAccessibility size={29} />
                    <span className="ml-3 font-sans font-semibold">Vocabulary-Meta</span>
                  </Link>
                </li>
                <li>
                  <Link to = "/contact"
                   className="flex w-full items-center p-2 rounded-lg mx-10 hover:bg-white hover:text-[#6c63ff]">
                    <FaDev size={29} />
                    <span className="ml-3 font-sans font-semibold">Contact</span>
                  </Link>
                </li>
             </ul>
           </div>
    </div>
  );
};

export default Header;
