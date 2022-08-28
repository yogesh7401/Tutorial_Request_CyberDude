<template>
    <div class="request">
        <div class="form mt-3 container">
            <div class="container">
                <div>
                    <h2><small class="topic">{{$t('create.recommendation')}}</small></h2>
                    <small>{{$t('create.requests')}}</small>
                </div>
                <hr>
                <div class="requests">
                    <h6 class=" mr-2 d-inline">{{$t('create.yoursRequest')}} :</h6>
                    <div class="d-inline"  v-for="item in request" :key="item"> 
                        <b-badge class="d-inline" v-if="item != null">{{ item }}</b-badge>
                    </div>
                </div>
                <b-row class="mt-3 ">
                    <b-col xl="4" lg="4" md="6" cols="12" v-for="(item) in course" :key="item.id">
                        <div class="align-self-stretch" style="font-family: Verdana, Geneva, sans-serif;font-size:15px"> 
                            <b-card-group deck v-if="list[item.id-1]" :title="list[item.id-1].course" >
                            <b-card
                                :title=list[item.id-1].course
                                :img-src=img[item.id-1]
                                img-alt="Image"
                                img-height="230"
                                img-top
                                tag="article"
                                style="max-width: 50rem;"
                                class="mb-4 shadow-card bg-light"
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

                            <template #footer>
                                <small class="text-muted">Requests</small><small class="float-right"><span><b-badge class="p-1">{{vote[item.id-1]}}</b-badge></span></small>
                            </template>
                            </b-card>
                            </b-card-group>
                        </div>
                    </b-col>
                </b-row>
                <div  class="separator">Others </div>
                <b-row class="my-3 ">
                    <b-col xl="4" lg="4" md="6" cols="12" v-for="(item , v) in list.slice(9)" :key="item.id">
                        <div class="align-self-stretch" style="font-family: Verdana, Geneva, sans-serif;font-size:15px">
                            <div :title="item.course">
                                <b-card
                                    no-body
                                    class="mb-4 shadow-card bg-light"
                                    style="max-width: 50rem;"
                                >
                                    <b-card-body :class="[ 'bgcolor' , bgColor(v)]" class="text-center">
                                        <h2 class="request" style="height: 33px">{{item.course.toUpperCase()}}</h2>
                                    </b-card-body>
                                    <b-card-footer>                        
                                        <small class="text-muted">Requests</small><small class="float-right"><b-badge :class="[ 'p-1' , bgColor(v)]">{{vote[v+9]}}</b-badge> </small>
                                    </b-card-footer>
                                </b-card>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </div>
        <Footer class="footer"></Footer>
    </div>
</template>

<script>
import axios from 'axios'
import course from '../../JSON/request.json'
import React from '../../assets/image/React.svg'
import Laravel from '../../assets/image/Laravel.svg'
import Tailwindcss from '../../assets/image/Tailwindcss.svg'
import Vue from '../../assets/image/Vue.svg'
import Footer from '../footer'

export default {
    components: {Footer},
    metaInfo: {
      title: 'Request',
      titleTemplate: '%s - CyberdudeNetworks',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
    
    beforeCreate: function() {
        document.body.className = 'other';
    },
     data() {
      return {
            list: [],
            vote: [],
            email: '',
            isRequest: '', 
            requests: [] ,
            request: [],
            index: 0,
            course: course,
            img: [React,Laravel,Tailwindcss,Vue,Vue,Tailwindcss,React,Laravel,Tailwindcss],
        }
    },
    methods: {
        caps(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
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
        }
    },
    mounted() {
        if(localStorage.getItem('email')){
            let email = localStorage.getItem('email')
            this.email = email
            let obj = this   
            const promise1 = axios.get('http://localhost:8000/api/user/'+email)
            const promise2 = axios.get('http://localhost:8000/api/submit/'+email)
            const promise3 = axios.get('http://localhost:8000/api/form')
            const promise4 = axios.get('http://localhost:8000/api/submit')
            Promise.all([promise1, promise2, promise3, promise4]).then((response) => {
                var isRequest = response[0].data[0].isRequested
                if (isRequest == '0')  obj.$router.push('/request')
                obj.requests = response[1].data[0].requests.split(",")
                for(let i in obj.requests) {
                    if(obj.requests[i]) obj.request[i] = obj.requests[i]
                }
               obj.list = response[2].data
                obj.vote = response[3].data
                console.log(response);
            })
            .catch(function() {
                obj.$router.push('/')
            })
        }
        else{
            this.$router.push('/');
        }
    },
}
</script>

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
.form {
    bottom: 0;
    padding: 0;
    background-color: white;
    background-size: cover;
    min-height: 800px;
}
.shadow-card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.badge {
    background-color: #2a9d8f;
    margin-left: 5px;
    margin-right: 5px;
}
.opt {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); 
  background-color: #f1f1f1;
  font-size: 15px;
}
input {
    outline: none !important;
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
.align-self-stretch {
    align-self: stretch;
}
::placeholder {
  color: white;
  text-align: center;
}
h6 {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.514);
}
span {
    box-shadow: none;
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
.request {
    overflow-y: hidden;
}
.footer {
    background: #1d3557;
}
@media only screen and (max-width: 990px) {
    
    .layout {
        margin-left: 30px;
    }
}
 @media only screen and (max-width: 760px) {
    
    .layout {
        margin-left: 60px
    }
}
@media only screen and (max-width: 575px) {
    
    .layout {
        margin-left: -10px;
    }
    table {
        width: 150px !important
    }
    #left {
        width: 40px !important;
    }
    #right {
        width: 110px !important;
    }
}
@media only screen and (max-width: 400px) {
    
    .layout {
        margin-left: -8px;
    }
    .course {
        font-size: 11px 
    }
    .req {
        font-size: 9px 
    }
    .requests {
        font-size: 12px
    }
    .topic {
        font-size: 18px;
    }
}
@media only screen and (max-width: 361px) {
    .layout {
        margin-left: -25px;
    }
    table {
        width: 145px !important
    }
    #left {
        width: 45px !important;
    }
    #right {
        width: 100px !important;
    }
}
@media only screen and (max-width: 281px) {
    .layout {
        margin-left: -35px;
    }
    table {
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