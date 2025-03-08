import { useContext} from "react";
import { SignContext } from "../context/SignContext";
import PDFReaderComponent from "./PDFReaderComponent";

const ResourcesComponent = () => {
  const { pdf } = useContext(SignContext);

  return (
    <>
      <div className="w-[70%]   mx-auto py-10">
        <h1 className="text-4xl text-white font-bold text-center mb-6">
          Free! Resources to Learn Sign Language{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {pdf.map((pdfItem, index) => (
            <div
              key={index}
              className="signContainer w-full h-full flex flex-col gap-5  justify-evenly min-h-[25rem] leading-relaxed rounded-2xl shadow-lg p-4 bg-gradient-to-br from-gray-800 to-gray-600 transition-all duration-300 hover:shadow-[0px_10px_30px_rgba(0,0,0,0.5)] hover:translate-y-[-1px]"
            >
              <PDFReaderComponent
                pdfItem={pdfItem}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResourcesComponent;
