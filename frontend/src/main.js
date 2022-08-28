import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { i18n } from './il8n'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'nprogress/nprogress.js'
import 'nprogress/nprogress.css'
import 'nprogress/'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import NProgress from 'nprogress'
import Loading from 'vue-loading-overlay';
import Vuex from 'vuex'
import axios from 'axios'
import router from './route'
import store from './store'


Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(Loading);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

router.beforeEach((to, from, next) => { 
    if(localStorage.getItem('email')) {
      let email = localStorage.getItem('email')
      axios
            .get('http://localhost:8000/api/user/'+email)
            .then(function (response) {
                var isRequest =response.data[0].isRequested;
                if(isRequest == '1' || isRequest == '0'){
                  if(to.name === 'user' || to.name === 'FrontPage' || to.name === 'playlist_'){
                    next('/home')
                  }
                  else {
                    next()
                  }
                }
                else {
                    localStorage.removeItem('email')
                    next('/user')
                }})
              .catch(function() {
                localStorage.removeItem('email')
                next('/user')
              })
  }
  else if(to.name === 'user' || to.name === 'FrontPage' || to.name === 'playlist_'){
    next()
  }
  else if(to.name === 'video'){
    alert("Fill the detials to view video")
    next('/user')
  }
  else if(to.name === 'invalid'){
    next()
  }
  else {
    next('/')
  }
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router.routes
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
