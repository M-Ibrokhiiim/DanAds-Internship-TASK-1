<template>
<main class="  w-[55%] ml-[9.5vw] h-[650px]  bg-gray-100  border-[8px] border-black justify-between rounded-[40px] shadow-xl overflow-hidden flex flex-col ">
    <span class="absolute bg-black w-[40px] h-[8px] rounded-[10px] left-[320px] top-[195px]"></span>
     <div>
        <router-view />    
     </div>
    <DashboardMenu/>
</main>
</template>
<script setup lang="ts">
import DashboardMenu from './navigator/DashboardMenu.vue';
</script>