<template>
    <div class="home">
        <div class="container welcomePage"> 
            <div class="welcome_content">
                <div class="">
                    <div class="row">
                        <div class=" col-xl-6 col-lg-6 cols-12 d-inline content">
                            <small ><h1 class=" welcome mt-4 text-left font-weight-bold">{{$t('home.welcome')}}</h1></small>
                            <p class="text-left">{{$t('home.content')}}</p>
                            <div v-for="route in gettersusers" :key="route.id">
                            <div class="request_btn text-left"  v-if="route.isRequested == '0'" >
                                <router-link to="/request" class=" mt-4 " style="color: white">
                                    <button type="button" class="btn btn-success"><b>{{$t('home.create')}}</b></button>
                                </router-link>
                            </div>
                            <div class="request_btn text-left"  v-else>
                                <router-link to="/requests"  class=" mt-4 " style="color: white">
                                     <button type="button" class="btn btn-success"><b>{{$t('home.view')}}</b></button>
                                </router-link>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-xl-6 cols-12">
                            <img class="displayImage" :src=Home alt="home" > 
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        <Info class="bg-light info"></Info>
        <Social class="social"></Social>
        <Footer class="footer"></Footer>
    </div>
</template>

<script>
import Home from '../../assets/image/displayImage.svg'
import Info from '../info'
import Social from '../social'
import Footer from '../footer'

export default {
    components: {Info, Social, Footer},
    metaInfo: {
      title: 'Home',
      titleTemplate: '%s - CyberdudeNetworks',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
    beforeCreate: function() {
        document.body.className = 'home';
    },
    data() {
        return {
            uname: '',
            route: '',
            Home: Home,

        }
    },
    computed: {
        gettersusers() {
        return this.$store.getters.allUsers
        },
        users() {
        return this.$store.state.users
        }
    },
    mounted() {
        this.$store.dispatch("getUsers");
    },
    methods: {
        caps(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

body.home {
    background: #14213d;
}
body.other {
    background: white;
}
#nprogress .bar {
    background: tomato;
}
/* .container {
    font-family: 'Nunito', sans-serif;
    width: 100%;
    height: 100%;
    overflow-y:hidden;
} */
.content {
    margin-top: 5%;
}
.request_btn {
    margin-top: 10px;
}
.welcomePage {
    margin-top: 4%;
    max-height: 900px;
    margin-bottom: 6%;
}
.create-request {
    background-color:#296f67;
    color: white;
    padding: 8px;
    letter-spacing: 0.3px;
    border:1px solid #2a9d8f;
    border-radius: 10px;
    font-size: 15px;
}
.welcome_content {
    color: white;
    font-size: 18px;
    text-align: left
}
.image {
    margin-right: 30px;
}
.displayImage {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}
.social {
    background: #557a95;
}
@media only screen and (max-width: 990px) {
    .image {
        height: 250px
    }
}
@media only screen and (max-width: 850px) {
    .image {
        height: 300px;
    }
}
@media only screen and (max-width: 768px) {
    .image {
        display: none;
        z-index: 1000px;
    }
    .content {
        margin-top: 20px;
    }
    .request_btn {
    margin-top: 10px;
}
}
@media only screen and (max-width: 420px) {
    h1{
        font-size:22px;
    }
    
    .create-button {
        margin-top: 40px;

    }
    .welcome_content {
        height: 50%;
        font-size: 16px;
    }
    .content {
        margin-top: 10px;
    }
    .home {
        background-position: left bottom;
    }
}
</style>