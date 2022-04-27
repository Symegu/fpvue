// import { resolve } from 'core-js/fn/promise'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const localDB = {
  page1: [
    { id: 1, date: '20.03.2020', category: 'Food', value: 169 },
    { id: 2, date: '21.03.2020', category: 'Navigation', value: 50 },
    { id: 3, date: '22.03.2020', category: 'Sport', value: 450 }
  ],
  page2: [
    { id: 4, date: '23.03.2020', category: 'Entertaiment', value: 969 },
    { id: 5, date: '24.03.2020', category: 'Education', value: 1500 },
    { id: 6, date: '25.03.2020', category: 'Food', value: 200 }
  ],
  page3: [
    { id: 7, date: '20.03.2020', category: 'Food', value: 169 },
    { id: 8, date: '21.03.2020', category: 'Navigation', value: 50 },
    { id: 9, date: '22.03.2020', category: 'Sport', value: 450 }
  ],
  page4: [
    { id: 10, date: '23.03.2020', category: 'Entertaiment', value: 969 },
    { id: 11, date: '24.03.2020', category: 'Education', value: 1500 },
    { id: 12, date: '25.03.2020', category: 'Food', value: 200 }
  ]
}

const mutations = {
  setPaymentsListData (state, payload) {
    const newUniqIdsObs = payload.filter((item) => {
      return state.paymentsListIds.indexOf(item.id) < 0
    })
    const uniqIds = newUniqIdsObs.map((obj) => obj.id)
    state.paymentsListIds.push(...uniqIds)
    state.paymentList.push(...newUniqIdsObs)
  },
  addDataToPaymentsList (state, payload) {
    state.paymentList.push(payload)
  },
  // ediPaymentsListFirstElement (state, payload) {
  //   Vue.set(state.paymentList, 0, payload)
  //   state.paymentsList[0] = payload
  //   state.paymentsList = [...state.paymentsList]
  // }
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
    categoryList: [],
    paymentsListIds: []
  },
  getters,
  mutations,
  actions: {
    fetchData ({ commit }, page) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = localDB[`page${page}`]
          resolve(items)
        }, 500)
      }).then((res) => commit('setPaymentsListData', res))
    },
    // fetchData({commit}) {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       const items = []
    //       for(let i = 1; i <= 50; i++) {
    //         items.push({
    //           date: "23.12.2022",
    //           category: "Sport",
    //           value: i,
    //           id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now()) +i)
    //         })
    //       } resolve(items)
    //     }, 2000)
    //   }).then(res => {
    //     commit('setPaymentsListData', res)
    //   })
    // },
    fetchCategoryList ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(['Food', 'Transport', 'Education', 'Entertainment'])
        }, 1000)
      }).then(res => { commit('setCategories', res) })
    }
  }
})
