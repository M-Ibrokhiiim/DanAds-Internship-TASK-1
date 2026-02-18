<template>
    <TagForWeeks :tag="'Week 4'"/>
    <div class="w-full flex flex-col items-center gap-8 ">
      <GlobalCompToApp/>
      <p class="p-[20px]" v-bgchange v-changecontent="true" >
        {{ msg }}
      </p>

      <div class="w-[200px] h-[150px] flex flex-col gap-6 justify-center">
        <p class="text-xl">{{ count }}</p>
      <div class="flex justify-around">
        <button @click="decreaseCount" v-designbutton>-</button>
        <button @click="increaseCount" v-designbutton>+</button>
       </div>
      </div>
    </div>
</template>
<script setup lang="ts">
import { inject } from 'vue'
import useActions from '../../composables/usePracticeWeek4Actions'
import GlobalCompToApp from '../../plugins/GlobalCompToApp.vue'
import TagForWeeks from '../tags/TagForWeeks.vue'

const { count, increaseCount, decreaseCount } = useActions()

const msg:string |undefined = inject('message')

</script>