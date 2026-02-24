<template>
    <div  class=" absolute bottom-[30px] w-full flex justify-end">
         <button @click="userStore.$reset()" class="mr-[60px] h-[30px] flex  bg-blue-400 focus:outline-none border-none transition-all active:scale-75 duration-75 rounded-md text-white items-center">Clear</button>
    </div>
</template>
<script setup lang="ts">
import { useUsersStore } from '@/stores/usersStoreByCompositionStyle';

const userStore = useUsersStore()
</script>