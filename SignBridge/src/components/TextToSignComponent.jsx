import { useContext, useRef, useState } from "react";
import { SignContext } from "../context/SignContext";

const TextToSignComponent = () => {
  const { signImg } = useContext(SignContext);
  const sentenceRef = useRef(null);
  const [sentence, setSentence] = useState([]);

  const handleOnClick = () => {
    const inputValue = sentenceRef.current?.value.trim().toLowerCase();
    if (!inputValue) return;

    const filteredSigns = inputValue
      .split("")
      .map((char) => signImg.find((item) => item.name === char))
      .filter(Boolean);

    setSentence(filteredSigns);
    sentenceRef.current.value = "";
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleOnClick();
    }
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen py-8 px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
        Text To Sign
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-white text-left max-w-2xl text-center sm:text-left mb-6">
        Convert any text into ASL sign language instantly. Just type a sentence and click "Convert" to see the corresponding signs.
      </p>

      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-full max-w-2xl flex flex-col sm:flex-row items-center gap-4 p-4 rounded-lg shadow-lg">
        <input
          ref={sentenceRef}
          type="text"
          className="w-full sm:flex-1 border-2 border-blue-700 rounded-lg px-4 py-2 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-600 shadow-sm"
          placeholder="Enter Sentence Here"
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleOnClick}
          className="w-full sm:w-auto px-5 py-2 text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-700 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95"
        >
          Convert
        </button>
      </div>

      {sentence.length > 0 && (
        <>
          <h2 className="text-lg sm:text-xl md:text-2xl text-white font-semibold text-center sm:text-left mt-6">
            Your corresponding signs are:
          </h2>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
            {sentence.map((element, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={element.src}
                  alt={element.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
                />
                <p className="text-center text-white text-xs sm:text-sm md:text-base">
                  {element.name}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TextToSignComponent;
