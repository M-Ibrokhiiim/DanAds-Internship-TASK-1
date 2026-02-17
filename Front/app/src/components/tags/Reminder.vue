<template>
  <div class="w-[100%] flex justify-end -ml-6">
    <p
      @click="isOpen = true"
      class="w-[25px] h-[25px] mt-4 border-[2px] border-blue-300 rounded-[100px] 
             cursor-pointer flex items-center justify-center text-center 
             transition-all duration-75 active:scale-75"
    >
      <QuestionMark />
    </p>

    <CautionModal
      :isOpen="isOpen"
      @close="handleModalCloser"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QuestionMark from '../../icons/Question-mark.vue'
import CautionModal from './CautionModal.vue'

const isOpen = ref<boolean>(false)

const handleModalCloser = (payload: boolean) => {
  isOpen.value = payload
}
</script>
