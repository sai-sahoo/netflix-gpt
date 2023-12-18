export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer '+process.env.REACT_APP_TMDB_TOKEN
    }
};
export const TMDB_MOVIE_POSTER = 'https://image.tmdb.org/t/p/w500/';
export const BG_IMG = 'img/netflix-bg.jpg';
export const LOGO_IMG = 'img/Netflix_Logo_PMS.png';
export const SUPORTED_LANGUAGES = [
    {
        identifier: 'en',
        name: 'English'
    },
    {
        identifier: 'hi',
        name: 'Hindi'
    },
    {
        identifier: 'spanish',
        name: 'Spanish'
    }
];
export const OPENAI_SECRET_KEY = process.env.REACT_APP_OPENAI_SECRET_KEY;