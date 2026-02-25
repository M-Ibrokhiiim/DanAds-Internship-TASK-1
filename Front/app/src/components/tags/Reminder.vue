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

     <transition name="fade">
        <CautionModal
          :isOpen="isOpen"
          @close="handleModalCloser"
        />     
     </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QuestionMark from '@/icons/Question-mark.vue'
import CautionModal from './CautionModal.vue'

const isOpen = ref<boolean>(false)

const handleModalCloser = (payload: boolean) => {
  isOpen.value = payload
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>