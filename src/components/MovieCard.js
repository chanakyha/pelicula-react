import React from "react";

const MovieCard = ({ movie, id }) => {
  return (
    <div id={id} className="carousel-item card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={"https://image.tmdb.org/t/p/original/" + movie?.poster_path}
          alt="Shoes"
          className="rounded-xl ease-in-out delay-175 hover:scale-110 cursor-pointer duration-200"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {movie ? movie.original_title : "Loading .."}
        </h2>
        <p className="text-ellipsis whitespace-normal">
          {movie ? movie.overview : "Loading .."}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
