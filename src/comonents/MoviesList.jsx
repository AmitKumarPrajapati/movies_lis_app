/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import "./style.css";
import { Grid } from "@mui/material";

/**Movies List Component */
const MoviesList = () => {
    /** State variables */
  const [movieData, setMovieData] = useState();
  const imgBaseUrl = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";
  
    /**Getting movies related data from api */
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=adfadf92f16d501b02c759d8fe101e85&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => setMovieData(data));
  }, []);

  return (
    <>
      {movieData &&
        movieData.results.length &&
        movieData.results.map((movie) => (
          <Grid container spacing={2} padding={2}>
            <Grid style={{ display: "flex" }} item xs={6}>
              <Grid item xs={6}>
                <img
                  src={`${imgBaseUrl}${movie.poster_path}`}
                  width="350px"
                  height="300px"
                  alt="No Image Found"
                />
              </Grid>
              <Grid item xs={6}>
                <h2>{movie.title}</h2>
              </Grid>
            </Grid>
            <Grid style={{ display: "flex" }} item xs={6}>
              <Grid item xs={6}>
                <img
                  src={`${imgBaseUrl}${movie.poster_path}`}
                  width="350px"
                  height="300px"
                  alt="No Image Found"
                />
              </Grid>
              <Grid item xs={6}>
                <h2>{movie.title}</h2>
              </Grid>
            </Grid>
          </Grid>
        ))}
    </>
  );
};

export default MoviesList;
