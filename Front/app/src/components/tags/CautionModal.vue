<template>
  <div v-if="isOpen">
    <div class="fixed w-[150vw] h-full left-[0px] top-0 opacity-[0.5] bg-black"></div>
    <div class="bg-white fixed right-[32.5vw] top-[20vw] z-[999] w-[35vw] h-[25vh] rounded-lg p-4 text-pretty">
      <p class="mt-[15px] text-[20px]">{{ msg }}</p>
      <button
        @click="emits('close', false)"
        class="bg-blue-400 focus:outline-none active:outline-none border-none transition-all duration-75 active:scale-75 text-[20px] h-[40px] items-center text-center mt-[4vw]"
      >
        <p class="-mt-2 text-white">
          OK
        </p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean
  }
})

const emits = defineEmits(['close'])
const msg = inject('msg')
</script>
