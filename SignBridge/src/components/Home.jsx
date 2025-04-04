import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import GesturesComponent from "./GesturesComponent";
import HomeUIComponent from "./HomeUIComponent";
import SignToTextComponent from "./SignToTextComponent";
import NavbarComponent from "./NavbarComponent";
import TextToSignComponent from "./TextToSignComponent";
import ResourcesComponent from "./ResourcesComponent";
import FooterComponent from "./FooterComponent";
import FirebaseAuth from "./Auth/FirebaseAuth";
import "./Home.css";

const Home = () => {
  const [tab, setTab] = useState("Sign Bridge");
  return (
    <>
      <div className="  min-h-screen" style={{ backgroundColor: "#007BFF" }}>
        <NavbarComponent setTab={setTab} />
        {tab === "Sign Bridge" && <HomeUIComponent setTab={setTab} />}
        {tab === "Translate" && <SignToTextComponent />}
        {tab === "Gestures" && <GesturesComponent />}
        {tab === "Resources" && <ResourcesComponent />}
        {tab === "Text To Sign" && <TextToSignComponent />}
        {tab === "Join Us" &&<FirebaseAuth />}
        {tab!=="Join Us" &&  
        <a className="sticky-link " href="#navbar">
          <p className="text-lg flex gap-1 items-center "><FaArrowCircleUp className="text-lg " />Top</p>
        </a> }
        {tab === "Sign Bridge" && <FooterComponent />}
      </div>
    </>
  );
};

export default Home;
