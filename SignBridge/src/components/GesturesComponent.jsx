import { useContext } from "react";
import { SignContext } from "../context/SignContext";

const GesturesComponent = () => {
  const { signs } = useContext(SignContext);

  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
        {/* Heading Section */}
        <div className="relative bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-6 sm:p-8 md:p-10 mb-10 w-full max-w-5xl mx-auto shadow-[0px_0px_20px_rgba(59,130,246,0.5)] border border-blue-500/30">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mt-2 mb-6 tracking-wide drop-shadow-lg">
            Basic Sign Gestures
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white text-center max-w-3xl mx-auto">
            This section introduces commonly used Basic Sign Language Gestures,
            designed for
            <span className="text-amber-100 font-bold">
              {" "}
              easy understanding and learning.
            </span>{" "}
            These signs are a great starting point for anyone interested in sign
            language, helping bridge communication gaps effectively.
          </p>
          <div className="absolute inset-0 bg-blue-500/10 blur-2xl opacity-50"></div>
        </div>

        {/* Sign Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center px-2 sm:px-4">
          {signs.map((sign, index) => (
            <div
              key={index}
              className="signContainer w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-2xl shadow-lg p-4 flex flex-col items-center bg-gradient-to-br from-gray-800 to-gray-600 transition-all duration-300 hover:shadow-[0px_10px_30px_rgba(0,0,0,0.5)] hover:translate-y-[-1px]"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mt-2 mb-4">
                {sign.name}
              </h2>
              <img
                src={sign.image}
                alt={sign.name}
                className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] px-5 mb-5 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GesturesComponent;
