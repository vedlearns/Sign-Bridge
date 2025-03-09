import { useState } from "react";

const NavbarComponent = ({ setTab }) => {
  const [activeTab, setActiveTab] = useState("Sign Bridge");

  const handleOnClick = (e) => {
    const tabName = e.target.textContent || "Sign Bridge";
    setTab(tabName);
    setActiveTab(tabName);
  };

  return (
    <nav id="navbar" className="navbar">
      <div className="navbarBox1">
        <a className="flex justify-center" onClick={handleOnClick} href="#">
          <img
            className="w-[4em]"
            src="sign-bridge-high-resolution-logo-transparent.png"
            alt="Sign Bridge Logo"
          />
        </a>
        {["Translate", "Gestures", "Resources", "Text To Sign"].map((tab) => (
          <a
            key={tab}
            onClick={handleOnClick}
            href="#"
            className={activeTab === tab ? "text-blue-400 font-bold" : ""}
          >
            {tab}
          </a>
        ))}
      </div>
      <div>
        <button className="Btn">
          <a className="text-xl" href="">
            Sign Up
          </a>
        </button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
