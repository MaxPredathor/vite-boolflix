<template>
    <div class="col-12 col-md-4 col-lg-2 mb-4 my-div" @mouseover="store.castId = id" @mouseleave="store.castShow = false">
        <div class="flip">
            <div class="img-div">
                <img :src="img + imgPath" :alt="title" v-if="imgPath">
                <img src="/images/netflix-vertical.png" alt="PlaceHolder" v-else>
            </div>
            <div  id="scrollbar" class="hover-div">
                <p><span>Titolo:</span>{{ title }}</p>
                <p><span>Titolo Originale:</span>{{ titoloOriginale }}</p>
                <div class="flags">
                    <p v-if="language === 'it'"><span>Lingua:</span> <img src="/images/flag-for-italy_.png" alt="italy"></p>
                    <p v-else-if="language === 'en'"><span>Lingua:</span> <img src="/images/flag-for-united-kingdom_.png" alt="united-kingdom"></p>
                    <p v-else-if="language === 'fr'"><span>Lingua:</span> <img src="/images/flag-for-flag-france_.png" alt="france"></p>
                    <p v-else-if="language === 'pl'"><span>Lingua:</span> <img src="/images/flag-for-poland_.png" alt="poland"></p>
                    <p v-else-if="language === 'es'"><span>Lingua:</span> <img src="/images/flag-for-spain_.png" alt="spain"></p>
                    <p v-else-if="language === 'cn' || language === 'zh'"><span>Lingua:</span> <img src="/images/flag-for-china_.png" alt="china"></p>
                    <p v-else-if="language === 'de'"><span>Lingua:</span> <img src="/images/flag-for-germany_.png" alt="germany"></p>
                    <p v-else-if="language === 'ja'"><span>Lingua:</span> <img src="/images/flag-for-japan_.png" alt="japan"></p>
                    <p v-else-if="language === 'cs'"><span>Lingua:</span> <img src="/images/flag-for-czechia_.png" alt="czechia"></p>
                    <p v-else-if="language === 'da'"><span>Lingua:</span> <img src="/images/flag-for-denmark_.png" alt="denmark"></p>
                    <p v-else-if="language === 'ko'"><span>Lingua:</span> <img src="/images/flag-for-south-korea_.png" alt="south-korea"></p>
                    <p v-else-if="language === 'ro'"><span>Lingua:</span> <img src="/images/flag-for-romania_.png" alt="romania"></p>
                    <p v-else-if="language === 'hi' || language === 'kn'"><span>Lingua:</span> <img src="/images/flag-india_.png" alt="india"></p>
                    <p v-else-if="language === 'pt'"><span>Lingua:</span> <img src="/images/flag-for-portugal_.png" alt="portugal"></p>
                    <p v-else-if="language === 'ru'"><span>Lingua:</span> <img src="/images/flag-for-russia_.png" alt="russia"></p>
                    <p v-else-if="language === 'fi'"><span>Lingua:</span> <img src="/images/flag-for-finland_.png" alt="finland"></p>
                    <p v-else-if="language === 'no'"><span>Lingua:</span> <img src="/images/flag-for-norway_.png" alt="norway"></p>
                    <p v-else-if="language === 'tl'"><span>Lingua:</span> <img src="/images/flag-for-philippnes_.png" alt="philippnes"></p>
                    <p v-else-if="language === 'sr'"><span>Lingua:</span> <img src="/images/flag-for-serbia_.png" alt="serbia"></p>
                    <p v-else-if="language === 'sv'"><span>Lingua:</span> <img src="/images/flag-for-sweden_.png" alt="swedish"></p>
                    <p v-else-if="language === 'bg'"><span>Lingua:</span> <img src="/images/flag-for-bulgaria_.png" alt="bulgaria"></p>
                    <p v-else-if="language === 'ar'"><span>Lingua:</span> <img src="/images/flag-for-saudi-arabia_.png" alt="saudi-arabia"></p>
                    <p v-else-if="language === 'sl'"><span>Lingua:</span> <img src="/images/flag-for-slovenia_.png" alt="slovenia"></p>
                    <p v-else><span>Lingua:</span> {{ language }}</p>
                </div>
                <p>
                    <span>Voto: </span> 
                    <i :class="{'fa-solid fa-star-half-stroke': voto > 0 && voto < 1,'fa-solid fa-star': voto > 0, 'fa-regular fa-star': voto === 0}"></i>
                    <i :class="{'fa-solid fa-star-half-stroke': voto > 1 && voto < 2,'fa-solid fa-star': voto > 1, 'fa-regular fa-star': voto < 2}"></i>
                    <i :class="{'fa-solid fa-star-half-stroke': voto > 2 && voto < 3,'fa-solid fa-star': voto > 2, 'fa-regular fa-star': voto < 3}"></i>
                    <i :class="{'fa-solid fa-star-half-stroke': voto > 3 && voto < 4,'fa-solid fa-star': voto > 3, 'fa-regular fa-star': voto < 4}"></i>
                    <i :class="{'fa-solid fa-star-half-stroke': voto > 4 && voto < 5,'fa-solid fa-star': voto > 4, 'fa-regular fa-star': voto < 5}"></i>
                </p>
                <div>
                    <button @click="store.castShow = !store.castShow, givemeCast()" v-show="!store.castShow" class="btn red-netflix">Show Cast</button>
                    <p v-show="store.castShow">
                        <span>Cast: 
                            <span id="generi" class=" fw-light">{{ castArray[0] + ' -' }}</span>
                            <span id="generi" class=" fw-light">{{ castArray[1] + ' -' }}</span>
                            <span id="generi" class=" fw-light">{{ castArray[2] + ' -' }}</span>
                            <span id="generi" class=" fw-light">{{ castArray[3] + ' -' }}</span>
                            <span id="generi" class=" fw-light">{{ castArray[4] }}</span>
                        </span>
                    </p>
                </div>
                <p>
                    <span>Genere:</span>
                    <span id="generi" class=" fw-light" v-for="genre in genere">{{ getGenreName(genre) }}</span>
                </p>
                <p><span>Sinossi:</span>{{ desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../assets/data/store.js'
import axios from 'axios'
    export default {
        name: 'CardComponent',
        data(){
            return{
                store,
                castArray: [],
            }
        },
        props:{
            img:{
                type: String,
                required: true,
                default: "/images/netflix-vertical.png"
            },
            imgPath:{
                type: String,
                required: true,
            },
            title:{
                type: String,
                required: true,
                default: "No Title Found"
            },
            titoloOriginale:{
                type: String,
                required: false,
                default: "No Original Title Found"
            },
            language:{
                type: String,
                required: false,
                default: "No Language Found"
            },
            voto:{
                type:  [String, Number],
                required: true,
                default: "n/d"
            },
            desc:{
                type: String,
                required: true,
                default: "No overview Found"
            },
            adult:{
                type: Boolean,
                required: false,
                default: null
            },
            genere:{
                type: Array,
                required: false,
            },
            id:{
                type: Number,
                required: true,
            },
            tipo:{ 
                type: String,
                required: true
            }
        },
        methods:{
            getGenreName(id) {
                const finder = this.store.genreList.find((el) => el.id == id)
                if (finder) {
                    return finder.name;
                }
            },
            givemeCast(){
                const castUrl = this.store.apiUrl + this.tipo + this.id + `/credits` + store.api_key
                // axios.get(castUrl)
                //     .then(function (response) {
                //         console.log(response);
                //         store.castList = response.data
                //         console.log(store.castList)
                //     })
                //     .catch(function (error) {
                //         console.log(error);
                //     })
                //     .finally(function () {
                //     });
                axios.get(castUrl).then((results) => {
                    this.castArray = []
                    for (let i = 0; i < 5; i++) {
                        if (results.data.cast[i]) {
                            this.castArray.push(results.data.cast[i].name)
                        }
                    } 
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;    

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

    .red-netflix{
        background-color: $red_netflix;
        color: white;
        padding: 5px 10px;
        margin-bottom: 10px;

        &:hover{
            background-color: #7f050c;
            transform: scale(110%);
            transition: all 0.2s ease;
        }
    }

    .my-div{
        height: 400px;
        perspective: 1000px;

        &:hover{
            
            .flip{
                transform: rotateY(180deg);
            }
            
        }
        .flip{
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.8s;
            transform-style: preserve-3d;


            .img-div, .hover-div {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
            }
            .img-div{
                width: 100%;
                height: 100%;

                    img{
                        width: 100%;
                        height: 100%;
                    }
            }
            .hover-div{
                width: 100%;
                height: 100%;
                background-color: $black_netflix;
                border: 1px solid white;
                color: white;
                transform: rotateY(3.142rad);
                overflow-y: auto;

                span{
                    color: $red_netflix;
                    display: inline-block;
                    font-weight: bold;
                    padding: 0 5px 0 0;
                    text-wrap: balance;
                    word-wrap: break-word;
                }
                #generi{
                    color: white;
                }
                
                i{
                    color: $yellow_star;
                }
            }
        .flags{

            p{

                img{
                    width: 24px
                }
            }
        }
        .voto{

            i{
                color: #b8bb07;
            }
        }

        }
        

    }

</style>