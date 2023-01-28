import React, { useState } from "react";
import "./Login.css";
import loginlogo from "../Photos/2.png";
import { auth } from "../CartStore/firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
       
        if (userCredential) {
          alert("User Sign In!");
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        if (userCredential) {
          alert("New user added!");
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <>
      <div className="login">
        <div className="Login_logo">
          <img src={loginlogo} alt="" height={180} />
        </div>

        <div className="login_container">
          <h1>Sing in</h1>
          <form onSubmit={(register, signIn)}>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="login_sing_button"
              type="submit"
              onClick={signIn}
            >
              Sing In
            </button>
            <button className="login_registor_button" onClick={register}>
              Create your Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
