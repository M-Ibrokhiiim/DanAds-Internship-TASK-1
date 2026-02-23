<template>
     <div>
        <TagForWeeks :tag = "'5'"/> 
     </div>
     <div class="mt-[20px] border-t border-cyan-300">
        <h1 class="text-[20px] mt-[30px]">This week learn about PINIA</h1>
     </div>
</template>
<script setup lang="ts">
import TagForWeeks from '../tags/TagForWeeks.vue';
</script>