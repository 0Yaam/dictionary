import React, { useState } from "react";
import { Link } from "react-router-dom"; // Thêm import Link
import Header from "../../Header";

const B1 = () => {
  // Định nghĩa cấu trúc Node cho cây nhị phân
  class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  // Tạo cây nhị phân
  let root = new TreeNode("Ngày 1");
  root.left = new TreeNode("Ngày 2");
  root.right = new TreeNode("Ngày 3");
  root.left.left = new TreeNode("Ngày 4");
  root.left.right = new TreeNode("Ngày 5");
  root.right.left = new TreeNode("Ngày 6");
  root.right.right = new TreeNode("Ngày 7");


  // Đưa các nút vào mảng (Duyệt cây nhị phân theo thứ tự Pre-order)
  let nodeArray = [];
  
  // Hàm duyệt cây nhị phân theo Pre-order (root, left, right)
  const traverseTree = (node) => {
    if (node) {
      nodeArray.push(node); // Thêm node vào mảng
      traverseTree(node.left); // Duyệt cây con bên trái
      traverseTree(node.right); // Duyệt cây con bên phải
    }
  };

  // Bắt đầu duyệt từ nút gốc
  traverseTree(root);

  // Sử dụng React hook để quản lý mảng node
  const [nodes, setNodes] = useState(nodeArray);
  const [searchTerm, setSearchTerm] = useState(""); // State để lưu giá trị tìm kiếm
  const [filteredNodes, setFilteredNodes] = useState(nodes); // State để lưu danh sách node đã lọc

  // Hàm sắp xếp giảm dần
  const handleSortDescending = () => {
    const sortedNodes = [...nodes].sort((a, b) => {
      const valueA = parseInt(a.value.replace("Ngày ", ""));
      const valueB = parseInt(b.value.replace("Ngày ", ""));
      return valueB - valueA;
    });
    setNodes(sortedNodes);
    setFilteredNodes(sortedNodes); // Cập nhật lại danh sách đã lọc
  };
  

  // Hàm sắp xếp tăng dần
  const handleSortAscending = () => {
    const sortedNodes = [...nodes].sort((a, b) => {
      const valueA = parseInt(a.value.replace("Ngày ", ""));
      const valueB = parseInt(b.value.replace("Ngày ", ""));
      return valueA - valueB;
    });
    setNodes(sortedNodes);
    setFilteredNodes(sortedNodes); // Cập nhật lại danh sách đã lọc
  };
  

  // Hàm tìm kiếm
  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Cập nhật giá trị tìm kiếm
  };

  // Hàm xử lý sự kiện tìm kiếm
  const handleSearchClick = () => {
    const result = nodes.filter((node) => node.value.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredNodes(result);
  };

  // Hàm xử lý sự kiện nhấn phím Enter
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <>
      <Header />
      <div className="w-full h-screen flex justify-center bg-gradient-to-b from-white to-[#fff6ee]">
        <div className="w-[666px] h-[767px] flex flex-col ">
          <div className="w-full h-20 bg-[#ffecdb] flex justify-center items-center mb-8 mt-10 border border-white rounded-2xl shadow-md text-lg text-[#3b342e] font-sans font-bold">
            <span>Vocabulary soon available</span>
          </div>

          <div className="w-full bg-[#f9f0e7] p-4 rounded-lg shadow-md mb-8 border border-white">
            <div className="w-full flex items-center gap-4">
              <button 
                className="bg-gray-300 rounded-md px-4 py-2 shadow-md hover:bg-[#b6c6cc]"
                onClick={handleSortAscending} // Thêm sự kiện click để sắp xếp tăng
              >
                Sắp xếp tăng
              </button>
              <button 
                className="bg-gray-300 rounded-md px-4 py-2 shadow-md hover:bg-[#b6c6cc]"
                onClick={handleSortDescending} // Thêm sự kiện click để sắp xếp giảm
              >
                Sắp xếp giảm
              </button>
              
              <input
                type="text"
                placeholder="Nhập ngày cần tìm..."
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                value={searchTerm}
                onChange={handleSearch} // Cập nhật giá trị khi người dùng nhập
                onKeyDown={handleKeyPress} // Nhận giá trị khi nhấn phím Enter
              />
              <button 
                className="bg-gray-300 rounded-md px-4 py-2 shadow-md hover:bg-[#b6c6cc]"
                onClick={handleSearchClick} // Thêm sự kiện click để tìm kiếm
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
                to={`/vocabulary/A1/Voca${node.value.replace("Ngày ", "Ngay")}`} // Đường dẫn tùy chỉnh cho mỗi nút
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

export default B1;
