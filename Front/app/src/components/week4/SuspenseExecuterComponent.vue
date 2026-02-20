<template>
    <button 
        @click="()=>isVisible=!isVisible" 
        class="mb-[20px] bg-blue-300 text-white 
        border-none outline-none focus:outline-none
        shadow-xl
        ">
        <span v-if="!isVisible">Open</span>
        <span v-else>Close</span>
    </button>
        
    <transition name="fade"> 
        <slot v-if="isVisible"></slot> 
    </transition>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const isVisible = ref<boolean>(false)
 
await new Promise(resolve => setTimeout(resolve, 3000))   
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
 