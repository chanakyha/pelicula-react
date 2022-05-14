import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MovieDescription = () => {
  const navigate = useNavigate();
  let params = useLocation();
  const [data, setData] = useState({});
  console.log(params);
  useEffect(() => {
    if (!params.state) {
      return navigate("/");
    } else {
      setData(JSON.parse(params?.state?.data));
    }
  }, []);

  console.log(data);
  return (
    <div>
      <div
        class="hero min-h-screen bg-base-200"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${data?.backdrop_path}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60" />

        <div class="hero-content flex-col lg:flex-row">
          <img
            src={"https://image.tmdb.org/t/p/original/" + data?.poster_path}
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">
              {data?.original_name || data?.original_title || data?.title}
            </h1>
            <p class="py-6">{data?.overview}</p>
            <div class="stats shadow">
              <div class="stat">
                <div class="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div class="stat-title">Released Date</div>
                <div class="stat-value text-primary">
                  {data?.release_date || "NA"}
                </div>
                {data?.adult ? <div class="stat-desc">18+ Warning</div> : null}
              </div>
              <div class="stat">
                <div class="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div class="stat-title">Popularity</div>
                <div class="stat-value text-primary">
                  {data?.popularity || "NA"}
                </div>
              </div>
              <div class="stat">
                <div class="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div class="stat-title">Vote Count</div>
                <div class="stat-value text-secondary">
                  {data?.vote_count || "NA"}
                </div>
              </div>
              <div class="stat">
                <div class="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    ></path>
                  </svg>
                </div>
                <div class="stat-title">Vote Average</div>
                <div class="stat-value text-secondary">
                  {data?.vote_average || "NA"}
                </div>
              </div>
            </div>
            <button className="mt-5 btn btn-primary">Book Seats</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
