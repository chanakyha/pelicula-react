import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MovieCard = ({ movie, id }) => {
  const navigate = useNavigate();

  return (
    <div id={id} className="carousel-item card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <Link to="/movie" state={{ data: JSON.stringify(movie) }}>
          <img
            src={"https://image.tmdb.org/t/p/original/" + movie?.poster_path}
            alt="Shoes"
            className="rounded-xl ease-in-out delay-175 hover:scale-110 cursor-pointer duration-200"
          />
        </Link>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {movie
            ? movie.original_name || movie.original_title || movie.title
            : "Loading .."}
        </h2>
      </div>
    </div>
  );
};

export default MovieCard;
