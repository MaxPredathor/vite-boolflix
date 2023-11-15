<template>
  <div>
    <section id="movie" class="container">
      <h2>Movies</h2>
      <input type="text" v-model="this.store.params.query" @keyup.enter="getMoviesAndSeries()">
      <button class="btn btn-primary ms-2" @click="getMoviesAndSeries()">Cerca</button>
      <div class="row">
        <CardComponent 
        v-for="movie in store.movieList" :key="movie.id"
        :img="this.store.img"
        :imgPath="movie.poster_path"
        :title="movie.title"
        :titoloOriginale="movie.original_title"
        :language="movie.original_language"
        :voto="movie.vote_average"
        />
      </div>
    </section>
    <section id="series" class="container">
      <h2>Series</h2>
      <div class="row">
        <CardComponent 
        v-for="serie in store.seriesList" :key="serie.id"
        :img="this.store.img"
        :imgPath="serie.poster_path"
        :title="serie.name"
        :titoloOriginale="serie.original_name"
        :language="serie.original_language"
        :voto="serie.vote_average"
        />
        <div class="col-12 col-md-4 col-lg-3"
         v-for="serie in store.seriesList" :key="serie.id">
          {{ serie.name }}
          <img :src="this.store.img + serie.poster_path" :alt="serie.title">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardComponent from './components/CardComponent.vue'
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
    }
  },
  created(){
   this.getMoviesAndSeries()
  }
  }
  
</script>

<style lang="scss" scoped>


</style>