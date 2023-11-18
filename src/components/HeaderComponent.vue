<template>
    <div class="wrapper sticky-top"  @click.self="store.isActive = false"
        :class="(store.scrolled ?  'gradient' : 'bg-*')">
        <ul class="d-flex justify-content-between align-items-center">
            <li>
                <a href="index.html">
                    <img src="/images/logo.png" alt="Logo">
                </a>
            </li>
            <li>Home</li>
            <li>Serie Tv</li>
            <li>Film</li>
            <li>Nuovi e Popolari</li>
            <li>La mia Lista</li>
            <li>Sfoglia per Lingua</li>
            <li>
                <select id="scrollbar" v-model="store.genreId" @change="$emit('filterEmit')">
                    <option value="">All</option>
                    <option v-for="genre in store.genreList" :value="genre.id">{{ genre.name }}</option>
                </select>
            </li>
        </ul>
        <div class="d-flex justify-content-between text-light">
            <i ref="icon" @click.stop="(store.isActive = !store.isActive)" 
                :class="(store.isActive ? 'd-none' : 'd-inline-block')" 
                class="fa-solid fa-magnifying-glass fs-5 text-light pt-2">
            </i>
            <input ref="input" :class="(store.isActive ? 'd-inline-block expand' : 'd-none')"
                class="form-control" type="text" placeholder="Cerca: Generi, Titoli, Persone"
                v-model="this.store.params.query" @keyup.enter="$emit('enterEmit'), (store.isActive = !store.isActive)">
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
  
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
    .w-0{
        width: 0px !important;
    }

    #scrollbar::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: $black_netflix;
    }

    #scrollbar::-webkit-scrollbar
    {
        width: 12px;
        background-color: $black_netflix;
    }

    #scrollbar::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #D62929;
    }

    select{
        background-color: $black_netflix;
        color: white;
        border: none;

        &:focus{
            border: none;
        }

        *{
            border: none;

        }
    }
    .expand{
        animation-name: expand;
        animation-duration: 0.4s;
    }
    .revert{
        animation-name: revert;
        animation-duration: 0.4s;
    }
    .gradient{
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(20,20,20,1) 58%, rgba(52,50,50,1) 100%);
    }
    .wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 100px;
        z-index: 100;
        margin: 0;

        ul{
            list-style: none;

            img{
                width: 40%;

            }

            li{
                max-width: 200px;
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

            i{
                cursor: pointer;
            }

            button{
                background-color: $red_netflix;

                &:hover{
                    background-color: #7f050c;
                    transform: scale(110%);
                    transition: all 0.2s ease;
                }
            }

            input{
                width: 250px;
                height: 30px;
                margin-top: 5px;
                padding-bottom: 10px;
                background-color: $black_netflix;
                border: 1px solid white;
                color: white;

                &::placeholder{
                    color: $grey_searchbar !important;
                    text-align: center;
                    line-height: 30px;
                }
            }
        }
    }
    @keyframes expand{
        0% {width: 0px;}
        100% {width: 250px;}
    }
    @keyframes revert{
        0% {width: 250px;}
        100% {width: 0px;}
    }

</style>