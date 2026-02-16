<template>
  <h1
    class="uppercase text-center rounded-[40px] border-[5px] mb-[30px] border-black 
           w-[15vw] text-[35px] bg-blue-100"
  >
    {{ tag }}
  </h1>
</template>

<script setup lang="ts">
const props = defineProps({
  tag: {
    type: String,
    required: true
  }
})
</script>
