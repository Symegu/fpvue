// import { resolve } from 'core-js/fn/promise'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mutations = {
  setPaymentsListData (state, payload) {
    state.paymentList = payload
  },
  addDataToPaymentsList (state, payload) {
    state.paymentList.push(payload)
  },
  // editPaymentsList (state, payload) {
  //   state.paymentList.push(payload)
  // },
  setCategories (state, payload) {
    state.categoryList = payload
  }
}
const getters = {
  getPaymentsList: state => state.paymentList,
  getFullPaymentValue: state => {
    return state.paymentList.reduce((res, cur) => res + cur.value, 0)
  },
  getCategoryList: state => state.categoryList
}

export default new Vuex.Store({
  state: {
    paymentList: [],
    categoryList: []
  },
  getters,
  mutations,
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = []
          for (let i = 1; i <= 50; i++) {
            items.push({
              date: '12.34.56',
              category: 'cat',
              value: i,
              id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now()) + i)
            })
          } resolve(items)
        }, 2000)
      }).then(res => {
        commit('setPaymentsListData', res)
      })
    },
    fetchCategoryList ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(['Food', 'Transport', 'Education', 'Entertainment'])
        }, 1000)
      }).then(res => { commit('setCategories', res) })
    }
  }
})
