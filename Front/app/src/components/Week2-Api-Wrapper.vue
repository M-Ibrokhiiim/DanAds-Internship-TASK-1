<script setup  lang="ts">
import { onMounted,ref } from 'vue'
import { useProducts } from '../composables/useProductsAPI'

import TAG from './WEEK-TAG/TAG.vue'

const {loading, getProducts, data } = useProducts()
const tag = ref<string>('week2')

onMounted(()=>{
  getProducts()
})
 </script>
<template>
  <div>
    <TAG :tag="tag"/>
     <h1 class="mb-10" v-if="loading">API wrapper is working here ...</h1>
     <h1 v-else v-for="product in data" :key="product.id">
      <a :href="product.path">{{ product.name.RU }}</a>
     <img :src="product.image" >
     </h1>
  </div>
</template>