<template>
      <TagForWeeks :tag = "'5'"/> 
      <BaseLayout/>
      <UsersList v-if="true"/>
</template>
<script setup lang="ts">
import TagForWeeks from '../tags/TagForWeeks.vue'
import BaseLayout from './form/BaseLayout.vue'
import UsersList from './form/UsersListModal.vue';

 
</script>