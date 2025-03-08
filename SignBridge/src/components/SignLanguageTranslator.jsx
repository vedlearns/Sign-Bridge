// import React, { useRef, useEffect, useContext } from "react";
// //Models
// import "@tensorflow/tfjs-backend-webgl";
// import * as handpose from "@tensorflow-models/handpose";
// import * as fp from "fingerpose";
// // Import all gestures
// import signGestures from "../gestures/index";
// //Components
// import { SignContext } from "../context/SignContext";
// import WebCamComponent from "./WebCamComponent";

// import ConfirmingSignComponent from "./ConfirmingSignComponent";
// import SentenceComponent from "./SentenceComponent";

// const SignLanguageTranslator = () => {
//   const webcamRef = useRef(null);
//   const { currentSign, setCurrentSign } = useContext(SignContext);

//   useEffect(() => {
//     const runHandpose = async () => {
//       const net = await handpose.load();
//       console.log("Handpose model loaded");
//       setInterval(() => detect(net), 500);
//     };
//     runHandpose();
//   }, []);

//   const detect = async (net) => {
//     if (webcamRef.current && webcamRef.current.video.readyState === 4) {
//       const video = webcamRef.current.video;
//       const hand = await net.estimateHands(video);

//       if (hand.length > 0) {
//         const GE = new fp.GestureEstimator(Object.values(signGestures));
//         const estimatedGestures = GE.estimate(hand[0].landmarks, 7.5);

//         if (estimatedGestures.gestures.length > 0) {
//           const bestGesture = estimatedGestures.gestures.reduce((p, c) =>
//             p.confidence > c.confidence ? p : c
//           );
//           setCurrentSign(bestGesture.name); // Show real-time detected sign
//         }
//       } else {
//         setCurrentSign("No sign detected");
//       }
//     }
//   };

//   return (
//     <>
//       <WebCamComponent webcamRef={webcamRef} />
//       <div className="flex  w-full items-center  flex-col">
//       <div className=" bg-[#04294e] mt-5 rounded-3xl flex flex-col justify-center self-center px-5 py-10 w-[90%]">
//           {/* Show Sign */}
//           <div className="mx-5">
//             <p className="mt-8 text-lg font-bold text-white">
//             <strong className="text-xl text-blue-500" >Detected Sign : </strong>{currentSign}
//             </p>
//           </div>
//           <ConfirmingSignComponent />
//           <SentenceComponent />
//         </div>
//         <div className=" justify-start w-[50%] h-[40%]">
//           <p className="text-white text-3xl my-5 font-bold">Reference :</p>
//         <img className="w-full h-full" src="/images/ViewSignsPage/Alphabet.jpg" alt="" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignLanguageTranslator;

import React, { useRef, useEffect, useContext } from "react";
import "@tensorflow/tfjs-backend-webgl"; // Ensures WebGL backend is loaded
import * as handpose from "@tensorflow-models/handpose";
import * as fp from "fingerpose";
import signGestures from "../gestures/index";
import { SignContext } from "../context/SignContext";
import WebCamComponent from "./WebCamComponent";
import ConfirmingSignComponent from "./ConfirmingSignComponent";
import SentenceComponent from "./SentenceComponent";

const SignLanguageTranslator = () => {
  const webcamRef = useRef(null);
  const { currentSign, setCurrentSign } = useContext(SignContext);
  const netRef = useRef(null);

  useEffect(() => {
    const loadHandposeModel = async () => {
      netRef.current = await handpose.load();
      console.log("Handpose model loaded");

      detectHand();
    };

    loadHandposeModel();
  }, []);

  const detectHand = async () => {
    if (!netRef.current || !webcamRef.current || !webcamRef.current.video) return;

    const video = webcamRef.current.video;
    if (video.readyState === 4) {
      const hand = await netRef.current.estimateHands(video);
      if (hand.length > 0) {
        const GE = new fp.GestureEstimator(Object.values(signGestures));
        const estimatedGestures = GE.estimate(hand[0].landmarks, 7.5);
        if (estimatedGestures.gestures.length > 0) {
          const bestGesture = estimatedGestures.gestures.reduce((p, c) =>
            p.confidence > c.confidence ? p : c
          );
          setCurrentSign(bestGesture.name);
        }
      } else {
        setCurrentSign("No sign detected");
      }
    }

    requestAnimationFrame(detectHand); // Efficient real-time detection
  };

  return (
    <>
      <WebCamComponent webcamRef={webcamRef} />
      <div className="flex w-full items-center flex-col">
        <div className="bg-[#04294e] mt-5 rounded-3xl flex flex-col justify-center self-center px-5 py-10 w-[90%]">
          <div className="mx-5">
            <p className="mt-8 text-lg font-bold text-white">
              <strong className="text-xl text-blue-500">Detected Sign: </strong>
              {currentSign}
            </p>
          </div>
          <ConfirmingSignComponent />
          <SentenceComponent />
        </div>
        <div className="justify-start w-[50%] h-[40%]">
          <p className="text-white text-3xl my-5 font-bold">Reference:</p>
          <img className="w-full h-full" src="/images/ViewSignsPage/Alphabet.jpg" alt="Sign Reference" />
        </div>
      </div>
    </>
  );
};

export default SignLanguageTranslator;
