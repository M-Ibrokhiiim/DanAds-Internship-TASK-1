<template>
  <p class="h-[1.5px] w-[450px] mt-[40px] bg-blue-200"></p>

  <div class="mt-[20px] h-[35vh] overflow-scroll">
    <ol class="mt-[10px]" v-for="(item, index) in listTasks" :key="item.id">
      <div class="flex w-[460px] items-center justify-between">
        <li class="text-[20px]">{{ index + 1 }}. {{ item.name }}</li>
        <button
          @click="removeTask(item.id)"
          class="w-[25px] h-[25px] bg-blue-400 text-white flex items-center justify-center 
                 text-center focus:outline-none border-none transition-all duration-75 
                 active:scale-50"
        >
          <span class="text-xl mt-[-2px]">x</span>
        </button>
      </div>
    </ol>
  </div>
</template>

<script setup lang="ts">
import useTODO from '../../../composables/useTodoActions'

const { listTasks, removeTask } = useTODO()
</script>
