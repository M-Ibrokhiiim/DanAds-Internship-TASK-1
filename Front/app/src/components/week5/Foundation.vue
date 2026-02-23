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