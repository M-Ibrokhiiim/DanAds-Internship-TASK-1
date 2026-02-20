<template>
    <TagForWeeks :tag="'Week 4'"/>
    <Suspense>
      <template #default>  
        <SuspenseExecuterComponent>
           <div class="w-full flex flex-col items-center gap-8 ">
        <GlobalCompToApp/>
        <p 
          class="p-[20px]" 
          v-bgchange 
          v-changecontent="true" 
        >
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
        </SuspenseExecuterComponent>
      </template>
      <template #fallback>
        <span class="loader"></span>
      </template>
    </Suspense>
</template>
<script setup lang="ts">
import { inject } from 'vue'
import useActions from '@/composables/usePracticeWeek4Actions'
import GlobalCompToApp from '@/plugins/GlobalCompToApp.vue'
import TagForWeeks from '../tags/TagForWeeks.vue'
import SuspenseExecuterComponent from './SuspenseExecuterComponent.vue'

const { count, increaseCount, decreaseCount } = useActions()
const msg:string |undefined = inject('message')
 
</script>
<style scoped>   
.loader {
  position: relative;
  display: inline-block;
}
.loader::before {
  
  content: 'Loading';
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
  letter-spacing: 2px;
  display: inline-block;
  box-sizing: border-box;
  animation: floating 0.5s ease-out infinite alternate;
}
.loader::after {
  content: '';  
  width: 100%;
  height: 10px;
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
  left: 0;
  top: 100%;
  filter: blur(4px);
  border-radius: 50%;
  box-sizing: border-box;
  animation: animloader 1s ease-out infinite alternate;
}

@keyframes floating {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-25px);
  }
}

@keyframes animloader {
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1.2);
  }
}
</style>