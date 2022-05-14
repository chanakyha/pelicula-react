import React from "react";
import { Bars } from "react-loader-spinner";

const Jumbotron = ({ movies }) => {
  const movie = movies
    ? movies[Math.floor(Math.random() * movies.length)]
    : null;
  console.log(movies);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
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
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            {movie ? movie.original_title : "Loading .."}
          </h1>
          <p className="py-6">{movie ? movie.overview : "Loading .."}</p>
          <button className="btn btn-primary">Book Seats</button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
