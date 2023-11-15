<template>
    <div class="col-12 col-md-4 col-lg-3 my-div">
        <h4>{{title}}</h4>
        <h6>{{ titoloOriginale }}</h6>
        <img :src="img + imgPath" :alt="title" v-if="imgPath">
        <img src="/images/netflix-vertical.png" alt="PlaceHolder" v-else>
        <div class="flags">
            <p v-if="language === 'it'">Lingua: <img src="/images/flag-for-italy_.png" alt=""></p>
            <p v-else-if="language === 'en'">Lingua: <img src="/images/flag-for-united-kingdom_.png" alt=""></p>
            <p v-else-if="language === 'fr'">Lingua: <img src="/images/flag-for-flag-france_.png" alt=""></p>
            <p v-else-if="language === 'pl'">Lingua: <img src="/images/flag-for-poland_.png" alt=""></p>
            <p v-else-if="language === 'es'">Lingua: <img src="/images/flag-for-spain_.png" alt=""></p>
            <p v-else-if="language === 'cn'">Lingua: <img src="/images/flag-for-china_.png" alt=""></p>
            <p v-else-if="language === 'zh'">Lingua: <img src="/images/flag-for-china_.png" alt=""></p>
            <p v-else-if="language === 'de'">Lingua: <img src="/images/flag-for-germany_.png" alt=""></p>
            <p v-else-if="language === 'ja'">Lingua: <img src="/images/flag-for-japan_.png" alt=""></p>
            <p v-else-if="language === 'cs'">Lingua: <img src="/images/flag-for-czechia_.png" alt=""></p>
            <p v-else-if="language === 'da'">Lingua: <img src="/images/flag-for-denmark_.png" alt=""></p>
            <p v-else-if="language === 'ko'">Lingua: <img src="/images/flag-for-south-korea_.png" alt=""></p>
            <p v-else-if="language === 'ro'">Lingua: <img src="/images/flag-for-romania_.png" alt=""></p>
            <p v-else-if="language === 'hi'">Lingua: <img src="/images/flag-india_.png" alt=""></p>
            <p v-else-if="language === 'kn'">Lingua: <img src="/images/flag-india_.png" alt=""></p>
            <p v-else-if="language === 'pt'">Lingua: <img src="/images/flag-for-portugal_.png" alt=""></p>
            <p v-else>Lingua: {{ language }}</p>
        </div>
        <div class="voto">
            <p>
                <i :class="{'fa-solid fa-star-half-stroke': voto > 0 && voto < 1,'fa-solid fa-star': voto > 0, 'fa-regular fa-star': voto === 0}"></i>
                <i :class="{'fa-solid fa-star-half-stroke': voto > 1 && voto < 2,'fa-solid fa-star': voto > 1, 'fa-regular fa-star': voto < 2}"></i>
                <i :class="{'fa-solid fa-star-half-stroke': voto > 2 && voto < 3,'fa-solid fa-star': voto > 2, 'fa-regular fa-star': voto < 3}"></i>
                <i :class="{'fa-solid fa-star-half-stroke': voto > 3 && voto < 4,'fa-solid fa-star': voto > 3, 'fa-regular fa-star': voto < 4}"></i>
                <i :class="{'fa-solid fa-star-half-stroke': voto > 4 && voto < 5,'fa-solid fa-star': voto > 4, 'fa-regular fa-star': voto < 5}"></i>
            </p>
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    .my-div{

        &:hover{
            transform: rotateY(3.142rad);
            transition: all 0.4s linear;
        }

        img{
            width: 100%;
            height: 70%;
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