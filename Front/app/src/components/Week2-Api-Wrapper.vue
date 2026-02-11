<script setup  lang="ts">
import { onMounted } from 'vue';
import { useProducts } from '../composables/useProductsAPI';

const {loading, getProducts, data } = useProducts()

onMounted(()=>{
  getProducts()
  // console.log(data.value)
})
 </script>
<template>
  <div>
    <h1 class="uppercase text-center rounded-[40px]  border-[5px]  mb-[30px] border-black w-[15vw]  bg-blue-100">Week2</h1>
     <h1 class="mb-10" v-if="loading">API wrapper is working here ...</h1>
     <h1 v-else v-for="product in data" :key="product.id">
      <a :href="product.path">{{ product.name.RU }}</a>
     <img :src="product.image" >
     </h1>
  </div>
</template>