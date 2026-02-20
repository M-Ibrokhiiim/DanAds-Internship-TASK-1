<template>
  <Transition>
    <component :is="Reminder"/>
  </Transition>
   
  <h1 class="font-bold font-serif text-[35px] text-blue-400 mb-[30px] mt-[10px]">
    TO-DO
  </h1>

  <div class="flex justify-center items-center text-center ml-[20px]">
    <input
      v-model="input"
      autofocus
      @keydown.enter="addTask(input)"
      placeholder="Type..."
      class="border-2 p-2 w-[350px] h-[40px] outline-none border-blue-400 rounded-md text-[20px] pl-[10px]"
    />

    <button
      @click="addTask(input)"
      class="bg-blue-400 ml-2 h-[40px] w-[100px] text-center text-[25px] font-semibold 
             flex items-center justify-center text-white outline-none border-none 
             transition-all duration-100 active:scale-75"
    >
      Add
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, Transition } from 'vue'
import useTODO from '@/composables/useTodoActions'
import Reminder from '@/components/tags/Reminder.vue'

const { input, addTask } = useTODO()
const reminderMSG = ref<string>('Project developed depend on how to use composables feature of Vue 3.')

provide('msg', reminderMSG)
</script>
