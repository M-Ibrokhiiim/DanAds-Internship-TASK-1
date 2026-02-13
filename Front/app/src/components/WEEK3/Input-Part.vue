<template>
     <REMINDER/>
     <h1 class="font-bold font-serif text-[35px] text-blue-400 mb-[30px] mt-[20px]">TO-DO</h1>
    <div class="flex justify-center items-center text-center  ml-[20px ]">
      <input 
      autofocus
      @keydown.enter="addTask(input)"
      v-model="input"
      placeholder = "Type..."
      class="border-2 p-2 w-[350px] h-[40px] outline-none border-blue-400 rounded-md text-[20px] pl-[10px]"
      /> 
      <button @click="addTask(input)" class="bg-blue-400 ml-2 h-[40px] w-[100px]   
                    text-center text-[25px] font-semibold 
                    flex outline-none active:outline-none  
                    transition-all  active:border-none active:scale-75 
                    active:duration-100  border-none text-white
                    items-center  focus:outline-none">
        Add
      </button>
    </div>
</template>
<script setup lang="ts" >
import { ref,provide } from 'vue';
import useTODO  from '../../composables/useTodoActions'
import REMINDER from '../WEEK-TAG/REMINDER.vue';

const { input,addTask } = useTODO()
const reminderMSG = ref<string>('Project developed depend on how to use composables feature of Vue 3.')

provide('msg',reminderMSG)
</script>