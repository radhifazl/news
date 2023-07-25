import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    loading: false,
  },
  getters: {
    news(state) {
      return state.news
    },
    // query(state) {
    //   return state.query
    // }
  },
  mutations: {
    SET_NEWS(state, news) {
      const newsWithID = news.map((item, index) => {
        return {
          id: index + 1,
          ...item
        }
      })
      state.news = newsWithID
    }
  },
  actions: {
    fetchNews({commit}, query) {

      const API_KEY = '4a14242bfca4613d4936aea5fd7c49b6'
      this.state.loading = true
      axios.get(`https://gnews.io/api/v4/search?q=${query}&lang=en&country=us&max=10&apikey=${API_KEY}`)
        .then(res => {
          commit('SET_NEWS', res.data.articles)
          this.state.loading = false
        }).catch(err => console.log(err))
        .finally(() => this.state.loading = false)
    },
  },
})
