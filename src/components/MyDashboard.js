import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import {toast} from "react-toastify"
const MyDashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      toast.error("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  });
  return (
    <div>
      <header className="dashboard-title">
        <h1>MyDashboard</h1>
      </header>
      <div className="dashboard card">
        <i className="fa fa-user"></i>
        <div>
          <h2>Hi,{name}</h2>
        <h2>{user?.email}</h2>
        <button className="btn"onClick={logout}>
          Logout
        </button>
        </div>
      </div>
    </div>
  )
}

export default MyDashboard