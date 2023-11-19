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
  videoKey: null,
  backUpVidKey: null,
  img: "https://image.tmdb.org/t/p/w300",
  videoEndpoint: {
    movie: "movie/",
    video: "/videos?api_key=52dfd4e50346e927a3b341e688889302",
  },
  videoYoutubeUrl: "",
});

// https://api.themoviedb.org/3/movie/136244/credits?api_key=52dfd4e50346e927a3b341e688889302
// https://www.youtube.com/watch?v=UdFeVo0cODs
// https://api.themoviedb.org/3/movie/872585/videos?api_key=52dfd4e50346e927a3b341e688889302
// https://www.youtube.com/embed/fXmAurh012s?version=3&playlist=fXmAurh012s&autoplay=1&loop=1&controls=0&rel=0&fs=0
