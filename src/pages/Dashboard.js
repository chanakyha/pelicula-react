import React, { useEffect, useState } from "react";
import { onAuthStateChanged, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "../axios";
import requests from "../request";
import Jumbotron from "../components/Jumbotron";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        return navigate("/login");
      } else {
        setUserData(user);
      }
    });
  }, []);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovies(request.data.results);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Jumbotron movies={movies} />
    </div>
  );
};

export default Dashboard;
