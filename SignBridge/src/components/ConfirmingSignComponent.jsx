import { useContext } from "react";
import { SignContext } from "../context/SignContext";

const ConfirmingSignComponent=()=>{

  const {currentSign,confirmedSign,setConfirmedSign}=useContext(SignContext)
  const confirmSign = () => {
    if (currentSign !== "Waiting..." && currentSign !== "No sign detected") {
      setConfirmedSign(currentSign); // Confirm sign before adding to sentence
    }
  };

return(
  <>
  <div className="flex justify-evenly my-2 items-center gap-5 ">
  <button
        onClick={confirmSign}
        className="mt-3 px-4 py-2 text-lg bg-[#2547f4] text-white rounded-lg"
      >
        Confirm Sign
      </button>
      {/* Show confirmed sign to be added */}
      {confirmedSign && (
        <p className="mt-2 text-lg text-white font-semibold">
          Confirmed Sign: {confirmedSign}
        </p>
      )}
  </div>
  
  </>
)
}

export default ConfirmingSignComponent;