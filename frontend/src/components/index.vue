<template>
<div>
<div  id="nav">
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light py-md-3 py-1">
      <a class="navbar-brand my-2" href="https://www.youtube.com/user/CyberDudeNetworks">
        <img class="logo" src="https://www.cyberdudenetworks.com/assets/img/cyberdude-logo.svg" alt="logo" height="45px" >
      </a>
      <i data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" class="fas fa-bars fa-2x my-2 text-light toggle" ></i>              
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <router-link  to="/" tag="li" @click.native="isActive = 1" :title="$t('nav.home')"  class="link nav-link  nav-item mr-2">
            <small class="menu ml-4"  :class="{active : isActive == 1 }">{{ $t('nav.home') }}</small>
          </router-link>
          <a href="https://cyberdudenetworks.com/about" @click.native="isActive = 2" :title="$t('nav.about')"  class="link nav-link  nav-item mr-2">
            <small class="menu ml-4"  :class="{active : isActive == 2 }">{{ $t('nav.about') }}</small>
          </a>
          <li class="nav-item nav-link text-light dropdown link mr-2">
                            <small class="nav-item dropdown-toggl menu underline ml-4"    :class="{active : isActive == 3 }" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true">
                                {{ $t('nav.youtube') }}  
                            </small>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a  :href="$router.resolve({name: 'playlist_', params: {'id' : 'PL73Obo20O_7jN--xo4UFw-DO1OM5vQEMJ'}}).href"  
                                    class="link dropdown-item" >
                                    <li class="text-dark">
                                        <i class="fab fa-bootstrap mr-3"></i>
                                        <small>
                                            Bootstrap
                                        </small>
                                    </li>
                                </a>
                                <a  :href="$router.resolve({name: 'playlist_', params: {id : 'PL73Obo20O_7gGv4cLEOoqTF8_m8rPKyQh'}}).href"  
                                    class="link dropdown-item" >
                                    <li class="text-dark">
                                        <i class="fab fa-css3-alt mr-3"></i>
                                        <small> 
                                            CSS 
                                        </small>
                                    </li>
                                </a>
                                <a :href="$router.resolve({name: 'playlist_', 
                                            params: {id : 'PL73Obo20O_7gcXt0cfQA14jey8zavtKAq'}}).href"  
                                            class="link dropdown-item" >
                                <li class="text-dark">
                                    <i class="fab fa-html5 mr-3"></i>
                                    <small>
                                        HTML
                                    </small>
                                </li>
                                </a>
                                <a :href="$router.resolve({name: 'playlist_', 
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
                        <router-link  to="/user" tag="li" v-on:click="isActive = 4"  class="link nav-link  nav-item mr-2">
                          <button class="btn btn-sm menu btn-success ml-4 my-2 my-sm-0" type="submit">Start Learning</button>
                        </router-link>
        </ul><br>
        
      </div>
    </nav>
  </div>
  </div>
  <router-view></router-view>
</div>
  
</template>

<script>
export default {
    
  data() {
    return {
      isActive: 0
    }
  },
    mounted() {
        // if(this.$route.name != 'FrontPage') {
            // document.body.style.backgroundColor = "white";
            document.getElementById('nav').style.backgroundColor= "#14213d"
        // }
        // else{
            // document.body.style.backgroundColor = "#14213d";
        // }
        this.$i18n.locale = 'en'
        if(localStorage.getItem('lang')){
            this.$i18n.locale = localStorage.getItem('lang')
        }
        if(this.$route.name == 'FrontPage'){
            this.isActive = 1
        }
        else if(this.$route.name == 'about'){
            this.isActive = 2
        }
        else if(this.$route.name == 'playlist_'){
            this.isActive = 3
        }
    },
    methods: {
      language: function(locale) {
            this.$i18n.locale = locale;
            localStorage.setItem('lang',locale)
            console.log(locale);
        },
    }
}
</script>

<style>
body.home {
    background: #14213d;
}
body.other {
    background: white;
}
@media all and (min-width: 992px) {    
    .active {
        color:tomato !important;
        padding-bottom: 5px;
        border-bottom : 2px solid #fff !important
    }
    .menu{
      color: white;
    }
}
</style>