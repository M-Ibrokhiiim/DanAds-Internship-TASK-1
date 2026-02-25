<template>
   <TagForWeeks :tag="'2'"/>
     <div class="w-[40vw] text-left p-5 border border-black">
        <p class="border rounded-full bg-blue-300 w-fit pl-2 pr-3 mb-4 text-[14px]">™ParentComponent</p>
        <h1 class="text-xl">Child comp value input value here by V-Model: {{ inputValue }} </h1>
        <VModelChild v-model="inputValue"/>
     </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import VModelChild from './vModelChild.vue'
import TagForWeeks from '../tags/TagForWeeks.vue';
const inputValue = ref('')
</script>