import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { loginImg } from "../assets";
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/mydashboard");
  }, [user, loading,navigate]);
  return (
    <div className="flex-row flex-wrap width-md decoration-none">
      <img src={loginImg} alt="login-img" className="login-img " />
      <Link to="/any">
          <h2 className="cursor-pointer main-heading"> ✦꙳ Explorer </h2>
        </Link>
      <div className="login">
        <div className="form decoration-none">
          <div className="login-form">
            <span>
              <i className="fa fa-lock fa-3x"></i>
            </span>
            <div className="flex-col gap">
              <input
                className="border-none login-input"
                type="text"
                name="Email"
                placeholder="Email"
                value={email}
                 onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex-row gap password-container">
                <input
                  className="border-none login-password"
                  type={passwordType}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordType === "password" ? (
                  <i
                    className="fa fa-eye-slash eye-icon"
                    onClick={() => setPasswordType("text")}
                  ></i>
                ) : (
                  <i
                    className="fa fa-eye eye-icon"
                    onClick={() => setPasswordType("password")}
                  ></i>
                )}
              </div>
              <button className="border-none primary-btn" onClick={() => logInWithEmailAndPassword(email, password)}>
                login 
                {loading ? <i className="fa fa-spinner"></i> : ""}
              </button>
            </div>
            <p className="padding-sm decoration-none margin-sm">
              Join us today ?{" "}
              <Link to="/signup">
                <span className="cursor-pointer">SignUp</span>
              </Link>
              
              
            </p>
            or 
            <p className="padding-sm decoration-none margin-sm">
            <Link to="/reset">
                <span className="cursor-pointer">Forgot Password</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Login