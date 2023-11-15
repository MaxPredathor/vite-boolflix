<template>
    <div class="col-12 col-md-4 col-lg-3 my-div">
        <h4>{{title}}</h4>
        <h6>{{ titoloOriginale }}</h6>
        <img :src="img + imgPath" :alt="title" v-if="imgPath">
        <img src="/images/netflix-vertical.png" alt="PlaceHolder" v-else>
        <p v-if="language === 'it'">Lingua: <img src="/images/flag-for-italy_.png" alt=""></p>
        <p v-else-if="language === 'en'">Lingua: <img src="/images/flag-for-united-kingdom_.png" alt=""></p>
        <p v-else-if="language === 'fr'">Lingua: <img src="/images/flag-for-flag-france_.png" alt=""></p>
        <p v-else-if="language === 'pl'">Lingua: <img src="/images/flag-for-poland_.png" alt=""></p>
        <p v-else-if="language === 'es'">Lingua: <img src="/images/flag-for-spain_.png" alt=""></p>
        <p v-else-if="language === 'cn'">Lingua: <img src="/images/flag-for-china_.png" alt=""></p>
        <p v-else-if="language === 'de'">Lingua: <img src="/images/flag-for-germany_.png" alt=""></p>
        <p v-else-if="language === 'ja'">Lingua: <img src="/images/flag-for-japan_.png" alt=""></p>
        <p v-else-if="language === 'cs'">Lingua: <img src="/images/flag-for-czechia_.png" alt=""></p>
        <p v-else-if="language === 'da'">Lingua: <img src="/images/flag-for-denmark_.png" alt=""></p>
        <p v-else-if="language === 'ko'">Lingua: <img src="/images/flag-for-south-korea_.png" alt=""></p>
        <p v-else-if="language === 'ro'">Lingua: <img src="/images/flag-for-romania_.png" alt=""></p>
        <p v-else>Lingua: {{ language }}</p>
        <p>Voto: {{ voto }}</p>
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
        height: 75%;
        }
        p{

            img{
                width: 24px
            }
        }

    }

</style>