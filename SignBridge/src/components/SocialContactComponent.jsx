import { FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const SocialContactComponent = () => {
  return (
    <>
      <div className="socialContact">
        <p className="text-xl">Lets Connect :</p>
        <ul className="flex flex-row space-x-4">
          <li className="cursor-pointer text-4xl mx-2 my-2 transition duration-300 hover:scale-110">
            <a target="blank" href="https://www.linkedin.com/in/vedank-singh">
              <FaLinkedin />
            </a>
          </li>
          <li className="cursor-pointer text-4xl mx-2  my-2 transition duration-300 hover:scale-110">
            <a target="blank" href="https://www.instagram.com/Vaarid__/">
              <FiInstagram />
            </a>
          </li>
          <li className="cursor-pointer text-4xl mx-2 my-2  transition duration-300 hover:scale-110">
            <a target="blank" href="https://github.com/vedlearns">
              <FaGithub />
            </a>{" "}
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialContactComponent;
