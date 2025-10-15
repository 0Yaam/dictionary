import React, { useEffect, useMemo, useState } from "react";
import Header from "../../Header";
import { Link } from "react-router-dom";
import { myVocaPairs, wordsPerDay } from "./data";
import { loadVocabularyPairs } from "./loadVocabulary";

const MyVoca = () => {
  const [pairs, setPairs] = useState(myVocaPairs);
  const totalDays = useMemo(() => Math.ceil(pairs.length / wordsPerDay), [pairs.length]);
  const days = useMemo(() => Array.from({ length: totalDays }, (_, i) => `Ngày ${i + 1}`), [totalDays]);
  const [nodes, setNodes] = useState(days);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNodes, setFilteredNodes] = useState(days);

  useEffect(() => {
    loadVocabularyPairs(myVocaPairs).then((loaded) => {
      setPairs(loaded);
    });
  }, []);

  useEffect(() => {
    const newDays = Array.from({ length: Math.ceil(pairs.length / wordsPerDay) }, (_, i) => `Ngày ${i + 1}`);
    setNodes(newDays);
    setFilteredNodes(newDays);
  }, [pairs]);

  const SapGiam = () => {
    const sorted = [...nodes].sort((a, b) => {
      const A = parseInt(a.replace("Ngày ", ""));
      const B = parseInt(b.replace("Ngày ", ""));
      return B - A;
    });
    setNodes(sorted);
    setFilteredNodes(sorted);
  };

  const SapTang = () => {
    const sorted = [...nodes].sort((a, b) => {
      const A = parseInt(a.replace("Ngày ", ""));
      const B = parseInt(b.replace("Ngày ", ""));
      return A - B;
    });
    setNodes(sorted);
    setFilteredNodes(sorted);
  };

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleSearchClick = () => {
    const result = nodes.filter((n) => n.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredNodes(result);
  };

  const NhanEnter = (e) => {
    if (e.key === "Enter") handleSearchClick();
  };

  return (
    <>
      <Header />
      <div className="w-full h-screen flex justify-center bg-gradient-to-b from-white to-[#fff6ee]">
        <div className="w-[666px] h-[767px] flex flex-col ">
          <header className="w-[666px] h-20 bg-[#ffecdb] flex justify-center items-center mb-14 mt-10 border border-[#faede1] rounded-2xl shadow-md text-lg text-[#3b342e] font-sans font-bold relative">
            My Vocabulary
          </header>

          <div className="w-full bg-[#f9f0e7] p-4 rounded-lg shadow-md mb-14 mt-10 border border-white">
            <div className="w-full flex items-center gap-4">
              <button className="bg-gray-300 rounded-md px-4 py-2 shadow-md hover:bg-[#b6c6cc]" onClick={SapTang}>
                Sắp xếp tăng
              </button>
              <button className="bg-gray-300 rounded-md px-4 py-2 shadow-md hover:bg-[#b6c6cc]" onClick={SapGiam}>
                Sắp xếp giảm
              </button>

              <input
                type="text"
                placeholder="Nhập ngày cần tìm..."
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                value={searchTerm}
                onChange={handleSearch}
                onKeyDown={NhanEnter}
              />
              <button className="bg-gray-300 rounded-md px-4 py-2 shadow-md hover:bg-[#b6c6cc]" onClick={handleSearchClick}>
                Tìm kiếm
              </button>
            </div>
          </div>

          <div className="w-full grid grid-cols-4 gap-2 flex-1 overflow-y-auto pr-1">
            {filteredNodes.map((label, idx) => {
              const day = parseInt(label.replace("Ngày ", ""));
              return (
                <Link
                  key={idx}
                  to={`/vocabulary/MyVoca/VocaNgay/${day}`}
                  className="bg-gray-200 w-full h-12 flex items-center justify-center rounded-md shadow-md hover:bg-gray-300"
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyVoca;


