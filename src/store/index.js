import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        paymentList: [],
        categoryList: []
    },
    getters: {
        getPaymentsList: state => state.paymentList,
        getFullPaymentValue: state => {
            return state.paymentList.reduce((res, cur) => res + cur.value, 0)
        },
        getCategoryList: state => state.categoryList
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentList = payload
        },
        addDataToPaymentList(state, payload) {
            state.paymentList.push(payload)
        },
        setCategories(state, payload) {
            if (!Array.isArray(payload)) {
                payload = [payload]
            }
            state.categoryList.push(...payload)
        },
        editDataToPaymentList(state, payload) {
            state.paymentList.forEach((el) => {
                if (el.id === payload.id) {
                    el.value = payload.value
                    el.category = payload.category
                    el.date = payload.date
                }
            })
        },
        deleteDataToPaymentList(state, payload) {
            state.paymentList = state.paymentList.filter((item) => item.id !== payload.id)
        }
    },
    actions: {
        fetchData({commit}) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = []
                    for (let i = 1; i <= 25; i++) {
                       const catArr = ['Продукты', 'Спорт', 'Транспорт', 'Образование', 'Развлечение', 'Налоги', 'Хобби']
                        const rand = Math.floor(Math.random() * catArr.length)
                        items.push({
                            date: '25.05.2022',
                            category: catArr[rand],
                            value: i * 10,
                            id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now()) + i)
                        })
                    } resolve(items)
                }, 2000)
            }).then(res => {
                if (!this.state.paymentList.length) {
                    commit('setPaymentsListData', res)
                }
            })
        },
        fetchCategoryList({commit}) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(['Продукты', 'Спорт', 'Транспорт', 'Образование', 'Развлечение', 'Налоги', 'Хобби'])
                }, 1000)
            }).then(res => {
                commit('setCategories', res)
            })
        }
    },
    modules: {}
})