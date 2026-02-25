<template>
<div class="overflow-sroll h-[350px]">
 <transition-group
    name="list"
    tag="div"
    class="flex flex-col gap-2"
    v-if="searchedUser "
  >  
  <div
   v-for="user in foundUsers"
   :key="user.id"
   class="flex bg-white mb-5 shadow-lg hover:shadow-xl hover:scale-100 scale-95  transition-all  duration-150 cursor-pointer w-[480px] h-[70px] rounded-lg overflow-hidden"> 
    <img 
      :src="user.img" 
      alt="User" 
      class="w-22 h-22 object-cover object-center"
    />
       
    <div class="flex flex-col   items-start px-4">
      <h2 class="text-lg font-semibold text-gray-800">{{ user.name  }}  {{ user.surname }}</h2>
      <p class="text-gray-600">Age: {{ user.age }}</p>
    </div>
    <div 
       @click="removeUser(user.id!)"
       class="absolute right-5 top-[34px] hover:scale-125 " >
      <Trash />
    </div>
  </div> 
</transition-group>

<transition-group
    v-else
    name="list"
    tag="div"
    class="flex flex-col gap-2"
  >
  <div
   
   v-for="(user, index) in users"
   :key="index"
   class="flex bg-white mb-5 shadow-lg hover:shadow-xl hover:scale-100 scale-95  transition-all  duration-150 cursor-pointer w-[480px] h-[70px] rounded-lg overflow-hidden"> 
    <img 
      :src="user.img" 
      alt="User" 
      class="w-22 h-22 object-cover object-center"
    />
       
    <div class="flex flex-col   items-start px-4">
      <h2 class="text-lg font-semibold text-gray-800">{{ user.name  }}  {{ user.surname }}</h2>
      <p class="text-gray-600">Age: {{ user.age }}</p>
    </div>
    <div 
       @click="removeUser(user.id!)"
       class="absolute right-5 top-[34px] hover:scale-125 " >
      <Trash />
    </div>
  </div> 
  </transition-group>
</div>
</template>
<script setup lang="ts">
import { useUsersStore } from '@/stores/usersStoreByCompositionStyle'
import { storeToRefs } from 'pinia'
import Trash from '@/icons/Trash.vue'


const userStore = useUsersStore()
const { searchedUser, foundUsers, users } = storeToRefs(userStore)
const { removeUser } = userStore

</script>

<style scoped>
.list-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.list-enter-active {
  transition: all 0.3s ease;
}
.list-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.list-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.list-leave-active {
  transition: all 0.3s ease;
}
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>