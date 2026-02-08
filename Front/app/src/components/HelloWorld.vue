<script setup  lang="ts">
import { onMounted } from 'vue';
import { useProducts } from '../composables/useProductsAPI';

const { getProducts, data } = useProducts()

onMounted(()=>{
  getProducts()
  // console.log(data.value)
})
 </script>
<template>
  <h1 v-for="product in data" :key="product.id">
    <a :href="product.path">{{ product.name.RU }}</a>
    <img :src="product.image" >
     </h1>
  <h1>API wrapper is working here ...</h1>
  <hl/> 
</template>