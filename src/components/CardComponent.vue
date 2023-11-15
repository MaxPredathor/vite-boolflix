<template>
    <div class="col-12 col-md-4 col-lg-3 my-div">
        <h4>{{title}}</h4>
        <h6>{{ titoloOriginale }}</h6>
        <img :src="img + imgPath" :alt="title" v-if="imgPath">
        <img src="/images/netflix-vertical.png" alt="PlaceHolder" v-else>
        <p>Lingua: {{ language }}</p>
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

    }

</style>