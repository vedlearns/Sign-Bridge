import { FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SocialContactComponent=()=>{
return(
  <>
  <div className="socialContact">
  <p className="text-xl">Contact us:</p>
  <ul className="flex flex-row space-x-4">
    <li className="cursor-pointer text-4xl mx-2 my-2 transition duration-300 hover:scale-110"><FaLinkedin /></li>
    <li className="cursor-pointer text-4xl mx-2  my-2 transition duration-300 hover:scale-110"><FiInstagram /></li>
    <li className="cursor-pointer text-4xl mx-2 my-2  transition duration-300 hover:scale-110"><FaGithub /></li>
    <li className="cursor-pointer text-4xl mx-2 my-2  transition duration-300 hover:scale-110"><SiGmail /></li>
  </ul>
</div>
  </>
)
}

export default SocialContactComponent;