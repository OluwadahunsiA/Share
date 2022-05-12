import axios from 'axios';

const API = axios.create({ baseURL: 'http://127.0.0.1:8000' });

// API.interceptors.request.use((config) => {
//   return config;
// });

const api = {
  getMovies: () => API.get('/movies'),
  createMovie: (body) => API.post('/movies', body),
  getMovieById: (id) => API.get(`/movies/${id}`),
  editOneMovie: (id, body) => API.patch(`/movies/${id}`, body),
  likeOneMovie: (id, body) => API.patch(`/movies/like/${id}`, body),
};

export default api;
