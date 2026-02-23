import  { defineStore } from 'pinia'

interface User {
    born: number,
    name: string,
    surname: string,
    nickName1: string,
    nickName2: string,
    isProgrammer: boolean,
    newCar?: string
}

interface State { 
    user: User
}

export const usePractice = defineStore('practice', {
    state: ():State=>({
        user:{
            born:2004,
            name: 'Ibrokhiim',
            surname: 'Muysinov',
            nickName1: 'MrIbrokhiiim',
            nickName2: 'M_Ibrokhiiim',
            isProgrammer: true,
            newCar: undefined
        },
    }),

    getters:{
        age: (state) => { 
            const currentPeriod = new Date()
            const currentYear = currentPeriod.getFullYear()

            return currentYear - state.user.born
        },

        fullName: (state) => {
            return `${ state.user.name } ${state.user.surname}`
        },

        aboutUser: (state) => { 
            return `${state.user.name} ${state.user.surname} was born in ${state.user.born} year.
                    He is ${state.user.isProgrammer ? 'Programmer' : 'Not Programmer'}`
        }
    },

    actions: {
        giveNewCar(name:string){
            this.user.newCar = name
        }
    }
})