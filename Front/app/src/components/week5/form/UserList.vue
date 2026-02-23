<template>
<div class="overflow-sroll h-[350px]">
  <div class="flex bg-white mb-5 shadow-lg hover:shadow-xl hover:scale-100 scale-95  transition-all  duration-150 cursor-pointer w-[480px] h-[70px] rounded-lg overflow-hidden"> 
    <img 
      src="https://randomuser.me/api/portraits/men/20.jpg" 
      alt="User" 
      class="w-22 h-22 object-cover object-center"
    />
       
    <div class="flex flex-col   items-start px-4">
      <h2 class="text-lg font-semibold text-gray-800">Ibrokhiim Muysinov</h2>
      <p class="text-gray-600">Age: 19</p>
    </div>
        <Trash class="absolute right-5 top-[34px] hover:scale-125 " />
  </div> 
  <div class="flex bg-white mb-5 shadow-lg hover:shadow-xl hover:scale-100 scale-95  transition-all  duration-150 cursor-pointer w-[480px] h-[70px] rounded-lg overflow-hidden"> 
    <img 
      src="https://randomuser.me/api/portraits/men/22.jpg" 
      alt="User" 
      class="w-22 h-22 object-cover object-center"
    />
       
    <div class="flex flex-col   items-start px-4">
      <h2 class="text-lg font-semibold text-gray-800">Ibrokhiim Muysinov</h2>
      <p class="text-gray-600">Age: 19</p>
    </div>
        <Trash class="absolute right-5 top-[34px] hover:scale-125 " />
  </div> 
  <div class="flex bg-white mb-5 shadow-lg hover:shadow-xl hover:scale-100 scale-95  transition-all  duration-150 cursor-pointer w-[480px] h-[70px] rounded-lg overflow-hidden"> 
    <img 
      src="https://randomuser.me/api/portraits/men/29.jpg" 
      alt="User" 
      class="w-22 h-22 object-cover object-center"
    />
       
    <div class="flex flex-col   items-start px-4">
      <h2 class="text-lg font-semibold text-gray-800">Ibrokhiim Muysinov</h2>
      <p class="text-gray-600">Age: 19</p>
    </div>
        <Trash class="absolute right-5 top-[34px] hover:scale-125 " />
  </div> 
  <div class="flex bg-white mb-5 shadow-lg hover:shadow-xl hover:scale-100 scale-95  transition-all  duration-150 cursor-pointer w-[480px] h-[70px] rounded-lg overflow-hidden"> 
    <img 
      src="https://randomuser.me/api/portraits/men/24.jpg" 
      alt="User" 
      class="w-22 h-22 object-cover object-center"
    />
       
    <div class="flex flex-col   items-start px-4">
      <h2 class="text-lg font-semibold text-gray-800">Ibrokhiim Muysinov</h2>
      <p class="text-gray-600">Age: 19</p>
    </div>
        <Trash class="absolute right-5 top-[34px] hover:scale-125 " />
  </div> 
  <div class="flex bg-white mb-5 shadow-lg hover:shadow-xl hover:scale-100 scale-95  transition-all  duration-150 cursor-pointer w-[480px] h-[70px] rounded-lg overflow-hidden"> 
    <img 
      src="https://randomuser.me/api/portraits/men/40.jpg" 
      alt="User" 
      class="w-22 h-22 object-cover object-center"
    />
       
    <div class="flex flex-col   items-start px-4">
      <h2 class="text-lg font-semibold text-gray-800">Ibrokhiim Muysinov</h2>
      <p class="text-gray-600">Age: 19</p>
    </div>
        <Trash class="absolute right-5 top-[34px] hover:scale-125 " />
  </div> 
</div>
</template>
<script setup lang="ts">
import Trash from '@/icons/Trash.vue';
</script>