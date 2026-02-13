<template>
    <TAG :tag ="tag"/>
    <router-link to="/composable">Composables</router-link> |
    <router-link to="/conceptual">Concepts</router-link>
  <div class="border  border-blue-300  rounded-xl h-[550px] flex flex-col  items-center">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref,onMounted  } from 'vue'
import TAG from '../WEEK-TAG/TAG.vue'

const router = useRouter()
const tag = ref<string>('week3')
 
onMounted(()=>{
  router.push('/composable')
})

</script>