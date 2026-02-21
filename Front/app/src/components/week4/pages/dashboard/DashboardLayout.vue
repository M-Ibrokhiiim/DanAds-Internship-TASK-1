<template>
<main class="  w-[55%] ml-[9.5vw] h-[650px]  bg-gray-100  border-[8px] border-black justify-between rounded-[40px] shadow-xl overflow-hidden flex flex-col ">
    <span class="absolute bg-black w-[45px] h-[8px] rounded-[10px] left-[320px] top-[195px]"></span>
    <span class="absolute bg-black  w-[12px] border-black h-[12px] rounded-full left-[370px] top-[193px]"></span>
    <span class="absolute bg-black w-[80px] h-[8px] rounded-[10px] left-[460px] rotate-90 top-[320px]"></span>
    <span class="absolute bg-black w-[50px] h-[8px] rounded-[10px] left-[156px] rotate-90 top-[305px]"></span>
    <span class="absolute bg-black w-[50px] h-[8px] rounded-[10px] left-[156px] rotate-90 top-[370px]"></span>
     
     <div>
        <router-view />    
     </div>
    <DashboardMenu/>
</main>
</template>
<script setup lang="ts">
import DashboardMenu from './navigator/DashboardMenu.vue';
</script>