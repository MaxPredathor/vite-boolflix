<template>
  <div>
    pippo
  </div>
</template>

<script>
import { store } from './assets/data/store.js'
import axios from 'axios'
  export default {
    name: 'App',
    data(){
    return{
      store,
    }
  },
  created(){
    const url = store.apiUrl + this.store.endPoint.movie
    axios.get(url, {params: this.store.params})
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  }
  }
  
</script>

<style lang="scss" scoped>

</style>