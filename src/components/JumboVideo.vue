<template>
    <div class="position-relative">
        <iframe :src="store.videoYoutubeUrl" frameborder="0"></iframe>
        <div v-show="store.videoKey || store.backUpVidKey" class="cover"></div>
        <div v-show="store.videoKey || store.backUpVidKey" class="cover3"></div>
    </div>
</template>

<script>
import { store } from '../assets/data/store.js'
    export default {
        name: 'JumboVideo',
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
    div{
        width: 100%;
        height: 1000px;

            .cover{
                background-color: black;
                width: 100%;
                height: 100px;
                z-index: 500;
                position: absolute;
                top: 0;
                left: 0;
            }

            .cover3{
                background-color: black;
                width: 100%;
                height: 100px;
                z-index: 500;
                position: absolute;
                bottom: 0;
                right: 0;
            }

        iframe{
            width: 100%;
            height: 100%;
        }
    }

</style>