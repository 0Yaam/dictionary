import React from 'react';
import {Link} from "react-router-dom"
import Header from "./Header";


const NewsMenu = () => {
    return (
        <div className='flex flex-col w-[666px] h-[767px] justify-self-center '>
        <Header />
        <header className='w-[666px] h-20 bg-[#f7fafc] flex justify-center items-center mt-14 mb-14 border border-[#edeeef]  rounded shadow-md'>
          News
        </header>
        <main className=''>

        
            <div className="border rounded shadow-md mb-5 bg-[#f7fafc]">
                <input type="checkbox" id="accordion1" className="hidden peer" />
                    <label htmlFor="accordion1" className=" w-[666px] h-20 cursor-pointer font-semibold py-3 px-4 flex justify-between items-center transition hover:bg-[#EDD1E0] text-lg ">
                    
                        <span>Giới thiệu</span>

                            <svg className="w-4 h-4 transition-transform duration-300 peer-checked:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                     </label>
                <div className="hidden peer-checked:block bg-gray-100 w-[666px] h-30 p-5 text-base">

                    <p>
                    Chức năng cho phép bạn đọc văn bản song ngữ Anh - Việt. <br></br>
                    Khi bạn click vào các từ vựng có dấu gạch chân, nghĩa của chúng sẽ được hiển thị ngay lập tức.
                    Đây là một công cụ hữu ích cho những ai đang học ngoại ngữ và muốn cải thiện kĩ năng đọc hiểu kèm theo đó là nâng cao vốn từ vựng của mình.
                    </p>

                </div>
            </div>
       

            <Link to="/news/contents" className="w-[666px] h-20 bg-[#f7fafc] flex justify-self-auto items-center font-semibold px-4 border border-[#edeeef]  rounded-lg hover:bg-[#EDD1E0] my-2 "> 
                <span>Học tiếng anh từ con số 0 - Ngày 1</span>
            </Link>


            <Link to="/news/contents" className="w-[666px] h-20 bg-[#f7fafc] flex justify-self-auto items-center font-semibold px-4 border border-[#edeeef]  rounded-lg hover:bg-[#EDD1E0] my-2"> 
                <span>Học tiếng anh từ con số 0 - Ngày 2</span>
            </Link>


            <Link to="/news/contents" className="w-[666px] h-20 bg-[#f7fafc] flex justify-self-auto items-center font-semibold px-4 border border-[#edeeef]  rounded-lg hover:bg-[#EDD1E0] my-2"> 
                <span>Học tiếng anh từ con số 0 - Ngày 3</span>
            </Link>


            <Link to="/news/contents" className="w-[666px] h-20 bg-[#f7fafc] flex justify-self-auto items-center font-semibold px-4 border border-[#edeeef]  rounded-lg hover:bg-[#EDD1E0] my-2"> 
                <span>Học tiếng anh từ con số 0 - Ngày 4</span>
            </Link>
            
            


            
          
        </main>

       



        <footer></footer>
    </div>
      
    );
};

export default NewsMenu;
