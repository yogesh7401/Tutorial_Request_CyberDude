<template>
    <div class="body " id="body">
        <div id="nav">
            <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light py-md-3 py-1">
                <a class="navbar-brand my-2" href="https://www.youtube.com/user/CyberDudeNetworks">
                    <img class="logo" src="https://www.cyberdudenetworks.com/assets/img/cyberdude-logo.svg" alt="logo" height="45px" >
                </a>
                <i data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" class="fas fa-bars fa-2x my-2 text-light toggle" ></i>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav ml-auto mt-2 ">
                        <router-link to="/home" tag="li" @click.native="isActive = 0" :title="$t('nav.home')"  class="link nav-link  nav-item mr-2">
                            <small class="menu ml-4"  :class="{active : isActive == 0 }">{{ $t('nav.home') }}</small>
                        </router-link>
                        <div v-for="route in gettersusers" :key="route.email">
                            <router-link to="/request" tag="li" @click.native="isActive = 1" :title="$t('nav.request')" v-if="route.isRequested == '0'"  class="link nav-link  nav-item  mr-2">
                            <small class="menu ml-4" :class="{active : isActive == 1 }">{{ $t('nav.request') }}</small>
                            </router-link>
                        <router-link  to="/requests" tag="li" v-on:click.native="isActive = 1" :title="$t('nav.request')" v-else  class="link nav-link  nav-item  mr-2">
                            <small class="menu ml-4" :class="{active : isActive == 1 }">{{ $t('nav.request') }}</small>
                        </router-link>
                        </div>
                        <li class="nav-item nav-link text-light dropdown link mr-2">
                            <small class="nav-item dropdown-toggl menu underline ml-4"    :class="{active : isActive == 3 }" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true">
                                {{ $t('nav.youtube') }}  
                            </small>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a :href="$router.resolve({name: 'playlist', params: {'id' : 'PL73Obo20O_7jN--xo4UFw-DO1OM5vQEMJ'}}).href"  
                                    class="link dropdown-item" >
                                    <li class="text-dark">
                                        <i class="fab fa-bootstrap mr-3"></i>
                                        <small>
                                            Bootstrap
                                        </small>
                                    </li>
                                </a>
                                <a :href="$router.resolve({name: 'playlist', params: {id : 'PL73Obo20O_7gGv4cLEOoqTF8_m8rPKyQh'}}).href"  
                                    class="link dropdown-item" >
                                    <li class="text-dark">
                                        <i class="fab fa-css3-alt mr-3"></i>
                                        <small> 
                                            CSS 
                                        </small>
                                    </li>
                                </a>
                                <a :href="$router.resolve({name: 'playlist', 
                                            params: {id : 'PL73Obo20O_7gcXt0cfQA14jey8zavtKAq'}}).href"  
                                            class="link dropdown-item" >
                                <li class="text-dark">
                                    <i class="fab fa-html5 mr-3"></i>
                                    <small>
                                        HTML
                                    </small>
                                </li>
                                </a>
                                <a :href="$router.resolve({name: 'playlist', 
                                            params: {id : 'PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa'}}).href"  
                                            class="link dropdown-item" >
                                <li class="text-dark">
                                    <i class="fab fa-js-square mr-3"></i>
                                    <small>
                                        JavaScript 
                                    </small>
                                </li>
                                </a>
                                
                            </div>
                        </li> 
                       <li class="nav-item nav-link text-light dropdown link mr-2" v-if="$i18n.locale == 'en'">
                            <small class="nav-item dropdown-toggl menu ml-4" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true">
                                English  
                            </small>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a  v-on:click="language('tn')" class="link dropdown-item" >
                                    <li class="text-dark">
                                        <small class="mr-2 d-inline "> 
                                            தமிழ் 
                                        </small>
                                    </li>
                                </a>
                            </div>
                        </li>
                        <li class="nav-item nav-link text-light dropdown link mr-2" v-else>
                            <small class="nav-item dropdown-toggl menu ml-4" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true">
                                தமிழ்  
                            </small>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a  v-on:click="language('en')" class="link dropdown-item" >
                                    <li class="text-dark">
                                        <small class="mr-2 "> 
                                             English
                                        </small>
                                    </li>
                                </a>
                            </div>
                        </li>
                        <a tag="li"  class="link nav-link signout  nav-item mr-2" >
                            <small v-on:click="signOut"  class="signout menu ml-4">Sign out</small>
                        </a>
                        <li class="uname nav-item dropdown email ml-4" style="backgrond-color: #0e1931"  v-for="gettersuser in gettersusers" :key="gettersuser.id">
                            <div class="title" data-toggle="dropdown">
                                <div class="circle bg-success text-light">
                                    <span class="initials">{{caps(gettersuser.name).charAt(0)}}</span>
                                </div>
                            </div>
                            <ul class="dropdown-menu px-1  dropdown-menu-right">
                                <li class="ml-1"><small> {{ caps(gettersuser.name) }}</small> </li>
                                <li class="ml-1 email text-secondary"><small> {{ gettersuser.email }}</small> </li>
                                <li @click="isActive = 5" class="dropdown float-right mr-2"> 
                                    <div  v-on:click="signOut"  :class="{active : isActive == 5 }" >
                                        <button type="button" class="btn btn-sm btn-success signout_"><small>Sign out</small></button>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        </div>
        <router-view></router-view>
    </div> 
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
body {
    background-size: cover;
}
nav {
    padding-left: 0px !important;
    padding-right: 0px !important;
}
.body {
    bottom: 0;
}
.link {
    font-size: 18px;
    color: white !important;
}
.nav-item {
    cursor: pointer;
}
.toggle {
    display: none;
}
small {   
    font-family: 'Nunito', sans-serif;
}
:root {
  --avatar-size: 2.5rem;
  /* change this value anything, e.g., 100px, 10rem, etc. */
}

.circle {
  background-color: #ccc;
  border-radius: 50%;
  height: var(--avatar-size);
  text-align: center;
  width: var(--avatar-size);
}

.initials {
  font-size: calc(var(--avatar-size) / 2); /* 50% of parent */
  line-height: 1;
  position: relative;
  top: calc(var(--avatar-size) / 4); /* 25% of parent */
}
.uname small {
    font-weight: bold;
}
.uname {
    cursor: pointer;
    color: whitesmoke;
    font-size: 17px;
    letter-spacing: 0px;
    margin-left:5px;
    margin-right:15px;
}
.nav-link {
    font-size: 20px !important;
    color: white
}
.email {
    color: #666
}
.signout{
    color: tomato;
}
.signout_ {
    padding-top: 0px;
    padding-bottom: 0px;
    margin-top: 8px;
    font-size: 14px;
    /* background: tomato; */
    color: white;
}
.signout_:hover {
    color: white;
}
.signout:hover {
    color: #264653
}
@media all and (min-width: 992px) {
    
    .active {
        color: rgb(255, 154, 136) !important;
        padding-bottom: 5px;
        border-bottom : 2px solid #fff !important
    }
    .signout {
        display: none;
    }
    
	.navbar .nav-item .dropdown-menu{ 
        display: none; 
    }
    .menu {
        color: white;
    }
	.menu:hover {
        color: rgba(255, 255, 255, 0.597)
    }
	.navbar .nav-item:hover .dropdown-menu{ 
        display: block; 
    }
	.navbar .nav-item .dropdown-menu{ 
        margin-top:0; 
    }
}
@media only screen and (max-width: 991px)  {
    .toggle {
        display: inline;
    }
    .email {
        display: none;
    }
    .nav-item {
        padding-top: 10px;
        background: white;
        color: black !important;
    }
}
@media only screen and (max-width: 568px)  {
    .toggle {
        font-size: 30px;
    }
}
</style>

<script>
import { i18n } from '../il8n'

export default {
    data() {
        return {
            tutorial: false,
            display: '',
            route: '',
            isActive: 0,
        }
    },
    computed: {
        gettersusers() {
            return this.$store.getters.allUsers
        },
    },
    mounted() {
        this.$store.dispatch("getUsers");
        this.$i18n.locale = 'en'
        if(localStorage.getItem('lang')){
            this.$i18n.locale = localStorage.getItem('lang')
        }
        // if(this.$route.name != 'home') {
        //     document.body.style.backgroundColor = "white";
        document.getElementById('nav').style.backgroundColor= "#14213d"
        // }
        // else{
        //     document.body.style.backgroundColor = "#14213d";
        // }  
        if(this.$route.name == 'request'|| this.$route.name == 'requests'){
            this.isActive = 1
        }
        else if(this.$route.name == 'feedback'){
            this.isActive = 4
        }
        else if(this.$route.name == 'playlist' || this.$route.name == 'video'){
            this.isActive = 3
        }
        else if(this.$route.name == 'home'){
            this.isActive = 0
        }
    },
    methods: {
        language: function(locale) {
            i18n.locale = locale;
            localStorage.setItem('lang',locale)
        },
        signOut: function() {
            localStorage.removeItem('email')
            this.$router.push('/user')
        },
        caps(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
}
</script>