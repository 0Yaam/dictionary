import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import hi from "../../Assets/hi.png"

const NewsMenu = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-white to-[#fff6ee] w-full h-screen  items-center">
    <Header />
    <div className="w-[666px] h-[767px] flex flex-col items-center ">
    
        <header className="w-[666px] h-20 bg-[#ffecdb] flex justify-center items-center mb-14 border border-[#faede1] rounded-2xl shadow-md text-lg text-[#3b342e] font-sans font-bold relative">
          Song ngữ
          <img src={hi} alt="" className="absolute top-1 right-2 w-20 h-20" />
        </header>
      
        <main>
          <div className="border rounded shadow-md mb-5 bg-[#f7fafc]">
            <input type="checkbox" id="accordion1" className="hidden peer" />
            <label
              htmlFor="accordion1"
              className="w-[666px] h-20 cursor-pointer py-3 px-4 flex justify-between items-center transition hover:bg-[#ffeff7] text-lg font-sans font-semibold"
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
            <div className="hidden peer-checked:block bg-gray-100 w-[666px] h-30 p-5 text-sm text-left">
              <p>
                Chức năng cho phép bạn đọc văn bản song ngữ Anh - Việt. <br /> <br />
                Khi bạn click vào các từ vựng có dấu gạch chân, nghĩa của chúng
                sẽ được hiển thị ngay lập tức. <br /> <br />
                 Đây là một công cụ hữu ích cho
                những ai đang học ngoại ngữ và muốn cải thiện kĩ năng đọc hiểu
                kèm theo đó là nâng cao vốn từ vựng của mình.
              </p>
            </div>
          </div>
        
          <Link
            to="/bilingual/ngay1"
            className= "w-[666px] h-20 bg-[#f7fafc] flex justify-self-auto items-center font-semibold px-4 border border-[#edeeef] rounded-lg hover:bg-[#ffeff7] my-2 "
          >
            <span>Anh - Việt - Ngày 1</span>
          </Link>

          <Link
        to="/bilingual/ngay2"
            className="w-[666px] h-20 bg-[#f7fafc] flex justify-self-auto items-center font-semibold px-4 border border-[#edeeef] rounded-lg hover:bg-[#ffeff7] my-2"
          >
            <span>Anh - Việt - Ngày 2</span>
          </Link>

          <Link
            to="/bilingual/ngay3"
            className="w-[666px] h-20 bg-[#f7fafc] flex justify-self-auto items-center font-semibold px-4 border border-[#edeeef] rounded-lg hover:bg-[#ffeff7] my-2"
          >
            <span>Anh - Việt - Ngày 3</span>
          </Link>

          <Link
            to="/bilingual/ngay4"
            className="w-[666px] h-20 bg-[#f7fafc] flex justify-self-auto items-center font-semibold px-4 border border-[#edeeef] rounded-lg hover:bg-[#ffeff7] my-2"
          >
            <span>Anh - Việt - Ngày 4</span>
          </Link>
        </main>
        <footer></footer>
      </div>
    </div>
  );
};

export default NewsMenu;
