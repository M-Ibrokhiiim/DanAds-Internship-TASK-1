<template>
    <TAG :tag ="tag"/>
  <div class="border  border-blue-300  rounded-xl h-[550px] flex flex-col  items-center">
    <h1 class="font-bold font-serif text-[35px] text-blue-400 mb-[30px] mt-[20px]">TO-DO</h1>
    <div class="flex justify-center items-center text-center  ml-[20px ]">
      <input placeholder = "Type..."
      class="border-2 p-2 w-[350px] h-[40px] outline-none border-blue-400 rounded-md text-[20px] pl-[10px]"
      /> 
      <button class="bg-blue-400 ml-2 h-[40px] w-[100px]   text-center text-[25px] font-semibold flex outline-none active:outline-none  transition-all  active:border-none active:scale-75  active:duration-100  border-none text-white items-center  focus:outline-none">
        Add
      </button>
    </div>
    <p class="h-[1.5px] w-[450px] mt-[40px] bg-blue-200"></p>
  <div class="mt-[20px]  h-[40vh]  overflow-scroll">
     <ol class="list-decimal list-inside mt-[10px]">
        <div class="flex w-[460px] items-center justify-between">
          <li class="text-[20px]">Run away</li>
          <button class="w-[10px] focus:outline-none    border-none outline-none bg-blue-400 transition-all duration-75 active:scale-50 h-[25px]  flex items-center  justify-center text-center">
            <p class="text-xl text-white mt-[-2px] ">x</p>
          </button>
        </div>
     </ol>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import TAG from '../WEEK-TAG/TAG.vue'
const tag = ref<string>('week3')
</script>