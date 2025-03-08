import SignLanguageTranslator from "./SignLanguageTranslator";

const SignToTextComponent = () => {
  return (
    <>
     <div className="bg-[#020076] flex min-h-screen p-6 rounded-lg shadow-lg">
          <SignLanguageTranslator/>
        </div>
    </>
  );
};
export default SignToTextComponent;
