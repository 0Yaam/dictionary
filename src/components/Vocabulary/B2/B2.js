import React, { useState } from "react";
import { Link } from "react-router-dom"; // Thêm import Link
import Header from "../../Header";
import love from "../../../Assets/mockery.png"
const A1 = () => {

  // định nghĩa cau truc node
  class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  // khoi tao node
  let root = new TreeNode("Ngày 1");
  root.left = new TreeNode("Ngày 2");
  root.right = new TreeNode("Ngày 3");
  root.left.left = new TreeNode("Ngày 4");
  root.left.right = new TreeNode("Ngày 5");
  root.right.left = new TreeNode("Ngày 6");
  root.right.right = new TreeNode("Ngày 7");


 
  let nodeArray = [];
  
  //duyet
  const DuyetNode = (node) => {
    if (node) {
      nodeArray.push(node); 
      DuyetNode(node.left); 
      DuyetNode(node.right); 
    }
  };

 
  DuyetNode(root);


  const [nodes, setNodes] = useState(nodeArray);
  const [searchTerm, setSearchTerm] = useState(""); // luu gia tri tim kiem
  const [filteredNodes, setFilteredNodes] = useState(nodes); // State luu danh sach node da doc

  const SapGiam = () => {
    const sortedNodes = [...nodes].sort((a, b) => {
      const valueA = parseInt(a.value.replace("Ngày ", ""));
      const valueB = parseInt(b.value.replace("Ngày ", ""));
      return valueB - valueA;
    });
    setNodes(sortedNodes);
    setFilteredNodes(sortedNodes);
  };
  
  const SapTang = () => {
    const sortedNodes = [...nodes].sort((a, b) => {
      const valueA = parseInt(a.value.replace("Ngày ", ""));
      const valueB = parseInt(b.value.replace("Ngày ", ""));
      return valueA - valueB;
    });
    setNodes(sortedNodes);
    setFilteredNodes(sortedNodes);
  };
  
  

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); 
  };

  const handleSearchClick = () => {
    const result = nodes.filter((node) => node.value.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredNodes(result);
  };

  //click enter
  const NhanEnter = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <>
      <Header />
      <div className="w-full h-screen flex justify-center bg-gradient-to-b from-white to-[#fff6ee]">
        <div className="w-[666px] h-[767px] flex flex-col ">
        <header className="w-[666px] h-20 bg-[#ffecdb] flex justify-center items-center mb-14 mt-10 border border-[#faede1] rounded-2xl shadow-md text-lg text-[#3b342e] font-sans font-bold relative">
          Vocabulary
          <img src={love} alt="" className="absolute top-1 right-2 w-20 h-20" />
        </header>

          <div className="w-full bg-[#f9f0e7] p-4 rounded-lg shadow-md mb-14 mt-10 border border-white">
            <div className="w-full flex items-center gap-4">
              <button 
                className="bg-gray-300 rounded-md px-4 py-2 shadow-md hover:bg-[#b6c6cc]"
                onClick={SapTang} 
              >
                Sắp xếp tăng
              </button>
              <button 
                className="bg-gray-300 rounded-md px-4 py-2 shadow-md hover:bg-[#b6c6cc]"
                onClick={SapGiam} // Thêm sự kiện click để sắp xếp giảm
              >
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
              <button 
                className="bg-gray-300 rounded-md px-4 py-2 shadow-md hover:bg-[#b6c6cc]"
                onClick={handleSearchClick} 
              >
                Tìm kiếm
              </button>
            </div>
          </div>

          <div className="w-full grid grid-cols-4 gap-2">
            {filteredNodes.map((node, index) => (
              // Sử dụng Link để gắn đường dẫn cho từng nút
              <Link
                key={index}
                to={`/vocabulary/B2/Voca${node.value.replace("Ngày ", "Ngay")}`} // Đường dẫn tùy chỉnh cho mỗi nút
                className="bg-gray-200 w-full h-12 flex items-center justify-center rounded-md shadow-md hover:bg-gray-300"
              >
                {node.value}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default A1;
