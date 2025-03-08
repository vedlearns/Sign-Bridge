import "./App.css";
import Home from "./components/Home";
import { SignContextProvider } from "./context/SignContext";

function App() {
  return (
    <>
      <SignContextProvider>
        <Home/>
      </SignContextProvider>
    </>
  );
}

export default App;
