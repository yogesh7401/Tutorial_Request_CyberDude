<template>
    <div class="container" >
        <div>
            <h4 class="mt-4 font-weight-bold" style=""> {{ videos.title }}</h4>
            <div class="video-container ">
                <iframe :src="video_id" frameborder="0"  allowfullscreen></iframe>
            </div>  
            <p>
                {{ videos.description }}
            </p> 
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
     data() {
      return {
          videos: '',
          videoId: '',
          video_id: '',
          index: ''
        }
    },
    mounted() {
        this.index = this.$route.query.videoIndex
        this.$store.state.id = this.$route.params.id
        this.$store.dispatch("getVideos")
        this.videos = this.list.data.items[this.index].snippet
        this.videoId = this.videos.resourceId.videoId
        this.video_id = "https://www.youtube.com/embed/"+this.videoId+""
    },
    computed: mapState(['list']),
}
</script>

<style scoped>
.container {
    font-family: Verdana, Geneva, sans-serif
}
h4 {
    font-family: 'Nunito', sans-serif;
    font-size: 24px
}
.video-container {
    overflow: hidden;
    position: relative;
    width:70%;
    height: 70%;
    margin-top: 3%;
    margin-bottom: 3%;
}

.video-container::after {
    padding-top: 56.25%;
    display: block;
    content: '';
}

.video-container iframe {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100% !important;
}
@media only screen and (max-width: 1000px){
    .video-container {
        width:100%;
    }
}
@media only screen and (max-width: 768px){
    h4 {
        font-size: 20px
    }
}
</style>