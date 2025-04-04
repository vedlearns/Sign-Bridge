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
<div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 my-2 text-center">
  <button
    onClick={confirmSign}
    className="px-4 py-2 text-sm sm:text-lg bg-[#2547f4] text-white rounded-lg"
  >
    Confirm Sign
  </button>

  {/* Show confirmed sign to be added */}
  {confirmedSign && (
    <p className="text-xl sm:text-2xl text-white font-semibold">
      Confirmed Sign: {confirmedSign}
    </p>
  )}
</div>

  </>
)
}

export default ConfirmingSignComponent;