import Ngay1 from "./components/Bilingual/Ngay1";
import Ngay2 from "./components/Bilingual/Ngay2";
import Ngay3 from "./components/Bilingual/Ngay3";
import Ngay4 from "./components/Bilingual/Ngay4";
import VocaMenu from "./components/Vocabulary/VocaMenu";
import NewsMenu from "./components/Bilingual/BilingualMenu";
import A1 from "./components/Vocabulary/A1/A1";
import A2 from "./components/Vocabulary/A2/A2";
import B1 from "./components/Vocabulary/B1/B1";
import B2 from "./components/Vocabulary/B2/B2";
import C1 from "./components/Vocabulary/C1/C1";
import C2 from "./components/Vocabulary/C2/C2";
import VocaNgay1A1 from "./components/Vocabulary/A1/VocaNgay1";
import VocaNgay2A1 from "./components/Vocabulary/A1/VocaNgay2";
import VocaNgay3A1 from "./components/Vocabulary/A1/VocaNgay3";
import VocaNgay4A1 from "./components/Vocabulary/A1/VocaNgay4";
import VocaNgay5A1 from "./components/Vocabulary/A1/VocaNgay5";
import VocaNgay6A1 from "./components/Vocabulary/A1/VocaNgay6";
import VocaNgay7A1 from "./components/Vocabulary/A1/VocaNgay7";








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
                      <Route path='/bilingual' element={<NewsMenu />} />
                      <Route path='/bilingual/ngay1' element={<Ngay1 />} />
                      <Route path='/bilingual/ngay2' element={<Ngay2 />} />
                      <Route path='/bilingual/ngay3' element={<Ngay3 />} />
                      <Route path='/bilingual/ngay4' element={<Ngay4 />} />
                      <Route path='/vocabulary' element={<VocaMenu />} />
                      <Route path='/vocabulary/A1' element={<A1 />} />
                      <Route path='/vocabulary/A2' element={<A2 />} />
                      <Route path='/vocabulary/B1' element={<B1 />} />
                      <Route path='/vocabulary/B2' element={<B2 />} />
                      <Route path='/vocabulary/C1' element={<C1 />} />
                      <Route path='/vocabulary/C2' element={<C2 />} />
                      <Route path='/vocabulary/A1/VocaNgay1' element={<VocaNgay1A1 />} />
                      <Route path='/vocabulary/A1/VocaNgay2' element={<VocaNgay2A1 />} />
                      <Route path='/vocabulary/A1/VocaNgay3' element={<VocaNgay3A1 />} />
                     
                      <Route path='/vocabulary/A1/VocaNgay4' element={<VocaNgay4A1 />} />
                      <Route path='/vocabulary/A1/VocaNgay5' element={<VocaNgay5A1 />} />
                      <Route path='/vocabulary/A1/VocaNgay6' element={<VocaNgay6A1 />} />
                      <Route path='/vocabulary/A1/VocaNgay7' element={<VocaNgay7A1/>} />
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
