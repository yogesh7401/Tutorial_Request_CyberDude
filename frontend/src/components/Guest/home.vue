<template>
    <div class="home">
        <div class="container welcomePage"> 
            <div class="welcome_content">
                    <div class="row">
                        <div class=" col-xl-6 col-lg-6 cols-12 d-inline content">
                            <small ><h1 class=" welcome mt-4 text-lg-left text-md-center font-weight-bold">{{ $t('home.intro') }} <code v-if="$i18n.locale == 'en'" style="color : tomato">தமிழ்</code> </h1></small>
                            <!-- <b-form-rating id="rating-md-no-border" v-model="value" v-on:click="rating(value)" no-border></b-form-rating> -->
                            <p class="text-lg-left text-md-center desc">{{ $t('home.desc') }}</p>
                            <div class="request_btn text-lg-left text-md-center" >
                                <router-link to="/user" class=" mt-4 " style="color: white">
                                    <button type="button" class="btn btn-lg btn-success"><img height="35" :src=Learn alt="learn"><b class="container text-center">Start Learning</b></button>
                                </router-link>
                            </div>
                        </div>
                        <div class="col-lg-6 col-xl-6 cols-12">
                            <img class="displayImage" width="650" :src=Home alt="home"> 
                        </div>
                    </div>
            </div>  
        </div>
        <Info class="bg-light"></Info>
        <Social class="social"></Social>
        <Footer class="footer"></Footer>
    </div>
</template>

<style scoped>
body.home {
    background: #14213d;
}
body.other {
    background: white;
}
.desc{
    color:rgba(245, 245, 245, 0.658);
}
.content {
    margin-top: 3%;
}
.social {
    background: #557a95;
}
.footer {
    background: #1d3557;
}
@media only screen and (max-width: 400px) {
    p {
        font-size: 14px
    }
    h1 {
        font-size: 21px
    }
}
</style>
<script>
import Home from '../../assets/image/displayImage.svg'
import Learn from '../../assets/image/learn.svg'
import Info from '../info'
import Social from '../social'
import Footer from '../footer'

export default {
    
    beforeCreate: function() {
        document.body.className = 'home';
    },
    components: {Info, Footer, Social},
    metaInfo: {
      title: 'Home',
      titleTemplate: '%s - CyberdudeNetworks',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
    data() {
        return {
            Home: Home,
            Learn: Learn,
            value: 0
        }
    },
    methods: {
        rating(value) {
            this.$store.commit('increment',{value})
            console.log(value)
        }
    }
}
</script>