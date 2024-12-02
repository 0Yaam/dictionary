import React, { useState } from "react";
import Header from "../Header";
import hi from "../../Assets/happy.png";
import voice1 from "../../Assets/Audio/voice2.mp3"

const VocabularyPopup = () => {
  const [selectedPhrase, setSelectedPhrase] = useState(null);

  const vocabulary = {
    
    "Flirting": {
      "word": "flirt",
      "type": "v",
      "pronunciation": "/flɜːt/",
      "meaning": "tán tỉnh",
      "definition": "To behave as if sexually attracted to someone, although not seriously (Hành động như thể bạn có hứng thú tình dục với ai đó, mặc dù không nghiêm túc).",
      "examples": [
        "She likes to flirt with everyone at the party.",
        "He flirted with the idea of moving abroad for work."
      ]
    },
    "exciting": {
      "word": "exciting",
      "type": "adj",
      "pronunciation": "/ɪkˈsaɪtɪŋ/",
      "meaning": "thú vị, hứng thú",
      "definition": "Causing great enthusiasm and eagerness (Gây ra sự hăng hái và hào hứng).",
      "examples": [
        "The trip to Japan was an exciting experience.",
        "She found the new job opportunity very exciting."
      ]
    },
    "confidence": {
      "word": "confidence",
      "type": "n",
      "pronunciation": "/ˈkɒnfɪdəns/",
      "meaning": "sự tự tin",
      "definition": "The feeling or belief that one can have faith in or rely on someone or something (Cảm giác hoặc niềm tin rằng bạn có thể tin tưởng hoặc phụ thuộc vào ai đó hoặc cái gì đó).",
      "examples": [
        "He spoke with confidence during the presentation.",
        "Building confidence takes time and effort."
      ]
    },
    "compliment": {
      "word": "compliment",
      "type": "n",
      "pronunciation": "/ˈkɒmplɪmənt/",
      "meaning": "lời khen",
      "definition": "A polite expression of praise or admiration (Một lời khen lịch sự hoặc sự ngưỡng mộ).",
      "examples": [
        "She gave him a compliment on his new haircut.",
        "Receiving compliments boosts my self-esteem."
      ]
    },
    "humor": {
      "word": "humor",
      "type": "n",
      "pronunciation": "/ˈhjuːmər/",
      "meaning": "hài hước",
      "definition": "The quality of being amusing or comic, especially as expressed in literature or speech (Chất lượng của việc giải trí hoặc hài hước, đặc biệt là được thể hiện trong văn học hoặc diễn thuyết).",
      "examples": [
        "He has a great sense of humor.",
        "The humor in the movie kept everyone laughing."
      ]
    },
    "interest": {
      "word": "interest",
      "type": "n",
      "pronunciation": "/ˈɪntrəst/",
      "meaning": "sự quan tâm",
      "definition": "The feeling of wanting to know or learn about something or someone (Cảm giác muốn biết hoặc tìm hiểu về một điều gì đó hoặc một người nào đó).",
      "examples": [
        "She has a keen interest in art and design.",
        "The topic sparked my interest immediately."
      ]
    },
    "let your personality shine": {
      "word": "let your personality shine",
      "type": "v",
      "pronunciation": "/lɛt jɔːr ˌpɜːrsəˈnælɪti ʃaɪn/",
      "meaning": "để cá tính của bạn tỏa sáng",
      "definition": "To allow your unique character, qualities, and traits to be prominently displayed or expressed (Cho phép tính cách, phẩm chất và đặc điểm riêng của bạn được thể hiện một cách nổi bật).",
      "examples": [
        "In the interview, just let your personality shine.",
        "Letting your personality shine makes you stand out in a crowd."
      ]
    },
    "boundary": {
    "word": "boundary",
    "type": "n",
    "pronunciation": "/ˈbaʊndəri/",
    "meaning": "ranh giới, giới hạn",
    "definition": "A line that marks the limits of an area, a dividing line (Một đường kẻ đánh dấu ranh giới của một khu vực, một đường chia).",
    "examples": [
    "The river forms the boundary between the two countries.",
    "Respecting personal boundaries is important in any relationship."
        ]
    },
    "advantage": {
    "word": "advantage",
    "type": "n",
    "pronunciation": "/ədˈvɑːntɪdʒ/",
    "meaning": "lợi thế",
    "definition": "A favorable or beneficial circumstance or position (Tình huống hoặc vị trí thuận lợi hoặc có lợi).",
     "examples": [
     "Speaking multiple languages gives you an advantage in the job market.",
     "Our team has the advantage of experience in this competition."
        ]
    }
  
  
        
};
  const handlePhraseClick = (phrase) => {
    setSelectedPhrase(vocabulary[phrase]);
  };

  const closePopup = () => {
    setSelectedPhrase(null);
  };

  return (
    <>
      <Header />
      <header className="w-[666px] h-20 bg-[#ffecdb] left-[550px] flex justify-center items-center mt-10 mb-14 border border-[#faede1] rounded-2xl shadow-md text-lg text-[#3b342e] font-sans font-bold relative">
        Song ngữ
        <img src={hi} alt="" className="absolute top-1 right-2 w-20 h-20" />
      </header>
      
      <div className="flex flex-col h-[1/2] w-[680px] bg-[#f8f4f6] p-10 mx-auto rounded-3xl border shadow shadow-[#f5f2f4]">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold mb-5 text-[#036ce0]">How to flirt with a girl</h1>
          
        </div>
        <div className="mt-8 p-5 bg-[#f0f0f0] rounded-xl shadow-lg text-center mb-10">
          <h2 className="text-xl font-bold mb-3 text-[#036ce0]">Listen to a Fun Flirting Tip</h2>
          <audio controls className="w-full">
            <source src={voice1} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <p className="text-lg leading-7 font-semibold text-[#600000] text-left">
          <span className="cursor-pointer underline" onClick={() => handlePhraseClick("Flirting")}>Flirting</span> with a girl can be exciting and fun. Here are some quick tips to help you flirt with{" "}
          <span className="cursor-pointer underline" onClick={() => handlePhraseClick("exciting")}>exciting</span> and fun. Here are some quick tips to help you flirt with <span className="cursor-pointer underline" onClick={() => handlePhraseClick("confidence")}>confidence</span>:
          <br />
          <ul className="list-disc list-inside ml-4">
            <li>Start with a genuine{" "}
              <span className="cursor-pointer underline" onClick={() => handlePhraseClick("compliment")}>compliment</span> to make her feel special.
            </li>
            <li>Use{" "}
              <span className="cursor-pointer underline" onClick={() => handlePhraseClick("humor")}>humor</span> to make her laugh and create a connection.
            </li>
            <li>Show <span className="cursor-pointer underline" onClick={() => handlePhraseClick("interest")}>interest</span> in her by asking questions and actively listening.</li>
            <li>Use body language to your{" "}
              <span className="cursor-pointer underline" onClick={() => handlePhraseClick("advantage")}>advantage</span> with eye contact and a warm smile.
            </li>
            <li>Be confident but respectful, respecting her <span className="cursor-pointer underline" onClick={() => handlePhraseClick("boundaries")}>boundaries</span>.</li>
            <li>Keep it light and playful with friendly teasing.</li>
          </ul>
          Remember, flirting is about building a connection and enjoying the process. Be yourself, have fun, and{" "}
          <span className="cursor-pointer underline" onClick={() => handlePhraseClick("let your personality shine")}>let your personality shine</span>!
        </p>

        

        {/* Popup hiển thị nghĩa chi tiết */}
        {selectedPhrase && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-[500px] shadow-lg relative text-left text-base">
              <h2 className="text-xl font-bold mb-3 text-[#d8974c]">Từ vựng: {selectedPhrase.word}</h2>
              <p><strong>Loại từ:</strong> {selectedPhrase.type}</p>
              <p><strong>Phiên âm:</strong> {selectedPhrase.pronunciation}</p>
              <p><strong>Nghĩa:</strong> {selectedPhrase.meaning}</p>
              <p className="mt-3"><strong>Định nghĩa:</strong> {selectedPhrase.definition}</p>
              <p className="mt-3"><strong>Ví dụ:</strong></p>
              <ul className="list-disc list-inside">
                {selectedPhrase.examples.map((example, index) => (
                  <li key={index}>{example}</li>
                ))}
              </ul>
              <button className="absolute top-2 right-2 text-red-500 font-bold" onClick={closePopup}>Đóng</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VocabularyPopup;
