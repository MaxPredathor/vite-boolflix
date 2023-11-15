<template>
  <header>
    <HeaderComponent 
    @enter-emit="getMoviesAndSeries()"
    @search-emit="getMoviesAndSeries()" />
  </header>
  <main>
    <section id="movie" class="container">
      <h2 class="fw-bold fs-3 text-light">Movies</h2>
      <div class="row">
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
    </section>
    <section id="series" class="container">
      <h2 class="fw-bold fs-3 text-light">Series</h2>
      <div class="row">
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
    roundVoto(voto){
      let newVoto = voto / 2;
      let roundedVoto = Math.round(newVoto * 2)/2;
      return roundedVoto
    }
  },
  created(){
    this.getMoviesAndSeries()
  }
  }
  
</script>

<style lang="scss" scoped>


</style>