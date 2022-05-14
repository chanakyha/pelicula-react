import React from "react";
import MovieCard from "../components/MovieCard";

const MovieRow = ({ title, movies }) => {
  return (
    <div className="">
      <div className="divider" />
      <h1 className="font-bold pl-5 text-3xl">{title}</h1>
      <div className="flex carousel-center overflow-x-scroll">
        {movies ? (
          movies.map((movie) => (
            <MovieCard key={movie?.id} id={movie?.id} movie={movie} />
          ))
        ) : (
          <div>Loading ..</div>
        )}
      </div>
    </div>
  );
};

export default MovieRow;
