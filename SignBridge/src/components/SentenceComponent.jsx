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
    <>
      <p className="mt-8 mb-4 mx-5 text-lg text-white font-semibold">
        <strong className="text-xl text-blue-500 ">Formed Sentence:</strong> {sentence.join("")}
      </p>

    <div className="my-5 text-lg flex justify-evenly items-center">

 
      {/* Add confirmed sign to sentence */}
      <button
        onClick={addToSentence}
        className="mt-3 px-4 py-2 bg-green-500 text-white rounded-lg"
        disabled={!confirmedSign}
      >
        Add Sign to Sentence
      </button>

      {/* Add Space */}
      <button
        onClick={() => setSentence((prev) => [...prev, " "])}
        className="mt-3 px-4 py-2 bg-gray-500 text-white rounded-lg"
      >
        Add Space
      </button>
      {/* Clear sentence button */}
      <button
        onClick={() => setSentence([])}
        className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        Clear Sentence
      </button>
      </div>

      {/* Show full sentence */}

      
    </>
  )
}

export default SentenceComponent;