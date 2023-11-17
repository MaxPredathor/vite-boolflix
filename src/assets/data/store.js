import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/",
  endPoint: {
    movie: "search/movie",
    series: "search/tv",
    popular: "movie/popular",
  },
  genreEndPoint: {
    movie: "genre/movie/list",
    serie: "genre/tv/list",
  },
  adult: "?include_adult=true",
  params: {
    query: "star",
    language: "it-IT",
    api_key: "52dfd4e50346e927a3b341e688889302",
  },
  scrolled: false,
  isActive: false,
  paramsPopular: {
    api_key: "52dfd4e50346e927a3b341e688889302",
    language: "it-IT",
  },
  api_key: "?api_key=52dfd4e50346e927a3b341e688889302",
  movieList: [],
  seriesList: [],
  popularList: [],
  genreList: [],
  img: "https://image.tmdb.org/t/p/w300",
});

// https://api.themoviedb.org/3/genre/movie/list?api_key=52dfd4e50346e927a3b341e688889302
