import React, { useEffect } from "react";
import { onAuthStateChanged, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        return navigate("/login");
      }
    });
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
