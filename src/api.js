import axios from 'axios';

const API_KEY = 'f064a67e0d808eb7bb367bbd759b1bcc';

const api = axios.create({
	basicURL: 'https://api.themoviedb.org/3',
});

export const movieApi = {
	nowPlaying: api.get('/movie/now_playing'),
	upcoming: api.get('/movie/upcoming'),
	popular: api.get('/movie/popular'),
	topRated: api.get('/movie/top_rated'),
};

export const TVApi = {
	airingToday: api.get('/tv/airing_today'),
	popular: api.get('/tv/popular'),
	topRated: api.get('/tv/top_rated'),
	onTheAir: api.get('/tv/on_the_air'),
};
