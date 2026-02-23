<template>
      <TagForWeeks :tag = "'5'"/> 
      <BaseLayout @is-open-modal="OpenModal"/>
        <UsersList  
        @is-open-modal="OpenModal"
        v-if="isOpenModal"/>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import TagForWeeks from '../tags/TagForWeeks.vue'
import BaseLayout from './form/BaseLayout.vue'
import UsersList from './form/UsersListModal.vue';

const isOpenModal = ref<boolean>(false)

function OpenModal(payload: boolean) {
  isOpenModal.value = payload
}
 
</script>
<style scoped>
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
  transform-origin: center;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
.fade-enter-active, .fade-leave-active {
  transition: all 5s ease;  
}
</style>