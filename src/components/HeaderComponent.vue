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
            <i @click="" class="fa-solid fa-magnifying-glass fs-4 text-light">
                <input ref="input" class="form-control d-none" type="text" placeholder="Cerca Generi, Titoli etc"
                v-model="this.store.params.query" @keyup.enter="$emit('enterEmit')">
            </i>
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
        },
        methods:{
            expandAnimation(){
                this.$refs.input.classList.remove('d-none')
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
                width: 15%;

            }

            li{
                font-size: 1.1em;
                font-weight: 400;
                color: white;
                padding: 0 10px;
                cursor: pointer;


                &:hover{
                    color: $grey_searchbar;
                }
            }

        
        }
        div{

            input{
                width: 0;
                background-color: $black_netflix;
                border: 1px solid $red_netflix;
                color: $grey_searchbar;
                animation-name: expand;
            }

            input:focus, textarea:focus {
                outline: none;
                outline-color: none;
                outline-style: none;
            }
        }
    }
    @keyframes expand{
        0% {width: 0px;}
        25% {width: 25px;}
        50% {width: 50px;}
        75% {width: 75px;}
        100% {width: 100px;}
    }

</style>