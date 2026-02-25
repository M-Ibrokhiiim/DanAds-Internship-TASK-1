<template>
    <div class="relative  mb-[70px] mt-[70px]">
        <form action="submit" class=" gap-1 items-center  flex justify-center w-[500px] ml-[3vw]">
         <div class=" w-[70%]  border-2 border-blue-300 rounded-3xl shadow-2xl flex flex-col justify-center items-center h-[250px]">
            <main class="flex flex-col  items-center gap-1 w-[500px] mt-[60px]">
               <div class=" w-[51%] flex  justify-between" >
                <label for="name">Name:</label>
                <input 
                  autofocus
                  type="text"
                  class="border rounded-[3px] focus:outline-none pl-[2px]"
                  placeholder="John"
                  v-model="newUser.name"
                  />
            </div>
            <div class=" w-[51%] flex justify-between" >
                <label for="name">Surname:</label>
                <input 
                  type="text"
                  class="border rounded-[3px] focus:outline-none pl-[2px]"
                  placeholder="Roll"
                  v-model="newUser.surname"
                  />
            </div>
            <div class="w-[51%] flex justify-between" >
                <label for="name">Age:</label>
                <input 
                  type="number"
                  class="border-[1px]  rounded-[3px] focus:outline-none pl-[2px]"
                  min="0"
                  placeholder="0"
                  v-model="newUser.age"
                  />
            </div>
            </main>
            <button 
               type="submit" 
               @click.prevent="addUser(newUser)" 
               class="ml-[180px] mt-4 focus:outline-none bg-blue-400 opacity-[0.8] transition-all duration-100 border-none active:scale-75  text-white">
               Send
            </button>
         </div>
        </form>
        <div
           @click="$emit('isOpenModal', true)" 
           class="absolute top-[20px] right-[140px] cursor-pointer transition-all duration-100 active:scale-50 ">
          <List />
        </div>
     </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUsersStore } from '@/stores/usersStoreByCompositionStyle'
import List from '@/icons/List.vue'


const userStore = useUsersStore()
const { newUser } = storeToRefs(userStore)
const { addUser } = userStore

const emit = defineEmits(['isOpenModal'])
</script>