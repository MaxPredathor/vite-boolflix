<template>
  <header>
    <HeaderComponent 
    @enter-emit="getMoviesAndSeries()"
    @search-emit="getMoviesAndSeries()" />
  </header>
  <main @click="store.isActive = false" @scroll="scrollHeader">
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
      <div class="d-flex justify-content-center align-items-center" id="prev" @click="scrollSliderPopular(0, - 1710)">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div class="d-flex justify-content-center align-items-center" id="next" @click="scrollSliderPopular(0, + 1710)">
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
        :genere="movie.genre_ids"
        />
      </div>
      <div class="d-flex justify-content-center align-items-center" id="prev" @click="scrollSliderMovie(0, - 1710)">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div class="d-flex justify-content-center align-items-center" id="next" @click="scrollSliderMovie(0, + 1710)">
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
        :genere="serie.genre_ids"
        />
      </div>
      <div class="d-flex justify-content-center align-items-center" id="prev" @click="scrollSliderSeries(0, - 1710)">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div class="d-flex justify-content-center align-items-center" id="next" @click="scrollSliderSeries(0, + 1710)">
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
    scrollHeader(){
      console.log('ci sono')
      if(window.scrollY >= 100){
          this.store.scrolled = true
      }else if(window.scrollY < 100){
          this.store.scrolled = false
      }
            },
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
    // getGenre(){
    //   const movieGenreUrl = this.store.apiUrl + this.store.genreEndPoint.movie
    //   axios.get(movieGenreUrl + this.store.api_key)
    //     .then(function (response) {
    //       for(let i = 0; i < response.data.genres.length; i++){
    //         this.store.genreList.push(response.data.genres[i])
    //       }
    //       console.log(this.store.genreList)
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       // console.log(error);
    //     })
    // },
    getGenres() {
      const movieGenreUrl = this.store.apiUrl + this.store.genreEndPoint.movie;
      const serieGenreUrl = this.store.apiUrl + this.store.genreEndPoint.serie;
      const apikey = `?api_key=${this.store.params.api_key}`

      Promise.all([axios.get(movieGenreUrl + apikey), axios.get(serieGenreUrl + apikey)])
        .then((results) => {
          const result0 = results[0].data.genres;
          const result1 = results[1].data.genres;

          for (let i = 0; i < result0.length; i++) {
            this.store.genreList.push(result0[i]);
          }

          for (let x = 0; x < result1.length; x++) {
            this.store.genreList.push(result1[x]);
          }

          this.store.genreList = this.store.genreList.filter(
            (genre, index, arr) =>
              index === arr.findIndex((g) => g.id === genre.id || g.name === genre.name)
          );
          console.log(this.store.genreList)
        })
    }
  },
  created(){
    window.addEventListener('scroll', this.scrollHeader)
    this.getPopular()
    this.getMoviesAndSeries()
    this.getGenres()
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