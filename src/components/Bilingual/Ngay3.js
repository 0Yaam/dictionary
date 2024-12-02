import React, { useState } from "react";
import Header from "../Header";
import hi from "../../Assets/love.png"
import voice1 from "../../Assets/Audio/voice3.mp3"

const VocabularyPopup = () => {
  // State để lưu cụm từ được chọn
  const [selectedPhrase, setSelectedPhrase] = useState(null);

  // Danh sách cụm từ và thông tin chi tiết
  const vocabulary = {
    "brightly": {
      "word": "brightly",
      "type": "adv",
      "pronunciation": "/ˈbraɪtli/",
      "meaning": "sáng chói",
      "definition": "In a bright manner; with a lot of light (Một cách sáng chói; với nhiều ánh sáng).",
      "examples": [
        "The stars shone brightly in the night sky.",
        "She smiled brightly when she saw her friends."
      ]
    },
    "flower": {
      "word": "flower",
      "type": "n",
      "pronunciation": "/ˈflaʊər/",
      "meaning": "bông hoa",
      "definition": "The reproductive part of a plant, often colorful and fragrant (Bộ phận sinh sản của một cây, thường có màu sắc và hương thơm).",
      "examples": [
        "The garden was full of beautiful flowers.",
        "She gave me a flower as a gift."
      ]
    },
    "bloom": {
      "word": "bloom",
      "type": "v",
      "pronunciation": "/bluːm/",
      "meaning": "nở",
      "definition": "To produce flowers; to be in the process of flowering (Ra hoa; đang trong quá trình nở hoa).",
      "examples": [
        "The roses are starting to bloom in the garden.",
        "She watched the flowers bloom in spring."
      ]
    },
    "better": {
      "word": "better",
      "type": "adj",
      "pronunciation": "/ˈbetər/",
      "meaning": "tốt đẹp hơn",
      "definition": "Of superior quality or excellence (Có chất lượng hoặc xuất sắc hơn).",
      "examples": [
        "This restaurant serves better food than the one down the street.",
        "With practice, you will become a better singer."
      ]
    },
    "difference": {
      "word": "difference",
      "type": "n",
      "pronunciation": "/ˈdɪfərəns/",
      "meaning": "sự khác biệt",
      "definition": "A notable change or variation between two or more things; the state of being distinct or unique (Một sự thay đổi đáng chú ý hoặc biến đổi giữa hai hoặc nhiều thứ; trạng thái đặc biệt hoặc duy nhất).",
      "examples": [
        "There is a big difference between these two products.",
        "The difference in their opinions caused a debate."
      ]
    },
    "present": {
      "word": "present",
      "type": "adj",
      "pronunciation": "/ˈpreznt/",
      "meaning": "hiện tại",
      "definition": "Existing or occurring at this time; not past or future (Tồn tại hoặc xảy ra vào thời điểm hiện tại; không phải quá khứ hoặc tương lai).",
      "examples": [
        "We are focusing on the present moment.",
        "She is a present member of the team."
      ]
    }


  };

  // Hàm xử lý khi click vào cụm từ
  const handlePhraseClick = (phrase) => {
    setSelectedPhrase(vocabulary[phrase]); // Lưu thông tin cụm từ được chọn
  };

  // Hàm đóng popup
  const closePopup = () => {
    setSelectedPhrase(null); // Đặt lại trạng thái về null
  };

  return (
    <>
      <Header/>
      <div className="flex relative justify-center">
        <header className="w-[666px] h-20 bg-[#ffecdb] left-[550px] flex items-center mt-10 mb-14 border border-[#faede1] rounded-2xl shadow-md text-lg text-[#3b342e] font-sans font-bold ">
          <div className="flex ml-[270px]">Song ngữ</div>
          <img src={hi} alt="" className="ml-[200px] w-20 h-20" />
        </header>
      </div>
      <div className="flex flex-col h-[1/2] w-[680px] bg-[#f8f4f6] p-10 mx-auto rounded-3xl border shadow shadow-[#f5f2f4]">

        <div className=" flex justify-center"><h1 className="text-3xl font-bold mb-5 text-[#036ce0]">The world is a beautiful place</h1></div>
        <div className="mt-8 p-5 bg-[#f0f0f0] rounded-xl shadow-lg text-center mb-10">
          <h2 className="text-xl font-bold mb-3 text-[#036ce0]">Listen to The world is a beautiful place</h2>
          <audio controls className="w-full">
            <source src={voice1} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <p className="text-lg leading-7 font-semibold text-[#600000] text-left">
          The sun shines {" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("brightly")}>
            brightly
          </span>{" "}
          in the sky. The birds sing sweetly in the trees. The {" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("flowers bloom")}>
            flowers bloom
          </span>{" "}
          in all their colors.<br></br>

          The children play in the park. The people people laugh and talk as they go about their day. The love grows between two people who care for each other.<br></br>

          The world is a beautiful place. There is so much to see and do. We can travel to new places, meet new people, and learn new things. We can make the world a  {" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("better")}>
            better
          </span>{" "}
          place by helping others and doing what we can to make a {" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("difference")}>
            difference
          </span>
          .<br></br>
          {" "}
          Let's live in the {" "}
          <span className=" cursor-pointer underline" onClick={() => handlePhraseClick("present")}>
            present
          </span>{" "}
          moment and enjoy all that life has to offer. Let's be grateful for the good things in our lives and do our best to make the world a better place for everyone.


        </p>

        {/* Popup hiển thị nghĩa chi tiết */}
        {selectedPhrase && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-[500px] shadow-lg relative text-left text-base">
              <h2 className="text-xl font-bold mb-3 text-[#d8974c] ">Từ vựng: {selectedPhrase.word}</h2>
              <p>
                <strong>Loại từ:</strong> {selectedPhrase.type}
              </p>
              <p>
                <strong>Phiên âm:</strong> {selectedPhrase.pronunciation}
              </p>
              <p>
                <strong>Nghĩa:</strong> {selectedPhrase.meaning}
              </p>
              <p className="mt-3">
                <strong>Định nghĩa:</strong> {selectedPhrase.definition}
              </p>
              <p className="mt-3">
                <strong>Ví dụ:</strong>
              </p>
              <ul className="list-disc list-inside">
                {selectedPhrase.examples.map((example, index) => (
                  <li key={index}>{example}</li>
                ))}
              </ul>
              <button
                className="absolute top-2 right-2 text-red-500 font-bold"
                onClick={closePopup}
              >
                Đóng
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VocabularyPopup;
