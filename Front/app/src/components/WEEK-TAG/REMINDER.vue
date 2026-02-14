<template>
 <div  class="w-[100%] flex justify-end  -ml-6">
      <p @click="isOpen = true" class="w-[25px] border-[2px] mt-4 cursor-pointer transition-all active:scale-75 duration-75 border-blue-300 h-[25px] text-center flex justify-center items-center rounded-[100px]">
        <QuestionMark/>
      </p>
       <CautionModal
        :isOpen="isOpen"
        @close="handleModalCloser"
       />
 </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import QuestionMark from '../../icons/Question-mark.vue';
import CautionModal from './CautionModal.vue';

const isOpen = ref<boolean>(false)
const handleModalCloser = (payload:boolean  )=>{
    isOpen.value = payload
}
</script>