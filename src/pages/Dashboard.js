import React, { useEffect, useState } from "react";
import { onAuthStateChanged, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "../axios";
import requests from "../request";
import Jumbotron from "../components/Jumbotron";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";
const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState(null);
  const [netflixoriginals, setnetflixoriginals] = useState(null);
  const [toprated, setToprated] = useState(null);
  const [actionmovies, setActionmovies] = useState(null);
  const [comedymovies, setComedymovies] = useState(null);
  const [horrormovies, setHorrormovies] = useState(null);
  const [romancemovies, setRomancemovies] = useState(null);
  const [documentaries, setDocumentaries] = useState(null);

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
    async function fetchTrending() {
      const request = await axios.get(requests.fetchTrending);
      setTrending(request.data.results);
      console.log(request.data.results);
      setMovies(...movies, request.data.results);
      setMovies(...movies, request.data.results);
      return request;
    }
    fetchTrending();

    async function fetchNetflixOriginals() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setnetflixoriginals(request.data.results);
      console.log(request.data.results);
      setMovies(...movies, request.data.results);

      return request;
    }
    fetchNetflixOriginals();

    async function fetchTopRated() {
      const request = await axios.get(requests.fetchTopRated);
      setToprated(request.data.results);
      console.log(request.data.results);
      setMovies(...movies, request.data.results);
      return request;
    }
    fetchTopRated();

    async function fetchActionMovies() {
      const request = await axios.get(requests.fetchActionMovies);
      setActionmovies(request.data.results);
      console.log(request.data.results);
      setMovies(...movies, request.data.results);
      return request;
    }
    fetchActionMovies();

    async function fetchComedyMovies() {
      const request = await axios.get(requests.fetchComedyMovies);
      setComedymovies(request.data.results);
      console.log(request.data.results);
      setMovies(...movies, request.data.results);
      return request;
    }
    fetchComedyMovies();

    async function fetchHorrorMovies() {
      const request = await axios.get(requests.fetchHorrorMovies);
      setHorrormovies(request.data.results);
      console.log(request.data.results);
      setMovies(...movies, request.data.results);
      return request;
    }
    fetchHorrorMovies();

    async function fetchRomanceMovies() {
      const request = await axios.get(requests.fetchRomanceMovies);
      setRomancemovies(request.data.results);
      console.log(request.data.results);
      setMovies(...movies, request.data.results);
      return request;
    }
    fetchRomanceMovies();

    async function fetchDocumentaries() {
      const request = await axios.get(requests.fetchDocumentaries);
      setDocumentaries(request.data.results);
      console.log(request.data.results);
      setMovies(...movies, request.data.results);
      return request;
    }
    fetchDocumentaries();
  }, []);

  return (
    <div>
      <Jumbotron movies={movies} />
      <div className="">
        <MovieRow title="Trending Now" movies={trending} />
        <MovieRow title="Netflix Originals" movies={netflixoriginals} />
        <MovieRow title="Top Rated" movies={toprated} />
        <MovieRow title="Action Movies" movies={actionmovies} />
        <MovieRow title="Comedy Movies" movies={comedymovies} />
        <MovieRow title="Horror Movies" movies={horrormovies} />
        <MovieRow title="Romance Movies" movies={romancemovies} />
        <MovieRow title="Documentaries" movies={documentaries} />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
