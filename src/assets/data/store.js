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
  castShow: false,
  isFiltered: true,
  splashTime: true,
  login: true,
  castId: null,
  genreId: "",
  paramsPopular: {
    api_key: "52dfd4e50346e927a3b341e688889302",
    language: "it-IT",
  },
  api_key: "?api_key=52dfd4e50346e927a3b341e688889302",
  movieList: [],
  seriesList: [],
  popularList: [],
  genreList: [],
  filteredGenres: [],
  castList: [],
  movieIdList: [],
  seriesIdList: [],
  popularIdList: [],
  img: "https://image.tmdb.org/t/p/w300",
});

// https://api.themoviedb.org/3/movie/136244/credits?api_key=52dfd4e50346e927a3b341e688889302
// https://www.youtube.com/watch?v=UdFeVo0cODs
// https://api.themoviedb.org/3/movie/872585/videos?api_key=52dfd4e50346e927a3b341e688889302
