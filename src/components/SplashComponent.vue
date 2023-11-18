<template>
    <div class="overflow-hidden">
        <div class="wrapper" v-show="store.login">
            <h1 class="text-light text-center">Chi vuole Guardare Netflix</h1>
            <div id="img-container" @click="clickEvent">
                <img src="/images/profile-pic.png" alt="Profile Pic">
            </div>
        </div>
        <video v-show="!store.login" ref="myVideo">
            <source src="/images/logo-video.mp4" type="video/mp4">
        </video>
    </div>
</template>

<script>
import { store } from '../assets/data/store.js'
    export default {
        name: 'SplashComponent',
        data(){
            return{
                store,
            }
        },
        mounted() {
        },
        methods:{
            clickEvent(){
                this.store.login = false
                this.videoPlay()
            },
            videoPlay(){
                this.$refs.myVideo.play()
                setTimeout(()=>{
                    this.store.splashTime = false
                }, 4000)
            }

        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

    .wrapper{
        background-color: $black_netflix;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        h1{
                font-size: 50px;
                margin-bottom: 100px;
            }

        #img-container{
            width: 200px;
            height: 200px;

            img{
                width: 100%;
                height: 100%;
                border-radius: 1em;
                overflow: hidden;
                cursor: pointer;

                &:hover{
                    transform: scale(1.2);
                }
            }
        }
    }

    div{
        width: 100%;
        height: 100vh;

        video{
            width: 100%;
            height: 100vh;
            object-fit: cover;
        }
    }

</style>