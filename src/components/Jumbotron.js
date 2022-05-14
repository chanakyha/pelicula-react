import React from "react";
import { Bars } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Jumbotron = ({ movies }) => {
  const movie = movies
    ? movies[Math.floor(Math.random() * movies.length)]
    : null;
  console.log(movies);
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Link to="/movie" state={{ data: JSON.stringify(movie) }}>
          <img
            className="max-w-sm rounded-lg shadow-2xl ease-in-out delay-175 hover:scale-110 cursor-pointer duration-200"
            src={
              movie?.poster_path ? (
                "https://image.tmdb.org/t/p/original/" + movie?.poster_path
              ) : (
                <Bars
                  heigth="100"
                  width="100"
                  color="green"
                  ariaLabel="loading-indicator"
                />
              )
            }
          />
        </Link>

        <div>
          <h1 className="text-5xl font-bold">
            {movie
              ? movie.original_name || movie.original_title || movie.title
              : "Loading .."}
          </h1>
          <p className="py-6">{movie ? movie.overview : "Loading .."}</p>
          <button className="btn btn-primary">Book Seats</button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
