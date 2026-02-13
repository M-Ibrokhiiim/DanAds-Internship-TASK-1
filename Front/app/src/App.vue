<script setup lang="ts">
import Week2 from './components/Week2-Api-Wrapper.vue'
import Week3 from './components/WEEK3/Foundation.vue'
</script>

<template>
  <div class="border-[10px] p-10 rounded-2xl border-blue-300 mb-5 relative">
    <Week3/>
  </div>
  <div class="border-[10px] p-10 rounded-2xl border-blue-300">
    <Week2/>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
