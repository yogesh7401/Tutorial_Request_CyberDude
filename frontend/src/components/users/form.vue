<template>
    <div class="request">
        <div class="mt-3 container" style="min-height='800px'">
            <div>
                <h2><small class="topic">{{$t('create.recommendation')}}</small></h2>
                <small class="tomato" style="color: tomato">{{$t('create.limit')}}</small>
            </div>
            <hr>
            <br>
            <b-form @submit="submitNow" method="post">   
            <!-- default options -->
            <b-row class="mt-3 ">
                <b-col xl="4" lg="4" md="6" cols="12" v-for="item in course" :key="item.id">
                    <div class="align-self-stretch" style="font-family: Verdana, Geneva, sans-serif;font-size:15px"> 
                        <b-card-group deck v-if="list[(item.id)-1]">
                        <b-card
                            :title=item.name
                            :img-src=img[item.id-1]
                            img-alt="Image"
                            img-height="230"
                            img-top
                            tag="article"
                            style="max-width: 50rem;"
                            class="shadow-card mb-4 bg-light"
                        >
                            <b-card-text style="height: 140px">
                                {{item.description}} <br>
                            </b-card-text>
                            <b-list-group >
                                <b-list-group-item>
                                    <p class="text-muted d-inline">Docs :</p> <a :href=item.docs class="d-inline float-right" target="_blank">{{item.name}} <i class="fas fa-external-link-alt"></i></a>
                                </b-list-group-item>
                                <b-list-group-item>
                                    <p  class="text-muted d-inline">Used to : <div class="d-inline text-primary float-right">{{item.used_to}}</div> 
                                </b-list-group-item>
                            </b-list-group>
                            <label :for="item.id" style="width:100%">
                                <input  type="checkbox" 
                                            v-model="inputs" 
                                            :id="item.id"
                                            :value="list[(item.id)-1].course"
                                            :disabled="inputs.length > 2  && inputs.indexOf(list[(item.id)-1].course) === -1" 
                                            number>
                                <div class="button text-center btn-primary btn-md py-2 mt-4" >
                                    <b-icon class="mr-1" animation="fade"  icon="star-fill"></b-icon>
                                    I want this
                                </div>
                            </label>
                        <template #footer>
                            <small class="text-muted">Requests</small><small class="float-right"><b-badge class="p-1">{{vote[(item.id)-1]}}</b-badge></small>
                        </template>
                        </b-card>
                        </b-card-group>
                    </div>
                </b-col>
            </b-row>
            <div  class="separator">people also likes </div>
            <!-- people also likes -->
            <b-row class="my-3 ">
                <b-col xl="4" lg="4" md="6" cols="12" v-for="(item , v) in list.slice(9)" :key="item.id">
                    <div class="align-self-stretch" style="font-family: Verdana, Geneva, sans-serif;font-size:15px">
                        <div :title="item.course">
                            <b-card
                                no-body
                                class="shadow-card mb-4 bg-light"
                                style="max-width: 50rem;"
                                v-if="item.course"
                            >
                                <b-card-body :class="[ 'bgcolor' , bgColor(v)]" class="text-center">
                                    <h2 class="request" style="height: 33px">{{item.course.toUpperCase()}}</h2>
                                </b-card-body>
                                <label :for="item.id" style="width:100%" >
                                <input  type="checkbox" 
                                            v-model="inputs" 
                                            :id="item.id"
                                            :value="item.course"
                                            :disabled="inputs.length > 2  && inputs.indexOf(item.course) === -1" 
                                            number>
                                <div class="button text-center btn-primary m-4 p-2 btn-md mt-4" >
                                    <b-icon class="mr-1" animation="fade"  icon="star-fill"></b-icon>
                                    I want this
                                </div>
                            </label>
                                <b-card-footer>                        
                                    <small class="text-muted">Requests</small><small class="float-right"><b-badge :class="[ 'p-1' , bgColor(v)]">{{vote[v+9]}}</b-badge> </small>
                                </b-card-footer>
                            </b-card>
                        </div>
                    </div>
                </b-col>
            </b-row>
            <div  class="separator">Others </div>
            <!-- others -->
            <b-row class="my-3  layout">
                <b-col cols="12">
                    <small class="mt-2 ml-4 choiceLimit" style="color: tomato">({{$t('create.choiceLimit')}})</small><br>
                    <b-col  class="custom-card float-left mx-2 ">
                        <label for="name1" class="opt  ">  
                            <table style="width:230px" >
                                <tr>
                                    <input  type="checkbox" 
                                            v-model="inputs" 
                                            class=" m-2 "
                                            id="name1"
                                            :value="0"
                                            @click="others(0)"
                                            :disabled="inputs.length > 2  && inputs.indexOf(0) === -1 " 
                                            number>             
                                    <td  style="width:60px" class="initial">   
                                        <h1>+</h1>
                                    </td>
                                    <td style="width:170px" class="right pl-3" >
                                        <input  type="text"
                                                v-model="name[0]"
                                                v-if="other[0]"
                                                size="7"
                                                class="other"  
                                                maxlength="15"
                                                placeholder="enter">
                                    </td>                               
                                </tr>                        
                            </table>
                        </label>   <br>
                        <label for="name2" class="opt" v-if="name[0] != null && inputs.length<4">  
                            <table style="width:230px">
                                <tr>
                                    <input  type="checkbox" 
                                            v-model="inputs" 
                                            :value="2"
                                            class=" m-2"
                                            id="name2"
                                            @click="others(1)"
                                            :disabled="inputs.length > 2  && inputs.indexOf(2) === -1 " 
                                            number>             
                                    <td  style="width:60px" class="initial initial_choice" >   
                                        <h1>+</h1>
                                    </td>
                                    <td style="width:170px" class="right pl-3" >
                                        <input  type="text"
                                                v-model="name[1]"
                                                v-if="other[1]"
                                                size="7"
                                                class="other"  
                                                maxlength="15"
                                                placeholder="enter">
                                    </td>                               
                                </tr>               
                            </table>
                        </label>  <br>
                        <label for="name3" class="opt" v-if="name[1] != null && inputs.length<4">  
                            <table style="width:230px">
                                <tr>
                                    <input  type="checkbox" 
                                            v-model="inputs"
                                            :value="1" 
                                            class=" m-2 "
                                            id="name3"
                                            @click="others(2)"
                                            :disabled="inputs.length > 2  && inputs.indexOf(1) === -1 "                                             number>             
                                    <td  style="width:60px" class="initial">   
                                        <h1>+</h1>
                                    </td>
                                    <td  style="width:170px" class="right pl-3" >
                                        <input  type="text"
                                                v-model="name[2]"
                                                v-if="other[2]"
                                                size="7"
                                                class="other" 
                                                maxlength="15"
                                                placeholder="enter">
                                    </td>                               
                                </tr>
                            </table>
                        </label> 
                    </b-col>
                </b-col>
            </b-row>
            <input class="mr-5 mb-5 btn btn-primary btn-lg float-right" :disabled="submitting" type="submit" :value="$t('submit')"> 
            </b-form>
        </div>
            <Footer class="footer"></Footer>
    </div>
</template>

<style scoped>
.blue {
    background: #4cc9f0 !important;
    color: #f1f1f1;
}
.red {
    background: #ef476f !important;
    color: #f1f1f1;
}
.green {
    background: #06d6a0 !important;
    color: #f1f1f1;
}
.dark {
    background: #9b5de5 !important;
    color: #f1f1f1;
}
.yellow {
    background: #e9c46a !important;
    color: #f1f1f1;
}
h1 {
    font-size: 45px;
    margin-top: 5px;
}
body {
    background: white !important;
}
.opt {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); 
  background-color: #f1f1f1;
  font-size: 15px;
}
.plus {
    width: 40px;
}
.other {
    width: 100px;
}
input {
    outline: none !important;
}
.choice {
    font-size: 14px;
}
.initial {
    background: linear-gradient(to top right ,turquoise ,skyblue);
    color: #f1f1f1ce;
    text-align: center;
}
.initial:hover {
    background: linear-gradient(to top right  ,skyblue,turquoise);
    color: #f1f1f1ce;
}
.initial_choice {
    font-size: 14px;
}
input[type='checkbox']{
    display: none;
}
input[type="checkbox"]:checked + .initial {
    background-image: url("tick-box.svg") ;
    background-color: #28a745;
    background-repeat: no-repeat;
    background-position: center;
    width: 60px;
    text-indent: 100%;
    overflow: hidden;
}
.button {
    cursor: pointer;
}
input[type="checkbox"]:checked + .button {
    background-color: #28a745;
}
.separator {
    display: flex;
    align-items: center;
    text-align: center;
    color: rgba(0, 0, 0, 0.253);
    font-size: small;
}
.separator::before, .separator::after {
    content: '';
    flex: 1;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.103);
}
.separator::before {
    margin-right: .25em;
}
.separator::after {
    margin-left: .25em;
}
.custom-card {
    margin-top: 10px !important;
}
.search {
    width: 250px;
    border: solid 1px;
    border-color: skyblue;
}
.search:focus {
  border:solid 1px rgba(0, 128, 128, 0.767);;
}
/* datalist {
    display: block;
} */
::placeholder {
    color: rgba(0, 0, 0, 0.261);
  text-align: center;
}
h6 {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.514);
}
span {
    box-shadow: none;
}
.badge {
    background-color: #2a9d8f;
    margin-left: 2px;
    margin-right: 3px;
}
.choice {
    margin-left: 20px;
}
input[type="text"]{
        border: none;
        border-bottom: 1px solid #666 ;
        background: none;
        width: 150px ;
    }
input[type="checkbox"]:checked + .right {
        display: none;
    }
@media only screen and (max-width: 990px) {
    
    .layout {
        margin-left: -10px;
    }
    #table {
        width: 160px !important
    }
    #left {
        width: 40px !important;
    }
    #right {
        width: 120px !important;
    }
}
 @media only screen and (max-width: 760px) {
    
    .layout {
        margin-left: 60px
    }
}
@media only screen and (max-width: 575px) {
    
    .layout {
        margin-left: 10px;
    }
    
    #table {
        width: 155px !important
    }
    #left {
        width: 40px !important;
    }
    #right {
        width: 110px !important;
    }
    .choiceLimit {
        font-size: 9px !important;
        margin-left: -30px;
    }
}
@media only screen and (max-width: 400px) {
    
    .layout {
        margin-left: -8px;
        margin-right: -12px;
    }
    .course {
        padding-top: 5px;
        font-size: 11px 
    }
    .req {
        font-size: 9px 
    }
    .topic {
        font-size: 18px;
    }
    .tomato {
        font-size: 9px 
    }
}

@media only screen and (max-width: 361px) {
    .layout {
        margin-left: -20px;
    }
    #table {
        width: 135px !important
    }
    #left {
        width: 40px !important;
    }
    #right {
        width: 95px !important;
    }
}
@media only screen and (max-width: 330px) {
    .layout {
        margin-left: -25px;
    }
    #table {
        width: 125px !important
    }
    #left {
        width: 35px !important;
    }
    #right {
        width: 90px !important;
    }
}
</style>

<script>
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.js'
import 'nprogress/nprogress.css'
import 'vue-loading-overlay/dist/vue-loading.css';
import course from '../../JSON/request.json'
import React from '../../assets/image/React.svg'
import Laravel from '../../assets/image/Laravel.svg'
import Tailwindcss from '../../assets/image/Tailwindcss.svg'
import Vue from '../../assets/image/Vue.svg'

export default {
    metaInfo: {
      title: 'Request',
      titleTemplate: '%s - CyberdudeNetworks',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
     data() {
      return {
            course: course,
            img: [React,Laravel,Tailwindcss,Vue,Vue,Tailwindcss,React,Laravel,Tailwindcss],
            fullPage: false,
            input: [],
            inputs: [],
            name: [null],
            other: [false,false,false],            
            list: [],
            vote: [],
            email: '',
            isRequest: '',
            submitting: false,
            uname: '',
            choices: []
            
}
    },
    mounted() {
            if(localStorage.getItem('email')){
            let email = localStorage.getItem('email')
            this.email = email
            let obj = this
             axios
            .get('http://localhost:8000/api/user/'+email)
            .then(function (response) {
                var isRequest =response.data[0].isRequested;
                obj.uname =response.data[0].name;
                if(isRequest == '1'){
                    obj.$router.push('/requests')
                }
                else if(isRequest != '0'){
                    obj.$router.push('/')
                }
            })
            .catch(function() {
                obj.$router.push('/')
            })
        }
        else{
            this.$router.push('/');
        }
       
        axios
        .get('http://localhost:8000/api/form')
        .then(response => (this.list = response.data));
         axios
        .get('http://localhost:8000/api/submit')
        .then(response => (this.vote = response.data));
    },
    methods: {
        bgColor: function(id) {
            let v = id%5
            if(v == 0){
                return "blue"
            }
            else if(v == 1){
                return "red"
            }
            else if(v == 2){
                return "green"
            }
            else if(v == 3){
                return "yellow"
            }
            else{
                return "dark"
            }
        },
    others: function (item) {
        if (this.other[item] == false) {
            this.other[item] = true
        }
        else {
            this.other[item] = false
            this.name[item] = null
        }
    },
    submitNow(e) {
            let loader = this.$loading.show({
                  container: this.fullPage ? null : this.$refs.formContainer,
                  canCancel: true,
                  onCancel: this.onCancel,
            });  
            e.preventDefault();
            let j = 0
            for(let i in this.inputs.concat(this.name)){
                if(this.inputs.concat(this.name)[i] != '' && this.inputs.concat(this.name)[i] != '0' && this.inputs.concat(this.name)[i] != '1' && this.inputs.concat(this.name)[i] != '2' && this.inputs.concat(this.name)[i] != null){
                    this.choices[j] = this.inputs.concat(this.name)[i]
                    j++
                }
            }
             var config = {
                onUploadProgress: function(progressEvent) {
                    NProgress.start()
                    // console.log(NProgress.start());
                }
            };
            // console.log('progressEvent'+progressEvent);
            this.submitting = true
            let currentObj = this;
            if(this.choices != ''){
                axios.post('http://localhost:8000/api/submit', {
                    choices : this.choices,
                    email: this.email
                },config)
                .catch(function () {
                    alert('Select atleast one option');
                    location.reload()
                });  
                axios.post('http://localhost:8000/api/user', {
                    isRequest: '1',
                    email: this.email
                });
                axios.post('http://localhost:8000/api/form', {
                    name: this.name,
                })
                axios.post('http://localhost:8000/api/sendmail', {
                    email: this.email,
                    name: this.uname,
                    choices: this.choices,
                })
                .then(function () {
                    loader.hide()
                    currentObj.$router.push('/requests');
                });    
            }
            else{
                alert('Select one from option')
                location.reload()
            }
        }
    }
}
</script>