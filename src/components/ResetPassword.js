import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase";
import { loginImg } from "../assets";
const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/mydashboard");
  }, [user, loading,navigate]);
  return (
    <div className="flex-row flex-wrap width-md decoration-none">
      {/* ResetPassword */}
      <img src={loginImg} alt="login-img" className="login-img " />
      <Link to="/any">
          <h2 className="cursor-pointer main-heading"> ✦꙳  Explorer </h2>
        </Link>
      <div className="login">
        <div className="form decoration-none">
          <div className="login-form" >
            <span>
              <i className="fa fa-lock fa-3x"></i>
            </span>
            <div className="flex-col gap">
              <input
                className="border-none login-input"
                type="text"
                name="Email"
                placeholder="user@gmail.com"
                value={email}
                 onChange={(e) => setEmail(e.target.value)}
              />
            
              <button className="border-none primary-btn"onClick={() => sendPasswordReset(email)}>
              Send password reset email
                {/* {isLoading ? <i className="fa fa-spinner"></i> : ""} */}
              </button>
              <Link to="/">
              <button className="border-none primary-btn" >
               Login
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ResetPassword