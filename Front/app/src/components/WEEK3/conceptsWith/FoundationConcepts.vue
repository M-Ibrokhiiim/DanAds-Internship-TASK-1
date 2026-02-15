<template>
    <div>
       <InputSection
        @new-task="handleNewTask"
       />
       <ListSection
         :listTasks = "listTasks"
         @removal-task="removeTask"
       />
    </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import InputSection from './Input-section.vue';
import ListSection from './List-section.vue';
 

interface Task{
    id:number,
    name:string,
    createdAt?:Date
}
const listTasks = ref<Task[]>([])

function handleNewTask(payload:string){
    const isExist:boolean = listTasks.value.some((task:Task) =>{
        return task.name.trim() === payload.trim()
    })

    if(isExist) return
    const newTask:Task = {id:listTasks.value.length + 1, name:payload, createdAt:new Date()}
    listTasks.value.push(newTask)
    listTasks.value.reverse()
    
    return
}

function removeTask(payload:number){
     listTasks.value = listTasks.value.filter((task:Task) =>{
        return task.id !== payload
     })
}
</script>