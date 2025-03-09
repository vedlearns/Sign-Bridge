import SignLanguageTranslator from "./SignLanguageTranslator";

const SignToTextComponent = () => {
  return (
    <>
      <div className="bg-[#020076] flex flex-col sm:flex-row min-h-screen p-4 sm:p-6 rounded-lg shadow-lg">
        <SignLanguageTranslator />
      </div>
    </>
  );
};
export default SignToTextComponent;
