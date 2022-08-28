import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import axios from 'axios'
Vue.use(Vuex)
const state = {
    id: '',
    users: [],
    list: [],
    detail: []
    }
  const actions = {
      
    getUsers({ commit }) {
      if(localStorage.getItem('email')){
      let email = localStorage.getItem('email')
      axios.get('http://localhost:8000/api/user/'+email)
      .then(response => {
      commit('SET_USERS', response.data)
        })
      }
    },
    getVideos({ commit } , id) {
      state.id = id
      axios
        .get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50&channelId=UCteUj8bL1ppZcS70UCWrVfw&playlistId='+state.id+'&key='+process.env.VUE_APP_YT_KEY)
        .then(video => {
          commit('SET_VIDEO', video)
        })
    },
    getDetails({ commit } , id) {
      state.id = id
      axios
        .get('https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&id='+state.id+'&key='+process.env.VUE_APP_YT_KEY)
        .then(video => {
          commit('SET_DETAILS', video)
        })
    }
  }
    
  const mutations = {
    ChangeId (state, i) {
      state.id = i
    },
    SET_USERS(state, users) {
        state.users = users
    },
    SET_VIDEO(state, list) {
      state.list = list
    },
    SET_DETAILS(state, details) {
      state.detail = details
    }
  }
    
  const getters = {
    allUsers: (state) => state.users,
    allVideos: (state) => state.list,
    Details: (state) => state.detail,
  }
  
  const ls = new SecureLS({ isCompression: false });
  
  const store = new Vuex.Store({
    strict: true,
    state,
    getters,
    actions,
    mutations,
    plugins: [
      createPersistedState({
        storage: {
          getItem: key => ls.get(key),
          setItem: (key, value) => ls.set(key, value),
          removeItem: key => ls.remove(key)
        }
      })
    ]
  })
  
   export default store