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

  return (
    <>
    <h1 className="text-4xl my-15 text-white font-bold text-center mb-6">
    Text To Sign
  </h1>

    <div className="w-full flex flex-col min-h-screen  py-8 px-4">
      <p className="text-2xl text-white text-left max-w-2xl mx-8 mb-6">
        Convert any text into ASL sign language instantly. Just type a sentence and click "Convert" to see the corresponding signs.
      </p>

      <div className="bg-gradient-to-r self-center from-blue-500 to-cyan-600 w-full max-w-2xl flex items-center gap-4 p-4 rounded-lg shadow-lg">
        <input
          ref={sentenceRef}
          type="text"
          className="flex-1 border-2 border-blue-700 rounded-lg px-4 py-2 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-600 shadow-sm"
          placeholder="Enter Sentence Here"
        />
        <button
          onClick={handleOnClick}
          className="px-5 py-2 text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-700 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95"
        >
          Convert
        </button>
      </div>

      {sentence.length > 0 && (
        <h2 className="text-2xl text-white font-semibold text-left mt-6">
          Your corresponding signs are:
        </h2>
      )}

      <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 sm:gap-3">
  {sentence.map((element, index) => (
    <div key={index} className="flex flex-col items-center">
      <img
        src={element.src}
        alt={element.name}
        className="w-28 h-28 object-contain sm:w-32 sm:h-32"
      />
      <p className="text-center text-white text-sm sm:text-base">{element.name}</p>
    </div>
  ))}
</div>
    </div>
    </>
  );
};

export default TextToSignComponent;
