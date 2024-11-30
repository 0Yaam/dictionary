import NewsContents from "./components/NewsContents";
import NewsMenu from "./components/NewsMenu";
import Header from "./components/Header";
import HomePage from './pages/HomePage'
import { FaHome, FaConciergeBell } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";
import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom"
function App() {

  const [activeContent, setActiveContent] = useState("home") 

  return (
    <div className="App">
      <div class="product-admin">
        <div class="flex h-full flex-col">
            
            
          <div className="flex">
            
           <div class="flex-1  p-6">
                 <div class="overflow-hidden tracking-widest text-center
                 rounded-lg border-spacing-1 border-gray-300 text-xs">
                    <Routes>
                      <Route path='/' element={<HomePage />} />
                      <Route path='/news' element={<NewsMenu />} />
                      <Route path='/news/contents' element={<NewsContents />} />

                    </Routes>
                 </div>        
         </div>
         </div>               
     </div>   
    </div>
    </div>
  );
}

export default App;
