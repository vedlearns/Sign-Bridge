import { createContext,useState,useContext } from "react";
import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword ,GoogleAuthProvider ,signInWithPopup} from "firebase/auth";

const firebaseAuth = getAuth(app);
const googleProvider=new GoogleAuthProvider();

export const firebaseContext = createContext({
  signupUserWithEmailAndPassword: () => {},
  signInUserWithEmailAndPassword: () => {},
  signInUsingGoogle: () => {},
  putData: () => {},
});

export const FirebaseProvider = ({ children }) => {

  const signupUserWithEmailAndPassword = (email, password) =>{
    createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then(()=>setMessage("Account Created Successfully"))
    .catch((err)=>setMessage(err))
  }

  const signInUserWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password)
  .then(()=>setMessage("logged In Successfully"))
  .catch((err)=>setMessage(err))

  const signInUsingGoogle=()=>signInWithPopup(firebaseAuth,googleProvider)
  const [userSignIn, setUserSignIn] = useState(null);
  const [message,setMessage]=useState("")
  return (
    <firebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        signInUserWithEmailAndPassword,
        signInUsingGoogle,
        userSignIn, setUserSignIn,
        message,setMessage
      }}
    >
      {children}
    </firebaseContext.Provider>
  );
};

export const UserAuth = () => useContext(firebaseContext);
