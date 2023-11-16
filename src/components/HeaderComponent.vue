<template>
    <div class="wrapper sticky-top">
        <ul class="d-flex justify-content-between align-items-center">
            <li><img src="/images/logo.png" alt="Logo"></li>
            <li>Home</li>
            <li>Serie Tv</li>
            <li>Film</li>
            <li>Nuovi e Popolari</li>
            <li>La mia Lista</li>
            <li>Sfoglia per Lingua</li>
        </ul>
        <div class="d-flex justify-content-between text-light">
            <i ref="icon" @click="expandAnimation()" class="fa-solid fa-magnifying-glass fs-5 text-light pt-2"></i>
            <input ref="input" class="form-control d-none" type="text" placeholder="Cerca: Generi, Titoli, Persone"
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
        },
        methods:{
            expandAnimation(){
                this.$refs.input.classList.remove('d-none')
                this.$refs.icon.classList.add('d-none')
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
    .w-0{
        width: 150px !important;
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
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(20,20,20,1) 58%, rgba(52,50,50,1) 100%);

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

            input{
                width: 250px;
                height: 30px;
                margin-top: 5px;
                padding-bottom: 10px;
                background-color: $black_netflix;
                border: 1px solid white;
                animation-name: expand;
                animation-duration: 0.4s;

                &::placeholder{
                    color: $grey_searchbar !important;
                    text-align: center;
                    line-height: 30px;
                }
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
        100% {width: 250px;}
    }

</style>