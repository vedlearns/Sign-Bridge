import { useContext } from "react";
import { SignContext } from "../context/SignContext";

const SentenceComponent=()=>{
  const {confirmedSign,setConfirmedSign,sentence,setSentence}=useContext(SignContext)

  const addToSentence = () => {
    if (confirmedSign) {
      setSentence((prev) => [...prev, confirmedSign]); // Add only confirmed sign
      setConfirmedSign(null); // Reset confirmed sign after adding
    }
  };

  return(
    <><p className="mt-6 mb-4 text-base sm:text-lg text-white font-semibold text-center">
    <strong className="text-lg sm:text-xl text-blue-500">Formed Sentence:</strong> {sentence.join("")}
  </p>
  
  <div className="my-5 flex flex-wrap text-2xl justify-center gap-3 sm:gap-5">
    {/* Add confirmed sign to sentence */}
    <button
      onClick={addToSentence}
      className="px-2 py-2 bg-green-500 text-white rounded-lg text-sm sm:text-sm"
      disabled={!confirmedSign}
    >
      Add Sign to Sentence
    </button>
  
    {/* Add Space */}
    <button
      onClick={() => setSentence((prev) => [...prev, " "])}
      className="px-2 py-2 bg-gray-500 text-white rounded-lg text-sm sm:text-sm"
    >
      Add Space
    </button>
  
    {/* Clear Sentence */}
    <button
      onClick={() => setSentence([])}
      className="px-2 py-2 bg-red-500 text-white rounded-lg text-sm sm:text-sm"
    >
      Clear Sentence
    </button>
  </div>      
    </>
  )
}

export default SentenceComponent;