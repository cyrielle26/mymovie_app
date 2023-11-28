const fetch = require('node-fetch');

const baseUrl = 'https://api.themoviedb.org/3/';


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json', 
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWVhYWMwMjdhZDU4ZTcwYTZjNDg1Njc0ZTMzNTQzZCIsInN1YiI6IjY1NGIzYTU5MWFjMjkyN2IzMDI5OTBhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tdl69kopaTeJ7ZQ4FrkUs1gvHFA4wloCudQnz1byzrs'
      
    }
}

const fetchApiData = (endpoint, id = '', queryParams = '') => {
    const apiUrl = `${baseUrl}${endpoint}/${id}${queryParams ? `?${queryParams}&` : ''}language=en-US`;
    return fetch(apiUrl, options).then((res) => res.json());
};

// Movies API
export const movieDetail = (id) => fetchApiData('movie', id);
export const movieCredits = (id) => fetchApiData('movie', id, 'credits');
export const movieRecommendations = (id) => fetchApiData('movie', id, 'recommendations');
export const movieReleaseDates = (id) => fetchApiData('movie', id, 'release_dates');
export const nowPlayingMovie = () => fetchApiData('movie', 'now_playing');
export const popularMovie = () => fetchApiData('movie', 'popular');
export const upcomingMovie = () => fetchApiData('movie', 'upcoming');
export const topRatedMovie = () => fetchApiData('movie', 'top_rated');

// Series API
export const serieDetail = (id) => fetchApiData('tv', id);
export const serieCredits = (id) => fetchApiData('tv', id, 'credits');
export const airingTodaySerie = () => fetchApiData('tv', 'airing_today');
export const popularSerie = () => fetchApiData('tv', 'popular');
export const topRatedSerie = () => fetchApiData('tv', 'top_rated');

// Search API
export const search = (type, keyword) => fetchApiData(`search/${type}`, '', `query=${keyword}`);
