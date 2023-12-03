const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWVhYWMwMjdhZDU4ZTcwYTZjNDg1Njc0ZTMzNTQzZCIsInN1YiI6IjY1NGIzYTU5MWFjMjkyN2IzMDI5OTBhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tdl69kopaTeJ7ZQ4FrkUs1gvHFA4wloCudQnz1byzrs"
  }
};

const url = (urlName) => {
  return baseUrl + `${urlName}?language=en-US`;
};

//movies api URL

// you will have to use UseParams when calling the movieDetail const to another components
export const movieDetail = (id) => {
  const movieDetailUrl = baseUrl + `movie/${id}?language=en-US`;
  return fetch(movieDetailUrl, options).then((res) => res.json());
};

export const movieCredits = (id) => {
  const movieCreditsUrl = baseUrl + `movie/${id}/credits?language=en-US`;
  return fetch(movieCreditsUrl, options).then((res) => res.json());
};

export const movieRecommendations = (id) => {
  const movieRecommendationUrl =
    baseUrl + `movie/${id}/recommendations?language=en-US`;
  return fetch(movieRecommendationUrl, options).then((res) => res.json());
};

export const movieReleaseDates = (id) => {
  const movieReleaseDatesUrl =
    baseUrl + `movie/${id}/release_dates?language=en-US`;
  return fetch(movieReleaseDatesUrl, options).then((res) => res.json());
};

export const nowPlayingMovie = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popularMovie = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const upcomingMovie = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());

export const topratedMovie = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

//**********************************************************************************************************************************************************

//series api URL

// you will have to use UseParams when calling the serieDetail const to another components
export const serieDetail = (id) => {
  const serieDetailUrl = baseUrl + `tv/${id}?language=en-US`;
  return fetch(serieDetailUrl, options).then((res) => res.json());
};

export const serieCredits = (id) => {
  const serieCreditsUrl = baseUrl + `tv/${id}/credits?language=en-US`;
  return fetch(serieCreditsUrl, options).then((res) => res.json());
};

export const airingTodaySerie = () =>
  fetch(url("tv/airing_today"), options).then((res) => res.json());

export const popularSerie = () =>
  fetch(url("tv/popular"), options).then((res) => res.json());

export const topratedSerie = () =>
  fetch(url("tv/top_rated"), options).then((res) => res.json());

export const search = (type, keyword) => {
  const searchUrl = baseUrl + `search/${type}?query=${keyword}&language=en-US`;
  return fetch(searchUrl, options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data); // Log the response to the console
      return data;
    });
};

export const genreList = (type) => {
  const genreUrl = baseUrl + `genre/${type}/list?language=en-US`;
  return fetch(genreUrl, options).then((res) => res.json());
};

export const discover = (type, genreId) => {
  const discoverUrl =
    baseUrl +
    `discover/${type}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc${
      genreId ? `&with_genres=${genreId}` : ""
    }`;
  return fetch(discoverUrl, options).then((res) => res.json());
};
