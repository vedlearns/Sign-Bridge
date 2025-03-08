import {  useState } from "react";

const PDFReaderComponent = ({ pdfItem }) => {
  const [read, setRead] = useState(false);
  const handleOnClick = () => {
    setRead(!read);
  };

  return (
    <>
    {read===false&&<>
      <h1 className="text-white  text-center text-4xl font-bold mt-2 mb-4">
        {pdfItem.name}
      </h1>
      <h2 className="text-white mx-5  text-xl">
        <strong className="text-grey-100 text-2xl" > Purpose : </strong> {pdfItem.purpose}
      </h2>
      <p className="text-white leading-relaxed mx-5 text-xl">{pdfItem.info}</p>
    </>}
   
      {read === true && (
        <button
          className="px-6 self-center cursor-pointer py-3 w-40 text-white font-semibold bg-gradient-to-r from-red-500 to-red-700 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95"
          onClick={handleOnClick}
        >
          Close PDF
        </button>
      )}
      {read === false ? (
        <button
          className="px-6 my-5 self-center py-3 w-40  cursor-pointer text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95"
          onClick={handleOnClick}
        >
          Read PDF
        </button>
      ) : (
        <iframe
          src={pdfItem.src}
          width="100%"
          height="400px"
          frameborder="0"
        ></iframe>
      )}
    </>
  );
};

export default PDFReaderComponent;
