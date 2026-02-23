import User from '@/icons/User.vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface User {
    id?: number,
    name: string,
    surname: string,
    age: number
}
export const useUsersStore = defineStore('usersStore',() => {
    const users = ref<User[] | undefined>([])
    const newUser = ref<User>({ name: '', surname: '', age: 0})


    function addUser(user?:User) {
        if(!user?.name || !user?.surname || !user?.age) return

        user.id = users.value!.length + 1
        users.value?.push(user)

        newUser.value = {
            name: '',
            surname: '',
            age: 0
        }

    }
    
    function removeUser(id:number) {
        users.value =  users.value?.filter((user:User) => user.id !== id )   
    }

    
    return{
          users,
          newUser,
          addUser,
          removeUser
    }

})