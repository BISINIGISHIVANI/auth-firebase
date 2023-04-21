import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
} from "../firebase";
import { loginImg } from "../assets";
import {toast} from "react-toastify"
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();

  const register = () => {
    if (!name) toast.warn("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/mydashboard");
  }, [user, loading,navigate]);

  return (
    <div className="flex-row flex-wrap width-md decoration-none">
      <img src={loginImg} alt="login-img" className="login-img " />
      <Link to="/any">
          <h2 className="cursor-pointer main-heading"> ✦꙳ Social Explore </h2>
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
                name="Fullname"
                placeholder="Fullname"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="border-none login-input"
                type="text"
                name="email"
                placeholder="sample@gmail.com"
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
              <button className="border-none primary-btn" onClick={register}>
                Sign up
                {loading ? <i className="fa fa-spinner"></i> : ""}
              </button>
            </div>
            <p className="padding-sm decoration-none">
              Already account ?{" "}
              <Link to="/">
                <span className="cursor-pointer">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    
  )
}


export default Signup