import { useState } from "react";

const PDFReaderComponent = ({ pdfItem }) => {
  const [read, setRead] = useState(false);
  const handleOnClick = () => {
    setRead(!read);
  };

  return (
    <>
      <div className="w-full flex flex-col items-center px-4 sm:px-6">
        {read === false && (
          <>
            <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              {pdfItem.name}
            </h1>
            <h2 className="text-white text-lg sm:text-xl mx-2 sm:mx-4 md:mx-5">
              <strong className="text-gray-100 text-xl sm:text-2xl">
                Purpose:
              </strong>{" "}
              {pdfItem.purpose}
            </h2>
            <p className="text-white leading-relaxed text-lg sm:text-xl mx-2 sm:mx-4 md:mx-5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              {pdfItem.info}
            </p>
          </>
        )}

        {read === true && (
          <button
            className="px-4 sm:px-6 py-2 sm:py-3 w-28 sm:w-32 md:w-40 text-white font-semibold bg-gradient-to-r from-red-500 to-red-700 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95"
            onClick={handleOnClick}
          >
            Close PDF
          </button>
        )}

        {read === false ? (
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4">
            <button
              className="px-4 sm:px-6 py-2 sm:py-3 w-28 sm:w-32 md:w-40 cursor-pointer text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95"
              onClick={handleOnClick}
            >
              Read PDF
            </button>
          </div>
        ) : (
          <div className="w-full flex justify-center overflow-auto mt-4">
            <iframe
              src={pdfItem.src}
              className="w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] border-2 border-gray-300 shadow-lg rounded-md"
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </div>
      <a
        href={pdfItem.src}
        download={pdfItem.name || "document.pdf"}
        className="px-2 self-center sm:px-4 py-2 sm:py-3 w-28 sm:w-32 md:w-40 text-white font-semibold bg-gradient-to-r from-green-500 to-green-700 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95 text-center"
      >
        Download
      </a>
    </>
  );
};

export default PDFReaderComponent;
