import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: []
  },
  getters: {
    news(state) {
      return state.news
    }
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news
    }
  },
  actions: {
    fetchNews({commit}) {
      const API_KEY = '318d2024a3c09afc72ecd98d63406107'
      axios.get(`https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${API_KEY}`)
        .then(res => {
          commit('SET_NEWS', res.data.articles)
        }).catch(err => console.log(err))
    }
  },
})
