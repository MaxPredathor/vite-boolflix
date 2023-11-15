<template>
    <div class="wrapper">
        <ul class="d-flex justify-content-between align-items-center">
            <li><img src="/images/logo.png" alt="Logo"></li>
            <li>Home</li>
            <li>Serie Tv</li>
            <li>Film</li>
            <li>Nuovi e Popolari</li>
            <li>La mia Lista</li>
            <li>Sfoglia per Lingua</li>
        </ul>
        <div class="d-flex justify-content-between">
            <input class="form-control" type="text" placeholder="Cerca Generi, Titoli etc"
            v-model="this.store.params.query" @keyup.enter="$emit('enterEmit')">
            <button class="btn btn-danger mx-2" @click="$emit('searchEmit')">Cerca</button>
        </div>
    </div>
</template>

<script>
import { store } from '../assets/data/store.js'
    export default {
        name: 'HeaderComponent',
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
    .wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(20,20,20,1) 58%, rgba(52,50,50,1) 100%);

        ul{
            list-style: none;

            img{
                width: 70%;

            }

            li{
                font-size: 1.1em;
                font-weight: 400;
                color: white;
                padding: 0 10px;

                &:hover{
                    color: $grey_searchbar;
                }
            }

            input{
                background-color: $black_netflix;
                border: 1px solid $red_netflix;
                color: $grey_searchbar;
            }

            input:focus, textarea:focus {
                outline: none;
                outline-color: none;
                outline-style: none;
            }
        }
    }

</style>