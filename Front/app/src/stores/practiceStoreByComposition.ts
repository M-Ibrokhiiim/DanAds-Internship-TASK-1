import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCompositionStore = defineStore('composition',()=> {
    const user = ref({
        name: undefined,
        surname:undefined,
        phone: undefined
    })


    return{
        user
    }
})