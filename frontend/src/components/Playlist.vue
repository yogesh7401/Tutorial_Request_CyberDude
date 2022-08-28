<template>
    <div class="playlist">
        <div class="banner h-100 pb-5">
            <div class="color w-100">
                <div class="container-md py-4 px-2">
                    <div class="row bannerContent">
                        <div class="col-5 col-lg-3">         
                            <img :src="Logo" height="250" class="bannerImage img-fluid " alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- desc -->
        <div class="container mt-4">
            <h1 class="text-dark m-1 font-weight-bold">
               Bootstrap
            </h1>
            <p class="desc m-1">
                Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.Responsive design makes it possible for a web page or app to detect the visitor’s screen size and orientation and automatically adapt the display accordingly; the mobile first approach assumes that smartphones, tablets and task-specific Mobile apps are employees' primary tools for getting work done and addresses the requirements of those technologies in design.
            </p>
        </div>
        <!-- used for  -->
        <div class="container mt-5">
            <h1 class="text-dark font-weight-bold m-1">
                Used for
            </h1>
            <p class="desc m-1" style="text-indent: 0px">
                <ul>
                    <li>Bootstrap's responsive CSS adjusts to phones, tablets, and desktops</li>
                    <li>Mobile-first styles are part of the framework</li>
                    <li>The speed of development will increase</li>
                </ul>
            </p>
        </div>
        <!-- TOC  -->
         <div class="container my-5"> 
            <h1 class="text-dark font-weight-bold m-1">Table of content</h1>
            <table class="table mt-2 w-80 table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col" class="text-lg-left text-center">Contents</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in videos" :key="item.id">
                <th scope="row" v-if="item.snippet.title != 'Private video'">{{ index+1 }}</th>
                <td v-if="item.snippet.title != 'Private video'"> <a :href="$router.resolve({name: 'video', params: {id : $route.params.id },query: { videoIndex: index }}).href" class="text-primary">{{ item.snippet.title.split("|")[0] }} </a> </td>
                </tr>
            </tbody>
            </table>
        </div> -->
    </div>
</template>

<style scoped>
.playlist {
    font-family: 'Nunito', sans-serif;
}
a {
    text-decoration: none;
}
.color {
    height: 240px;
    background-color: #00b7ff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='540' height='450' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E");
}
.bannerContent {
    margin-top: 50px;
}
img {
    height: 250px; /* height of container */
}
.desc {
    text-align: justify;
    font-size: 22px;
    text-indent: 120px;
}
@media only screen and (max-width: 600px){
    .container {
        padding-right: 10px !important;
        padding-left: 10px !important;
        width: 100%;
    }
    table {
        padding-left: 15px !important;
        padding-right: 15px !important;
    }
    h1 {
        font-size: 32px
    }
    .desc {
        font-size: 16px;
        text-indent: 40px;
    }
    img {
        height: 160px;
    }
    .color {
        height: 150px;
    }
    .bannerContent {
        margin-top: 20px;
    }
}
@media only screen and (max-width: 400px){
    .color {
        height: 120px;
    }
    .bannerContent {
        margin-top: 40px;
    }
    img {
        height : 130px
    }
    .bannerImage {
        margin-top: -20px;
    }
    h1 {
        font-size: 28px
    }
    .desc {
        font-size: 13px;
        text-indent: 40px;
    }
}
</style>

<script>
import Bootstrap from '../assets/image/Bootstrap.svg'
import CSS from '../assets/image/CSS.svg'
import HTML from '../assets/image/HTML.svg'
import JavaScript from '../assets/image/JavaScript.svg'

import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    
    beforeCreate: function() {
        document.body.className = 'other';
    },
     data() {
      return {
          videos: '',
          url: [],
          id: '',
          Logo: '',
          total_video: ''
        }
    },
    methods: {
            getvideoList() {
               this.videos = this.$store.getters.allVideos.data.items 
            },
            getDetails() {                
               this.total_video = this.$store.getters.Details.data.items 
            }
        },
    watch: {
        '$store.getters.allVideos'() {
            this.getvideoList();
        },
        '$store.getters.Details'() {
            this.getDetails();
        }
    },
    mounted() {
        console.log(process.env)
        if(this.$route.params.id == 'PL73Obo20O_7jN--xo4UFw-DO1OM5vQEMJ'){
            this.Logo = Bootstrap
        }
        else if(this.$route.params.id == 'PL73Obo20O_7gGv4cLEOoqTF8_m8rPKyQh'){
            this.Logo = CSS
        }
        else if(this.$route.params.id == 'PL73Obo20O_7gcXt0cfQA14jey8zavtKAq'){
            this.Logo = HTML
        }
        else if(this.$route.params.id == 'PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa'){
            this.Logo = JavaScript
        }
        
        this.$store.commit('ChangeId', this.$route.params.id )
        this.$store.dispatch("getVideos", this.$route.params.id)
        this.$store.dispatch("getDetails", this.$route.params.id)
    },
} 
</script>