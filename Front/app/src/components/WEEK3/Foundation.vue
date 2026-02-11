<template>
    <TAG :tag ="tag"/>
  <div class="border-2  border-blue-200  rounded-xl h-[550px]">
    <h1 class="font-serif">TO-DO</h1>
    <input/>
    <span></span>
    <div>
     <ol class="list-decimal list-inside">
        <li class="ml-0">Run away</li>
        <li>Run away</li>
     </ol>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import TAG from '../WEEK-TAG/TAG.vue'
const tag = ref<string>('week3')
</script>