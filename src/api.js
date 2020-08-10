import axios from 'axios';

/*
axios 0.19 ~ issue

var instance = axios.create({
  //should not add 'method' option here
});
*/

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: {
		api_key: 'f064a67e0d808eb7bb367bbd759b1bcc',
		language: 'en-US',
	},
});

export const movieApi = {
	nowPlaying: () => api.get('movie/now_playing'),
	upcoming: () => api.get('movie/upcoming'),
	popular: () => api.get('movie/popular'),
	topRated: () => api.get('movie/top_rated'),
	search: (term) =>
		api.get('search/movie', {
			params: {
				query: encodeURIComponent(term),
			},
		}),
};

export const tvApi = {
	airingToday: () => api.get('tv/airing_today'),
	popular: () => api.get('tv/popular'),
	topRated: () => api.get('tv/top_rated'),
	onTheAir: () => api.get('tv/on_the_air'),
	search: (term) =>
		api.get('search/tv', {
			params: {
				query: encodeURIComponent(term),
			},
		}),
};
