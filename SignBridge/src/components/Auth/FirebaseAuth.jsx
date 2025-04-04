import { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth} from "firebase/auth";
import SignupPage from "./SignupPage";
import SigninPage from "./SigninPage";
import { app } from "../../firebase";
import { UserAuth } from "../../context/firebaseContext";

const firebaseAuth = getAuth(app);

const FirebaseAuth = () => {
  const [showSignUpPage, setShowSignUpPage] = useState(true);
  const { message,userSignIn,setUserSignIn }=UserAuth();

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(firebaseAuth, (user) => {
        if (user) {
          setUserSignIn(user);
        } else {
          console.log("user not logged in");
          setUserSignIn(null);
        }
      });
    
    return () => unsubscribe();
  }, []);

  return (
    <>
      <center>
      { message!==""&&
     <div className="text-white text-xl items-center px-4 py-2 border-l-4 border-blue-500">
     <p>{message.toString()}</p>
   </div>
        }
        {console.log(userSignIn)}
        {userSignIn===null&&(showSignUpPage === true ? (
          <SignupPage setShowSignUpPage={setShowSignUpPage} />
        ) : (
          <SigninPage setShowSignUpPage={setShowSignUpPage} />
        ))
      }   
      </center>
    </>
  );
};

export default FirebaseAuth;
