import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  onAuthStateChanged,
  provider,
  signInWithPopup,
} from "../firebase";
import GoogleSVGIcon from "../assets/svgs/GoogleLogo.svg";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        return navigate("/");
      }
    });
  }, []);

  const onGoogleLogin = () => {
    toast.promise(signInWithPopup(auth, provider), {
      loading: <b>Signing in ...</b>,
      success: <b>You Are Signed in Successfully.</b>,
      error: <b>Could not Sign in.</b>,
    });
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center h-screen">
      <div className="space-y-6 border-2 p-12">
        <img className="w-full" src={GoogleSVGIcon} alt="Google Logo G" />
        <button onClick={onGoogleLogin} className="btn btn-accent">
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
