import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import excited from "../../Assets/excited.png"

const VocaMenu = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-white to-[#fff6ee] w-full h-full  items-center">
    <Header />
    <div className="w-[666px] h-[767px] flex flex-col items-center ">
      <header className="w-[666px] h-20 bg-[#ffecdb] flex justify-center items-center mt-10 border border-[#faede1] rounded-2xl shadow-md text-lg text-[#3b342e] font-sans font-bold relative">
        Vocabulary soon available
        
        <img src={excited} alt="" className="absolute right-[20px] w-20 h-20 " />
      </header>
        <main className="w-full h-100% mt-14">
          <div className="border rounded shadow-md mb-5 bg-[#f7fafc] w-full max-w-[666px] min-w-[666px]">
            <input type="checkbox" id="accordion1" className="hidden peer" />
            <label
              htmlFor="accordion1"
              className="w-full h-20 cursor-pointer py-3 px-4 flex justify-between items-center transition hover:bg-[#ffeff7] text-lg font-sans font-semibold"
            >
              <span>Giới thiệu</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 peer-checked:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>
            <div className="hidden peer-checked:block bg-gray-100 w-full h-30 p-5 text-sm text-left">
              <p>
                Chức năng cho phép học từ vựng theo cấp. <br /> <br /><br /> <br />
                Trong mỗi cấp chia theo từng ngày. <br /> <br /><br /> <br />
                Có chức năng như sắp sếp, tìm kiếm, next, previous.
              </p>
            </div>
          </div>
        
          <Link
            to="/vocabulary/A1"
            className="w-full h-20 bg-[#f7fafc] flex justify-center items-center font-semibold px-4  border border-[#edeeef] rounded-lg hover:bg-[#ffeff7] my-2 text-base font-sans"
          >
            <span>A1 (Beginner)</span>
          </Link>

          <Link
            to="/vocabulary/A2"
            className="w-full h-20 bg-[#f7fafc] flex justify-center items-center font-semibold px-4 border border-[#edeeef] rounded-lg hover:bg-[#ffeff7] my-2 text-base font-sans"
          >
            <span>A2 (Elementary)</span>
          </Link>

          <Link
            to="/vocabulary/B1"
            className="w-full h-20 bg-[#f7fafc] flex justify-center items-center font-semibold px-4 border border-[#edeeef] rounded-lg hover:bg-[#ffeff7] my-2 text-base font-sans"
          >
            <span>B1 (Intermediate)</span>
          </Link>

          <Link
            to="/vocabulary/B2"
            className="w-full h-20 bg-[#f7fafc] flex justify-center items-center font-semibold px-4 border border-[#edeeef] rounded-lg hover:bg-[#ffeff7] my-2 text-base font-sans"
          >
            <span>B2 (Upper-Intermediate)</span>
          </Link>

          <Link
            to="/vocabulary/C1"
            className="w-full h-20 bg-[#f7fafc] flex justify-center items-center font-semibold px-4 border border-[#edeeef] rounded-lg hover:bg-[#ffeff7] my-2 text-base font-sans"
          >
            <span>C1 (Advanced)</span>
          </Link>

          <Link
            to="/vocabulary/C2"
            className="w-full h-20 bg-[#f7fafc] flex justify-center items-center font-semibold px-4 border border-[#edeeef] rounded-lg hover:bg-[#ffeff7] my-2 text-base font-sans"
          >
            <span>C2 (Proficiency)</span>
          </Link>

        </main>
        <footer></footer>
      </div>
    </div>
  );
};

export default VocaMenu;
