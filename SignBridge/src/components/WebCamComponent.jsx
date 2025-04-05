import Webcam from "react-webcam";
import { useState } from "react";

const WebCamComponent = ({ webcamRef }) => {
  const [facingMode, setFacingMode] = useState("user"); // Default: front camera

  return (
    <>
    <div className="flex flex-col">
    <Webcam
        mirrored={facingMode === "user"} // Set to false to correct inversion
        ref={webcamRef}
        className="w-[150em]  rounded-lg border-2 border-gray-300"
      />
    </div>

    </>
  );
};

export default WebCamComponent;
