import React, { useState } from "react";
import Header from "../Header";
import hi from "../../Assets/mockery.png"
import voice1 from "../../Assets/Audio/voice4.mp3"

const VocabularyPopup = () => {
  // State để lưu cụm từ được chọn
  const [selectedPhrase, setSelectedPhrase] = useState(null);

  // Danh sách cụm từ và thông tin chi tiết
  const vocabulary = {
        "biggest": {
          "word": "biggest",
          "type": "adj",
          "pronunciation": "/ˈbɪɡɪst/",
          "meaning": "lớn nhất",
          "definition": "Superlative form of 'big,' indicating the largest in size or extent (Dạng cực độ của 'big,' chỉ ra kích thước hoặc phạm vi lớn nhất).",
          "examples": [
            "The biggest mountain in the world is Mount Everest.",
            "This is the biggest decision of my life."
          ]
        },
        "frozen": {
          "word": "frozen",
          "type": "adj",
          "pronunciation": "/ˈfroʊzən/",
          "meaning": "đông lạnh",
          "definition": "Preserved by freezing; turned into or covered with ice (Được bảo quản bằng cách đông lạnh; biến thành hoặc phủ bằng băng).",
          "examples": [
            "We bought some frozen vegetables for dinner.",
            "The lake was frozen solid during the winter."
          ]
        },
        "fresh": {
          "word": "fresh",
          "type": "adj",
          "pronunciation": "/freʃ/",
          "meaning": "tươi",
          "definition": "Recently made, obtained, or arrived; not stale or old (Mới được làm, thu được hoặc đến; không ố hay cũ).",
          "examples": [
            "I love eating fresh fruit in the morning.",
            "The bakery sells fresh bread every day."
          ]
        },
        "scale": {
          "word": "scale",
          "type": "n",
          "pronunciation": "/skeɪl/",
          "meaning": "vảy",
          "definition": "A small, thin, flat piece of a protective covering on the skin of certain animals, such as fish or snakes (Một mảnh nhỏ, mỏng, phẳng của một lớp bảo vệ trên da của một số loài động vật, chẳng hạn như cá hoặc rắn).",
          "examples": [
            "Fish scales are often used in cosmetics.",
            "The snake shed its old scales."
          ]
        },
        "stand": {
          "word": "stand",
          "type": "v",
          "pronunciation": "/stænd/",
          "meaning": "đứng",
          "definition": "To be in an upright position on one's feet (Đứng thẳng lên trên đôi chân).",
          "examples": [
            "Please stand for the national anthem.",
            "She could hardly stand after the long journey."
          ]
        },
        "instead": {
          "word": "instead",
          "type": "adv",
          "pronunciation": "/ɪnˈsted/",
          "meaning": "thay vì, thay vào đó",
          "definition": "As an alternative or substitute for something else (Như một lựa chọn hoặc thay thế cho một cái gì đó khác).",
          "examples": [
            "I’ll have tea instead of coffee.",
            "He decided to walk instead of taking the bus."
          ]
        },
        "hope": {
          "word": "hope",
          "type": "v",
          "pronunciation": "/hoʊp/",
          "meaning": "hy vọng",
          "definition": "To desire with anticipation or expectation of obtaining what is desired (Mong muốn với sự trông đợi hoặc kỳ vọng nhận được điều mà mong muốn).",
          "examples": [
            "I hope to visit Japan next year.",
            "She hopes for a positive outcome."
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
     <Header />
    
    <header className="w-[666px] h-20 bg-[#ffecdb] left-[550px] flex justify-center items-center mt-10 mb-14 border border-[#faede1] rounded-2xl shadow-md text-lg text-[#3b342e] font-sans font-bold relative">
          Song ngữ
          <img src={hi} alt="" className="absolute top-1 right-2 w-20 h-20" />
        </header>
    <div className="flex flex-col h-[1/2] w-[680px] bg-[#f8f4f6] p-10 mx-auto rounded-3xl border shadow shadow-[#f5f2f4]">
    <div className="mt-8 p-5 bg-[#f0f0f0] rounded-xl shadow-lg text-center mb-10">
          <h2 className="text-xl font-bold mb-3 text-[#036ce0]">Listen to a The Fishy Friendship</h2>
          <audio controls className="w-full">
            <source src={voice1} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>

      <div className=" flex justify-center"><h1 className="text-3xl font-bold mb-5 text-[#036ce0]">The Fishy Friendship</h1></div>
      
      <p className="text-lg leading-7 font-semibold text-[#600000] text-left">
      This boy loves fish. He loves fish so much that he always asks his mom to buy him the {" "}
<span className=" cursor-pointer underline" onClick={() => handlePhraseClick("biggest")}>
        biggest
</span>{" "}
fish in the market. He doesn’t care if the fish is {" "}
<span className=" cursor-pointer underline" onClick={() => handlePhraseClick("fresh")}>
        fresh
</span>{" "}
or {" "}
<span className=" cursor-pointer underline" onClick={() => handlePhraseClick("frozen")}>
        frozen
</span>{" "}, alive or dead. He just wants to hold it and hug it and kiss it. He thinks the fish is his best friend. He even gives the fish a name. He calls it Adobe Firefly, because it has brown {" "}
<span className=" cursor-pointer underline" onClick={() => handlePhraseClick("scale")}>
        scale
</span>{" "}
and it makes him happy. He always takes Adobe Firefly to the kitchen and puts it on a platter. He {" "}
<span className=" cursor-pointer underline" onClick={() => handlePhraseClick("stand")}>
        stands
</span>{" "}
on a chair and smiles at the camera. He says, “Look at my fish! Isn’t it beautiful? I love my fish!” His mom thinks he is crazy, but she doesn’t say anything. She just takes a picture of him and posts it on social media. She {" "}
<span className=" cursor-pointer underline" onClick={() => handlePhraseClick("hope")}>
        hopes
</span>{" "}
that one day he will grow out of this phase and eat the fish {" "}
<span className=" cursor-pointer underline" onClick={() => handlePhraseClick("instead")}>
        instead
</span>.


      
      </p>

      {/* Popup hiển thị nghĩa chi tiết */}
      {selectedPhrase && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[500px] shadow-lg text-left">
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
