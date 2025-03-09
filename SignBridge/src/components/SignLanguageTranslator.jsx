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
    <><WebCamComponent webcamRef={webcamRef} />

    <div className="flex flex-col items-center w-full px-4 sm:px-6">
      {/* Sign Detection Box */}
      <div className="bg-[#04294e] mt-5 rounded-3xl flex flex-col justify-center items-center px-4 sm:px-6 py-8 w-full max-w-3xl">
        <div className="mx-2 sm:mx-5">
          <p className="mt-6 text-base sm:text-lg font-bold text-white">
            <strong className="text-lg sm:text-xl text-blue-500">Detected Sign: </strong>
            {currentSign}
          </p>
        </div>
        <ConfirmingSignComponent />
        <SentenceComponent />
      </div>
    
      {/* Reference Image */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl h-auto mt-6">
        <p className="text-white text-2xl sm:text-3xl my-4 font-bold text-center">Reference:</p>
        <img className="w-full h-auto rounded-lg shadow-lg" src="/images/ViewSignsPage/Alphabet.jpg" alt="Sign Reference" />
      </div>
    </div>
    </>
  );
};

export default SignLanguageTranslator;
