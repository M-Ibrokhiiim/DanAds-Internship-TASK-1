<template>
  <div>
    <InputSection @new-task="handleNewTask" />
    <ListSection 
       :listTasks="listTasks" 
       @removal-task="removeTask" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Task } from '@/types/useWeek3Types'
import InputSection from './InputSection.vue'
import ListSection from './ListSection.vue'
 
const listTasks = ref<Task[]>([])

function handleNewTask(payload: string) {
  const isExist = listTasks.value.some(task => task.name.trim() === payload.trim())
  if (isExist) return

  const newTask: Task = {
    id: listTasks.value.length + 1,
    name: payload,
    createdAt: new Date()
  }

  listTasks.value.unshift(newTask)
}

function removeTask(payload: number) {
  listTasks.value = listTasks.value.filter(task => task.id !== payload)
}
</script>
