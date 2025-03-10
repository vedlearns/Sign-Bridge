import Webcam from "react-webcam";
import { useState } from "react";

const WebCamComponent = ({ webcamRef }) => {
  const [facingMode, setFacingMode] = useState("user"); // Default: front camera
  const toggleCamera = () => {
    setFacingMode((prevMode) => (prevMode === "user" ? "environment" : "user"));
  };

  return (
    <>
    <div className="flex flex-col">
    <Webcam
        mirrored={facingMode === "user"} // Set to false to correct inversion
        ref={webcamRef}
        className="w-[150em]  rounded-lg border-2 border-gray-300"
      />
      <button
        onClick={toggleCamera}
        className="mt-4 self-center w-[10em] h-[3.2em] cursor-pointer  px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Switch Camera
      </button>
    </div>

    </>
  );
};

export default WebCamComponent;
