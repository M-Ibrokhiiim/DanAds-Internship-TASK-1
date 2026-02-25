import type { User } from "@/types/useWeek5Types"
import { defineStore } from 'pinia'
import { ref, watch} from 'vue'


export const useUsersStore = defineStore('usersStore',() => {
    const users = ref<User[] | undefined>([])
    const newUser = ref<User>({img:'', name: '', surname: '', age: 0})

    const searchedUser = ref<string>('')
    const foundUsers = ref<User[]>([])

    function addUser(user?:User) {
        if(!user?.name || !user?.surname || !user?.age) return
        let randomPic = Math.floor(Math.random() * 100)

        user.id = users.value!.length + 1
        user.img = `https://randomuser.me/api/portraits/men/${randomPic}.jpg`
        users.value?.push(user)

        newUser.value = {
            name: '',
            surname: '',
            img: '',
            age: 0
        }

    }
    
    function removeUser(id:number) {
        users.value =  users.value?.filter((user:User) => user.id !== id )   
        foundUsers.value =   foundUsers.value?.filter((user:User) => user.id !== id )   
    }

    function $reset(){
       users.value = []
       foundUsers.value = []
    }
    
    
    watch(searchedUser, ()=> {
        foundUsers.value = users.value?.filter((user: User) =>{
        const fullName = [...Array.from(user.name),...Array.from(user.surname)].join('').trim()

        const query = Array.from(searchedUser.value.toLowerCase()).filter(l =>{
            return l !== ' '
        }).join('')
        
        return  fullName.toLowerCase().startsWith(query) 
        }) || []
    })

    return{
          users,
          newUser,
          addUser,
          removeUser,
          searchedUser,
          foundUsers,
          $reset
    }

})