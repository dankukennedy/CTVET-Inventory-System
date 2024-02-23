import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";

//importing our assets
import video from "./Assets/video.mp4";
import logo from "./Assets/logo.jpg";

const Login = () => {
  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">create And Sell Extraordinary Product</h2>
            <p>Adopt the peace of nature</p>
          </div>

          <div className="formDiv flex">
            <div className="headerDav">
              <img src={logo} alt="Logo Image" />
              <h3>Welcome Back!</h3>
            </div>
            <form action="" className="form-grid">
              <span>Login Status will go here</span>
              <div className="inputDav">
                <label htmlFor="username">Username</label>
                <div className="imput flex">
                  <FaUserShield className="icon" />
                </div>
              </div>
            </form>
          </div>
          <div className="footerDiv flex">
            <span className="text">Don&apos;t have an account? </span>
            <Link to={"/register"}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
