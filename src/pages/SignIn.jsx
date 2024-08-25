import React, { useState } from "react";
import Toggle from "../components/Toggle";
import "./SignIn.css";
import lady from "../images/lady.png";
import logo from "../images/logo.png";
import googlelogo from "../images/google.png";

import { FaApple } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  doSignInWithApple,
} from "../firebase/auth";

import { useAuth } from "../context/Authcontext";
import { Navigate } from "react-router-dom";

function SignIn({ theme }) {
  // const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [issigningIN, setissigningIn] = useState(false);
  const [errormessege, seterrormessege] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!issigningIN) {
      setissigningIn(!issigningIN);
      doSignInWithEmailAndPassword(email, password);
    }
  };

  const onGoogle = async (e) => {
    e.preventDefault();
    if (!issigningIN) {
      setissigningIn(!issigningIN);
      doSignInWithGoogle();
    }
  };

  const onApple = async (e) => {
    e.preventDefault();
    if (!issigningIN) {
      setissigningIn(!issigningIN);
      doSignInWithApple();
    }
  };

  const [button, setbutton] = useState(false);
  const buttontheme = () => {
    setbutton(!button);
    const google = document.querySelector(".google");
    if (button) {
      google.classList.toggle("l-google");
    }
    const apple = document.querySelector(".apple");
    if (button) {
      apple.classList.toggle("l-apple");
    }
    const form = document.querySelector(".form");
    if (button) {
      form.classList.toggle("l-form");
    }
    const input = document.querySelectorAll(".input");
    if (!button) {
      input[0].classList.toggle("l-input");
      input[1].classList.toggle("l-input");
    }
    const submit = document.querySelector(".submit");
    if (button) {
      submit.classList.toggle("l-submit");
    }
  };
  return (
    <div>
      {/* {userLoggedIn && <Navigate to={"/home"} replace={true} />} */}
      <div className="header">
        <img className="ll" src={logo} alt="" />
        <h2>BASE</h2>
      </div>
      <div id="body">
        <div className="left">
          <div className="innerleft">
            <div className="logo">
              <img className="ll" src={logo} alt="" />
              <h2>BASE</h2>
            </div>
            <div className="text">
              <h1>Generate detailed reports with just one click</h1>
            </div>
            <div onClick={buttontheme} id="button">
              <Toggle toggleTheme={theme} />
            </div>
            <img className="lady" src={lady} alt="img" />
          </div>
        </div>
        <div className="right">
          <div className="innerright">
            <div>
              <h1>Sign in</h1>
              <h4 style={{ marginTop: -20 }}>Sign in to your account</h4>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <button onClick={onGoogle} className="google">
                <img id="google" src={googlelogo} alt="" />
                Sign in with Google
              </button>
              <button onClick={onApple} className="apple">
                <FaApple id="apple" />
                Sign in with Google
              </button>
            </div>
            {/* ................................................................. */}
            <form className="form">
              Email Address
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="input"
                required
              />
              Password
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="input"
                required
              />
              <a href="" style={{ color: "#4a79d9", textDecoration: "none" }}>
                Forgot password
              </a>
              <button onClick={onSubmit} className="submit">
                Submit
              </button>
            </form>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h5 style={{ color: "#858585", margin: 0 }}>
                Don't have an account?
              </h5>
              <a href="" style={{ color: "#4a79d9", textDecoration: "none" }}>
                <h4 style={{ margin: 0, fontWeight: "bold" }}>Register here</h4>
              </a>
            </div>
          </div>
          <div className="links">
            <AiFillTwitterCircle size={30} style={{ margin: "0 20 0 0" }} />
            <FaGithub size={30} style={{ margin: "0 20 0 0" }} />
            <FaLinkedin size={30} style={{ margin: "0 20 0 0" }} />
            <IoLogoDiscord size={30} style={{ margin: "0 20 0 0" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
