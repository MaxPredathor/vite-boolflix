<template>
    <div class="col-12 col-md-4 col-lg-3 mb-4 my-div">
        <div class="img-div">
            <img :src="img + imgPath" :alt="title" v-if="imgPath">
            <img src="/images/netflix-vertical.png" alt="PlaceHolder" v-else>
        </div>
        <div class="d-none hover-div">
            <p><span>Titolo: </span>{{ title }}</p>
            <p><span>Titolo Originale: </span>{{ titoloOriginale }}</p>
            <div class="flags">
                <p v-if="language === 'it'"><span>Lingua:</span> <img src="/images/flag-for-italy_.png" alt=""></p>
                <p v-else-if="language === 'en'"><span>Lingua:</span> <img src="/images/flag-for-united-kingdom_.png" alt=""></p>
                <p v-else-if="language === 'fr'"><span>Lingua:</span> <img src="/images/flag-for-flag-france_.png" alt=""></p>
                <p v-else-if="language === 'pl'"><span>Lingua:</span> <img src="/images/flag-for-poland_.png" alt=""></p>
                <p v-else-if="language === 'es'"><span>Lingua:</span> <img src="/images/flag-for-spain_.png" alt=""></p>
                <p v-else-if="language === 'cn'"><span>Lingua:</span> <img src="/images/flag-for-china_.png" alt=""></p>
                <p v-else-if="language === 'zh'"><span>Lingua:</span> <img src="/images/flag-for-china_.png" alt=""></p>
                <p v-else-if="language === 'de'"><span>Lingua:</span> <img src="/images/flag-for-germany_.png" alt=""></p>
                <p v-else-if="language === 'ja'"><span>Lingua:</span> <img src="/images/flag-for-japan_.png" alt=""></p>
                <p v-else-if="language === 'cs'"><span>Lingua:</span> <img src="/images/flag-for-czechia_.png" alt=""></p>
                <p v-else-if="language === 'da'"><span>Lingua:</span> <img src="/images/flag-for-denmark_.png" alt=""></p>
                <p v-else-if="language === 'ko'"><span>Lingua:</span> <img src="/images/flag-for-south-korea_.png" alt=""></p>
                <p v-else-if="language === 'ro'"><span>Lingua:</span> <img src="/images/flag-for-romania_.png" alt=""></p>
                <p v-else-if="language === 'hi'"><span>Lingua:</span> <img src="/images/flag-india_.png" alt=""></p>
                <p v-else-if="language === 'kn'"><span>Lingua:</span> <img src="/images/flag-india_.png" alt=""></p>
                <p v-else-if="language === 'pt'"><span>Lingua:</span> <img src="/images/flag-for-portugal_.png" alt=""></p>
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
            <p><span>Sinossi: </span>{{ desc }}</p>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
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
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
    .my-div{
        height: 500px;

        &:hover{
            transform: rotateY(3.142rad);
            transition: all 0.4s linear;
        }
        &:hover .img-div{
            display: none;
        }
        &:hover .hover-div{
            display: block !important;
        }

        .img-div{
            width: 100%;
            height: 100%;
            position: relative;

            img{
            width: 100%;
            height: 100%;
        }
        }
        .hover-div{
            width: 100%;
            height: 100%;
            background-color: black;
            border: 1px solid white;
            color: white;
            transform: rotateY(3.142rad);
            overflow-y: auto;

            span{
                font-weight: bold;
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

</style>