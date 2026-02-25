<template>
  <div class="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
    <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-end"> 
      <div class="relative">
        <select
          v-model="locale"
          class="appearance-none bg-white border border-blue-200 text-gray-700 py-2   px-4 pr-8 hover:outline-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer"
        >
          <option value="uz">🇺🇿 Uzbek</option>
          <option value="en">🇬🇧 English</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20">
            <path d="M5.516 7.548l4.484 4.482 4.484-4.482L16 9l-6 6-6-6z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
</script>

<style scoped>

select:hover {
  border-color: #2563eb;  
}
</style>