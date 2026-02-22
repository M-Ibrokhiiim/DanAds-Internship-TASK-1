<template>
    <TagForWeeks :tag="'Week 4'"/>
    <FormLayout/>
     <div class=" mb-[30px] flex justify-center">
        <nav class="w-[50%] flex justify-between  font-semibold ">
          <router-link 
            v-for="route in Week4HeaderRoutes"
            @click = "routeChose"
            :to ="route.path" 
            class="w-[130px] rounded-[20px] border  focus:border-blue-400"
          >
            {{ route.name }}
          </router-link> 
        </nav>
     </div>
     <div>
      <span v-if="!isRouteClicked" class="insight"></span>

     </div>
     
    <router-view name="week4Layout"></router-view>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter}  from 'vue-router'
import TagForWeeks from '../tags/TagForWeeks.vue'
import { Week4HeaderRoutes } from '@/router/week4.header.routes';

const Route = useRoute()
const router = useRouter()
const isRouteClicked = ref<boolean>(false)
 
function routeChose(){
  if(Route.path == '/form' || '/dashboard'){
    isRouteClicked.value = true
  }

}



 
onMounted(()=>{
     router.push('/')
})
</script>
<style scoped>   
 
.insight{
    font-size: 48px;
    font-weight: bold;
    letter-spacing: 2px;
    font-family: Arial, Helvetica, sans-serif;
    color: #7b95dd;
    animation: smokeOut 1.5s ease-in infinite alternate;
    text-shadow: 0 0 1px white;
  }
  .insight:before {
    content: "Click to routers";
  }

  @keyframes smokeOut {
    100% {
      opacity: 0.08;
      filter: blur(5px);
      letter-spacing: 4px;
    }
  }

  
</style>