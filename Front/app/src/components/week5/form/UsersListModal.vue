<template>
 
<div class="bg-black  fixed w-[100vw] h-[100vh] opacity-[0.5] left-0 top-0 z-[999]"></div>
<div class="w-[600px] h-[600px] z-[9999] bg-white overflow-hidden top-[140px] left-[30vw] border-[7px]
            border-blue-300 fixed  rounded-tl-[100px] rounded-br-[100px]">
            <div 
             @click="$emit('isOpenModal', false)"
             class="absolute right-[20px] top-4 cursor-pointer transition-all active:scale-75 duration-75">
                <Cross />
            </div>
            <SearchBar/>
            <UserList class="absolute top-[150px] left-[50px]  overflow-scroll"/>
</div>

</template>
<script setup lang="ts">
import Cross from '@/icons/Cross.vue'
import SearchBar from './SearchBar.vue';
import UserList from './UserList.vue';

const emits = defineEmits([ 'isOpenModal'])
</script>
<style scoped>

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
  transform-origin: center;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
.fade-enter-active, .fade-leave-active {
  transition: all 5s ease;  
}
</style>