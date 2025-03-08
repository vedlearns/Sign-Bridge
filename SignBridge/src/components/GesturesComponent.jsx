import { useContext } from "react";
import { SignContext } from "../context/SignContext";

const GesturesComponent = () => {
  const { signs } = useContext(SignContext);

  return (
    <>
      <div className="w-[70%]   mx-auto py-10">
        <div className="relative bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-7 mb-15 mt-10 w-full shadow-[0px_0px_20px_rgba(59,130,246,0.5)] border border-blue-500/30">
          <h1 className="text-5xl font-extrabold text-white text-center mt-2 mb-6 tracking-wide drop-shadow-lg">
            Basic Sign Gestures
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-white text-center max-w-4xl mx-auto">
            This section introduces commonly used Basic Sign Language Gestures,
            designed for
            <span className="text-amber-100 font-bold">
              {" "}
              easy understanding and learning.
            </span>
            These signs are a great starting point for anyone interested in sign
            language, helping bridge communication gaps effectively.
          </p>
          <div className="absolute inset-0 bg-blue-500/10 blur-2xl opacity-50"></div>
        </div>

        <div className="flex flex-col items-center gap-6">
          {signs.map((sign, index) => (
            <div
              key={index}
              className="signContainer my-1.5 w-[60rem] rounded-2xl shadow-lg p-4 flex flex-col items-center bg-gradient-to-br from-gray-800 to-gray-600 transition-all duration-300 hover:shadow-[0px_10px_30px_rgba(0,0,0,0.5)] hover:translate-y-[-1px]"
            >
              <h2 className="text-4xl font-semibold text-white mt-2 mb-4">
                {sign.name}
              </h2>
              <img
                src={sign.image}
                alt={sign.name}
                className="px-5 mb-5 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GesturesComponent;
