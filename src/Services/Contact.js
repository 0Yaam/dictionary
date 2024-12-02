import React, { useState } from "react";
import Header from "../components/Header";
import love from "../Assets/sing.png";
import avatar1 from "../Assets/GJb3zr4a0AAVYHP.png";
import avatar2 from "../Assets/Susumu Nakoshi Icon.png"; 
import avatar3 from "../Assets/★☆.png";
import avatar4 from "../Assets/𝘱𝘪𝘯𝘵𝘦𝘳𝘦𝘴𝘵_ 𝘴𝘢𝘥𝘵𝘦𝘳𝘮𝘴_ ♡.png"; 
import github from "../Assets/github_PNG80.png";
import supportme from "../Assets/support_me_on_kofi_beige.png";

const A1 = () => {
  const [avatar, setAvatar] = useState(avatar1); 

  const changeAvatar = () => {
    setAvatar((prevAvatar) => {
      if (prevAvatar === avatar1) return avatar2;
      if (prevAvatar === avatar2) return avatar3;
      if (prevAvatar === avatar3) return avatar4;
      return avatar1; // Quay lại avatar1
    });
  };

  const handleIconClick = (url) => {
    console.log(`Navigating to ${url}`);
    window.open(url, "_blank");
  };

  return (
    <>
      <Header />
      <div className="w-full h-screen flex justify-center bg-gradient-to-b from-white to-[#fff6ee]">
        <div className="w-[666px] h-[767px] flex flex-col">
          <div className="w-full h-20 bg-[#ffecdb] flex justify-center items-center mb-8 mt-10 border border-white rounded-2xl shadow-md text-lg text-[#3b342e] font-sans font-bold relative">
            <span>Please, Donate for me</span>
            <img src={love} alt="" className="absolute top-30 right-[20px] w-20 h-20 " />
          </div>

          <div className="w-full bg-[#f9f0e7] p-4 rounded-lg shadow-md mb-8 border border-white">
            <div className="w-full flex items-center gap-4">
              <input
                type="text"
                placeholder="What are you looking for ?"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button className="bg-gray-300 rounded-md px-4 py-2 shadow-md hover:bg-[#b6c6cc]">
                Tìm kiếm
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?ocean')" }}>
            <div className="flex bg-gradient-to-b from-white to-[#dbebf1] bg-opacity-80 rounded-lg shadow-xl overflow-hidden w-[700px] h-[400px] border border-[#c5d2d8] relative">
              <img 
                src={github}  className="absolute w-12 h-12 right-[270px] bottom-[20px] cursor-pointer z-10" onClick={() => handleIconClick("https://github.com/0Yaam/Dictionary_Project_Nhom6")} alt="GitHub"/>
                <img  src={supportme}  className="absolute w-54 h-12 right-[20px] bottom-[20px] cursor-pointer z-10"  onClick={() => handleIconClick("https://ko-fi.com/0yaam")}  alt="Support me on Ko-fi" />
              <div className="flex flex-col flex-1 p-8 top-10">
                <div className="flex items-center bg-[#F1EFF0] p-3 rounded-lg mb-4">
                  <i className="text-teal-400 fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Username..."
                    className="ml-3 w-full bg-transparent text-[#a02c5bee] outline-none placeholder-gray-500 font-sans font-semibold"
                  />
                </div>

                <div className="flex justify-center mb-6 items-center gap-4">
                  <div className="w-[200px] h-[200px] rounded-full bg-gray-400 bg-opacity-60 flex items-center justify-center">
                    <img src={avatar} className="w-full h-full rounded-full object-cover transition-all duration-500" onClick={changeAvatar} />
                  </div>

                  <div className="absolute w-[200px] h-[200px] bg-[#f5eee8] rounded-lg flex items-center justify-center right-[50px]">
                  </div>
                </div>

                <p className="text-gray-400 mt-2 font-sans font-bold">~/ is where we live!</p>

                <button className="w-full py-2 mt-1  bg-[#ffe5ce] text-black font-semibold rounded-lg hover:opacity-90 transition">
                  Unlock Home!
                </button>
              </div>

              <div className="flex-1 relative bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/350x400/?ocean')" }}>
                <p className="absolute top-5 left-5 text-[#a02c5bee] font-bold">Welcome :) <br></br> Nguyễn Ngọc Trường Dân</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default A1;
