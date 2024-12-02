import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Header from "../../Header";

const VocaNgay3 = () => {
  const [day, setDay] = useState(3); // Sử dụng useState để quản lý trạng thái
  const words = [
    { english: "road", vietnamese: "đường" },
{ english: "bridge", vietnamese: "cầu" },
{ english: "city", vietnamese: "thành phố" },
{ english: "village", vietnamese: "làng" },
{ english: "forest", vietnamese: "rừng" },
{ english: "sky", vietnamese: "bầu trời" },
{ english: "star", vietnamese: "ngôi sao" }

  ];

  const navigate = useNavigate();

  // Handle Next button
  const handleNext = () => {
    const nextDay = day + 1;
    setDay(nextDay); // Cập nhật trạng thái `day`
    navigate(`/vocabulary/A1/VocaNgay${nextDay}`);
  };

  // Handle Previous button
  const handlePrevious = () => {
    if (day > 1) {
      const previousDay = day - 1;
      setDay(previousDay); // Cập nhật trạng thái `day`
      navigate(`/vocabulary/A1/VocaNgay${previousDay}`);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full h-screen flex justify-center bg-gradient-to-b from-white to-[#fff6ee] relative">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className={`absolute left-[calc(44%-300px)] top-[calc(44%-300px)] ${
            day > 1 ? "bg-gray-300 hover:bg-gray-400" : "bg-gray-200"
          } text-gray-700 w-[100px] h-[45px] rounded-md shadow-md flex justify-center items-center font-bold`}
          disabled={day <= 1}
        >
          Previous
        </button>

        <div className="w-[500px] flex flex-col">
          {/* Title Box */}
          <div className="w-full h-16 bg-[#ffecdb] flex justify-center items-center mb-6 border border-white rounded-2xl shadow-md text-lg text-[#3b342e] font-sans font-bold relative mt-20">
            Ngày {day}
          </div>

          {/* Word List */}
          <div className="flex-1 overflow-y-auto p-4 h-[calc(100%-80px)]">
            <div className="space-y-3">
              {words.map((word, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white p-3 rounded-lg shadow-md border border-gray-200"
                >
                  <div className="flex-1 text-left">
                    <span className="font-sans text-base pl-9">{word.english}</span>
                  </div>

                  <div className="mx-5 text-gray-400 font-bold">|</div>

                  <div className="flex-1 text-right">
                    <span className="text-[#743131] font-medium text pr-9">
                      {word.vietnamese}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-[calc(44%-300px)] top-[calc(44%-300px)] bg-gray-300 text-gray-700 w-[100px] h-[45px] rounded-md shadow-md hover:bg-gray-400 flex justify-center items-center font-bold"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default VocaNgay3;
