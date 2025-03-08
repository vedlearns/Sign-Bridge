const NavbarComponent = ({ setTab }) => {
  const handleOnClick = (e) => {
    if(e.target.textContent)
    setTab(e.target.textContent);
    else
    setTab("Sign Bridge");
  };
  return (
    <>
      <nav id="navbar" className="navbar">
        <div className="navbarBox1">
          <a className="flex justify-center" onClick={handleOnClick} href="#">
            <img
              className=" w-[4em]"
              src="sign-bridge-high-resolution-logo-transparent.png"
              alt=""
            />
          </a>
          <a  onClick={handleOnClick} href="#">
            Translate
          </a>
          <a onClick={handleOnClick} href="#">
            Gestures
          </a>
          <a onClick={handleOnClick} href="#">
            Resources
          </a>
          <a onClick={handleOnClick} href="#">
            Text To Sign
          </a>
        </div>
        <div>
          <button className="Btn">
            <a className="text-xl " href="">
              Sign Up
            </a>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
