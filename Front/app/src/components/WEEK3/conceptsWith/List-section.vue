<template>
 <p class="h-[1.5px] w-[450px] mt-[40px] bg-blue-200"></p>
  <div class="mt-[20px]  h-[35vh]  overflow-scroll">
     <ol class=" mt-[10px]">
        <div class="flex w-[460px] items-center justify-between" v-for="(task,index) in listTasks" :key="task.id ">
          <li class="text-[20px]">{{index+1}}. {{ task.name }}</li>
          <button @click="removeTask(task.id)"    class="w-[10px] focus:outline-none    border-none outline-none bg-blue-400 transition-all duration-75 active:scale-50 h-[25px]  flex items-center  justify-center text-center">
            <p class="text-xl text-white mt-[-2px]" >x</p>
          </button>
        </div>
     </ol>
    </div>
</template>
<script setup lang="ts">
interface Task{
    id:number,
    name:string,
    createdAt?:Date
}
const props = defineProps({
    listTasks:Array as() => Task[] |undefined
})

const emits = defineEmits(['removalTask'])
function removeTask(id:number){
  emits('removalTask',id)
  return
}
</script>