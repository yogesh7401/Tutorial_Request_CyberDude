<template>
    <div class="container">
        <div class="row center">
            <div class="col-xl-1"></div>
            <div class="col-lg-5 cols-12 img">
              <img :src=Home alt="home"> 
            </div>
            <div class="col-lg-1 img"></div>
            <div class="col-xl-4 col-lg-5 col-md-7 col-sm-8 col-10  box " >
                <div class="image1 text-center">
                  <a href="https://www.youtube.com/user/CyberDudeNetworks">
                    <img class="logo" src="https://www.cyberdudenetworks.com/assets/img/cyberdude-black.svg" alt="logo" height="110px" >
                  </a>
                </div>
                <form @submit="postNow" method="post">
                    <div class="field">
                        <input type="text" class="input" name="fullname" v-model="name" id="fullname" autocorrect="off" placeholder="Name" >
                        <label for="fullname">{{ $t('name') }}</label>
                    </div>
                    
                    <div class="field">
                        <input type="email" class="input"  :class="['BorderColor', isEmailValid()]" v-model.lazy="email" v-debounce="delay" autocorrect="off" name='email' id="email" placeholder="E-mail" autocomplete="off">
                        <label for="email">{{ $t('email') }}</label>
                    </div>

                    <div class="field">
                        <input type="number" :class="['BorderColor', isPhoneValid()]" v-model="phone" autocorrect="off" name="phone" id="phone" placeholder="Phone" autocomplete="off">
                        <label for="phone">{{ $t('phone') }}</label>
                    </div>
                    <div class="field">
                        <input class=" mt-2 submit " type="submit" :value=" $t('submit') "> <br>
                    </div>
                </form>
              <div class="language text-center">
               <small v-on:click="lang('tn')" class="mr-1">தமிழ்</small><small>.</small>
               <small v-on:click="lang('en')" class="ml-1">English</small>
              </div>
            </div>
        </div>
    </div>
</template>

<script scoped>
import axios from 'axios'
import 'vue-loading-overlay/dist/vue-loading.css';
import Home from '../assets/image/Home.svg'
import debounce from 'v-debounce'

export default {
  name: 'User',
  metaInfo: {
      title: 'Login',
      titleTemplate: '%s - CyberdudeNetwork',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
  data() {
    return{
      delay: '1000',
      name: '',
      email: '',
      phone: '',
      regex : '',
      regex_no: '',
      route: '',
      Home: Home,
    }
  },
  mounted() {
    
      this.$i18n.locale = 'en'
     if(localStorage.getItem('lang')){
            this.$i18n.locale = localStorage.getItem('lang')
        }
    document.body.style.backgroundColor = "#14213d";
    
  },
   methods: {
            lang: function(lang) {
              this.$i18n.locale = lang
              localStorage.setItem('lang',lang)
            },
            isEmailValid: function() 
            {
              this.regex =/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
              if(this.email=="") {
                return "input"
              }
              else if(this.regex.test(this.email)){
                return "input"
              }
              else {
                return "wrong"
              }
            },
            isPhoneValid: function(){
              return (this.phone == "")? "input" : (this.phone.toString().length < 12) ? 'input' : 'wrong';
            },
            postNow: function(e) {
              let loader = this.$loading.show({
                  container: this.fullPage ? null : this.$refs.formContainer,
                  color: "#2a9d8f",
                  onCancel: this.onCancel,
              });  
              if (this.name && this.email && this.phone) {
                if(this.regex.test(this.email)){
                  if(this.phone.toString().length < 12){
                    let currentObj = this;
                    axios.post('http://localhost:8000/api/user', {
                        name: this.name,
                        email: this.email,
                        phone: this.phone
                    })
                    .then(function (response) {
                      if(response.status == '200'){
                        var obj = JSON.parse(response.config.data);
                        var email = obj.email
                        localStorage.setItem('email',email)
                        loader.hide()
                        currentObj.$router.push('/home')
                      } 
                    })
                    .catch(function (error) {
                        alert(error)
                    });
                  }
                  else {
                    loader.hide()
                    alert('Invalid Phone number')
                  }
                }
                else{
                  loader.hide()
                  alert('Invalid Email Id')
                }
                }
                else if(!this.name){
                    loader.hide()
                  alert('Name must be filled')
                }
                else if(!this.email){
                    loader.hide()
                  alert('E-mail must be filled')
                }
                else if(!this.phone){
                    loader.hide()

                  alert('Phone number must be filled')
                }
                e.preventDefault();
                
            }
        },
        directives: {
          debounce
        }
}
</script>

<style scoped>
.container {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
}
.box {
  padding-top: 10px;
  padding-bottom: 10px;
  height: 500px;
  margin-top: 8%; 
  margin-bottom: 9%;
  background: #fff;
  border-radius: 20px;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.397);
}
label {
  font-size: 13px;
  margin-left: 50px;
  margin-bottom: 10px;
}
.wrong {
  color: red !important;
}
.language {
  border: none !important;
}
.language small {
  color: #264653 ;
  cursor: pointer;
  font-size: 12px;
}
.language small:hover {
  color: #e76f51 !important;
}
input, .language {
  margin-left: 50px ;
  margin-right: 50px ;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #264653;
  font-family: inherit;
  -webkit-appearance: none;
  border-radius: 0;
  padding: 0;
  cursor: text;
}
.input{
  color :rgba(0, 0, 0, 0.726)
}
.field { 
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 1em;
}
label, input {
  font: "Fira Sans", sans-serif;
  color: #264653;
  transition: all 0.2s;
  touch-action: manipulation;
}
input:focus {
  outline: 0;
  border-bottom: 2px solid #264653;
}
input:placeholder-shown + label {
  cursor: text;
  max-width: 66.66%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform-origin: left bottom;
  transform: translate(0, 2.1rem) scale(1.5);
}
::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}
input:focus::-webkit-input-placeholder {
  opacity: 0;
}
input:not(:placeholder-shown) + label,
input:focus + label {
  transform: translate(0, 0) scale(1);
  cursor: pointer;
}
.submit {
  font-size: 20px;
  border : solid 2px #e76f51;
  background-color: #e76f51;
  color: white;
  border-radius: 10px;
  padding: 5px;
}
.submit:hover {
  background-color: #ed613e;
}
.box .image1 {
    margin-left: -10px;
  }
.img{
  margin-top: 15%;
}

@media only screen and (max-width: 1200px) {
  
}
@media only screen and (max-width: 1000px) {
  .box {
    margin-top: 20%;
    width:480px;
    margin-left: auto;
    margin-right: auto;
  }
  .img {
    display: none;
  }
}
@media only screen and (max-width: 480px) {
  input {
    margin-left: 20px ;
    margin-right: 20px ;
  }
  .box .image1 {
    margin-left: -25px;
  }
  label {
    margin-left: 16px !important;
    font-size: 13px
  }
  .logo {
    height: 120px;
    margin-bottom: 15px;
  }
  
}
@media only screen and (max-width: 359px) {
  .box .image1{
    margin-left: -30px;
  }
  .logo {
    height: 110px
  }
}
@media only screen and (max-width: 280px) {
  .box .image1 {
    margin-left: -20px;
  }
  .logo {
    height: 90px;
    margin-bottom:20px
  }
  label {
    font-size: 10px;
  }
}
</style>