const API_KEY = process.env.REACT_APP_TMDBAPI;

const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchComedyMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchHorrorMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchRomanceMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchDocumantaries: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
