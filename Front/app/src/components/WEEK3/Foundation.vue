<template>
    <TAG :tag ="tag"/>
  <div class="border  border-blue-300  rounded-xl h-[550px] flex flex-col  items-center">
    <InputPart/>
    <ListsPart/>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import TAG from '../WEEK-TAG/TAG.vue'
import InputPart from './Input-Part.vue';
import ListsPart from './Lists-Part.vue';
const tag = ref<string>('week3')
</script>