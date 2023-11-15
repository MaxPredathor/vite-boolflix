import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/",

  endPoint: {
    movie: "search/movie",
    series: "search/tv",
  },
  params: {
    query: "star",
    api_key: "52dfd4e50346e927a3b341e688889302",
  },
  movieList: [],
  seriesList: [],
  img: "https://image.tmdb.org/t/p/w300",
});
