import { defineStore } from 'pinia'
// import axios from 'axios';
// import moment from 'moment'

export const useMainStore = defineStore('store', {
    state: () => {
        return {
            API: 'http://10.169.142.147:8080/',
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
    // persist: {
    //     key: 'store'
    // }
})