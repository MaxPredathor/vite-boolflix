<template>
  <header>
    <HeaderComponent 
    @enter-emit="getMoviesAndSeries()"
    @search-emit="getMoviesAndSeries()" />
  </header>
  <main>
    <section id="popular" class="container position-relative">
      <h2 class="fw-bold fs-3 text-light my-3">Populars</h2>
      <div class="row flex-nowrap overflow-hidden" ref="popular">
        <CardComponent 
        v-for="popular in store.popularList" :key="popular.id"
        :img="this.store.img"
        :imgPath="popular.poster_path"
        :title="popular.title"
        :titoloOriginale="popular.original_title"
        :language="popular.original_language"
        :voto="roundVoto(popular.vote_average)"
        :desc="popular.overview"
        :adult="popular.adult"
        :genere="popular.genre_ids"
        />
      </div>
      <div class="d-flex justify-content-center align-items-center" id="prev" @click="scrollSliderPopular(0, - 2290)">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div class="d-flex justify-content-center align-items-center" id="next" @click="scrollSliderPopular(0, + 2290)">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </section>
    <section id="movie" class="container position-relative">
      <h2 class="fw-bold fs-3 text-light">Movies</h2>
      <div class="row flex-nowrap overflow-hidden" ref="movie">
        <CardComponent 
        v-for="movie in store.movieList" :key="movie.id"
        :img="this.store.img"
        :imgPath="movie.poster_path"
        :title="movie.title"
        :titoloOriginale="movie.original_title"
        :language="movie.original_language"
        :voto="roundVoto(movie.vote_average)"
        :desc="movie.overview"
        :adult="movie.adult"
        />
      </div>
      <div class="d-flex justify-content-center align-items-center" id="prev" @click="scrollSliderMovie(0, - 2290)">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div class="d-flex justify-content-center align-items-center" id="next" @click="scrollSliderMovie(0, + 2290)">
        <i class="fa-solid fa-chevron-right"></i>
      </div>  
    </section>
    <section id="series" class="container position-relative">
      <h2 class="fw-bold fs-3 text-light">Series</h2>
      <div class="row flex-nowrap overflow-hidden" ref="series">
        <CardComponent 
        v-for="serie in store.seriesList" :key="serie.id"
        :img="this.store.img"
        :imgPath="serie.poster_path"
        :title="serie.name"
        :titoloOriginale="serie.original_name"
        :language="serie.original_language"
        :voto="roundVoto(serie.vote_average)"
        :desc="serie.overview"
        :adult="serie.adult"
        />
      </div>
      <div class="d-flex justify-content-center align-items-center" id="prev" @click="scrollSliderSeries(0, - 2290)">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div class="d-flex justify-content-center align-items-center" id="next" @click="scrollSliderSeries(0, + 2290)">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </section>
  </main>
</template>

<script>
import CardComponent from './components/CardComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import { store } from './assets/data/store.js'
import axios from 'axios'
  export default {
    name: 'App',
    data(){
      return{
        store,
    }
  },
  components: {
    CardComponent,
    HeaderComponent,
  },
  methods: {
    getMoviesAndSeries(){
      this.store.movieList = []
      this.store.seriesList = []
      const movieUrl = this.store.apiUrl + this.store.endPoint.movie
      axios.get(movieUrl, {params: this.store.params})
        .then(function (response) {
          store.movieList = response.data.results
          console.log(response.data.results);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
        });

        
      const seriesUrl = this.store.apiUrl + this.store.endPoint.series
      axios.get(seriesUrl, {params: this.store.params})
      .then(function (response) {
        console.log(response.data.results);
        store.seriesList = response.data.results
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
      });

      this.store.params.query = ""
    },
    getPopular(){
      const popularUrl = this.store.apiUrl + this.store.endPoint.popular
      axios.get(popularUrl, {params: this.store.paramsPopular})
        .then(function (response) {
          console.log(response.data.results);
          store.popularList = response.data.results
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
        });
    },
    roundVoto(voto){
      let newVoto = voto / 2;
      let roundedVoto = Math.round(newVoto * 2)/2;
      return roundedVoto
    },
    scrollSliderPopular(x, y) {
      const slider = this.$refs.popular
      slider.scrollBy({
        top: x,
        left: y,
        behavior : "smooth"
      });
    },
    scrollSliderMovie(x, y) {
      const slider = this.$refs.movie
      slider.scrollBy({
        top: x,
        left: y,
        behavior : "smooth"
      });
    },
    scrollSliderSeries(x, y) {
      const slider = this.$refs.series
      slider.scrollBy({
        top: x,
        left: y,
        behavior : "smooth"
      });
    },
    getGenre(){
      const movieGenreUrl = this.store.apiUrl + this.store.genreEndPoint.movie
      axios.get(movieGenreUrl + this.store.api_key)
        .then(function (response) {
          console.log(response.data)
          for(let i = 0; i < response.data.genres.length; i++){
            this.store.genreList.push(response.data.genres[i])
          }
        })
        .catch(function (error) {
          // handle error
          // console.log(error);
        })
        console.log(this.store.genreList)
    },
  },
  created(){
    this.getPopular()
    this.getMoviesAndSeries()
    this.getGenre()
  },
  }
  
</script>

<style lang="scss" scoped>
  header{
    margin-bottom: 110px;
  }
  #prev{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: -40px;
    background-color: rgba(211, 211, 211, 0.5);
  }
  #next{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    right: -40px;
    background-color: rgba(211, 211, 211, 0.5);
  }
  #popular, #series, #movie{
    max-width: 90%;
  }


</style>