import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";

function useLogin() {
  const { dispatch } = useGlobalContext();
  const signUpWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch({ type: "LOG_IN", payload: user });
      alert("Success!!!");
    } catch (error) {
      const errorMessage = error.message;
      alert("Error");
    }
  };
  return { signUpWithGoogle };
}

export { useLogin };
