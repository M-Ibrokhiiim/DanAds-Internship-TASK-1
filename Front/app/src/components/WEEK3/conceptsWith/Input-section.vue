<template>
    <div class="absolute left-[38.5vw] w-[70px]" >
        <REMINDER />
    </div>
     <h1 class="font-bold font-serif text-[35px] text-blue-400 mb-[30px] mt-[40px]">TO-DO</h1>
    <div class="flex justify-center items-center text-center  ml-[20px ]">
      <input 
      autofocus
      v-model="newTask"
      @keypress.enter="addNewTasktoLists(newTask)"
      placeholder = "Type..."
      class="border-2 p-2 w-[350px] h-[40px] outline-none border-blue-400 rounded-md text-[20px] pl-[10px]"
      /> 
      <button  @click="addNewTasktoLists(newTask)" class="bg-blue-400 ml-2 h-[40px] w-[100px]   
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
import REMINDER from '../../WEEK-TAG/REMINDER.vue';

const emits = defineEmits(['newTask'])
const newTask = ref<string|undefined>()

function addNewTasktoLists(task:string |undefined){
    if(task?.trim() === '') return
    emits('newTask',task)
    newTask.value = undefined
}
provide('msg','Project developed depend only Vue 3 concepts.')

</script>