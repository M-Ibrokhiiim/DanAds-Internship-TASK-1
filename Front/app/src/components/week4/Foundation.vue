<template>
    <TagForWeeks :tag="'Week 4'"/>
    <div class="w-full h-[200px]">
      <GlobalCompToApp/>
      <p class>
        {{ msg }}
      </p>
    </div>
</template>
<script setup lang="ts">
import { inject } from 'vue';
import GlobalCompToApp from '../../plugins/GlobalCompToApp.vue';
import TagForWeeks from '../tags/TagForWeeks.vue';

const msg:string |undefined = inject('message')

</script>