<template>
  <TagForWeek :tag="tag" />

  <header class="flex justify-center">
    <div class="w-[60%] flex justify-around font-sans mb-2">
      <router-link to="/" active-class="underline" class="cursor-pointer">
        Composables
      </router-link>
      <span class="text-blue-200">|</span>
      <router-link to="/conceptual" active-class="underline" class="cursor-pointer">
        Concepts
      </router-link>
    </div>
  </header>

  <div class="border border-blue-300 rounded-xl h-[550px] flex flex-col items-center">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref  } from 'vue'
import TagForWeek from '../tags/TagForWeeks.vue'

const tag = ref('week3')
</script>
