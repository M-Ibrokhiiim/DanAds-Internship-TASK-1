<script setup lang="ts">
import { ref, onMounted} from 'vue'
import { useProducts } from '@/composables/useProductsAPI'
import TagForWeek from './tags/TagForWeeks.vue'

const { loading, getProducts, data } = useProducts()
const tag = ref<string>('week 2')

onMounted(() => {
  getProducts()
})
</script>

<template>
  <div>
    <TagForWeek :tag="tag" />
    <h1 
      class="mb-10" 
      v-if="loading"
    >
      API wrapper is working here ...
    </h1>
    <h1 
        v-else 
        v-for="product in data" 
        :key="product.id"
    >
      <a :href="product.path">{{ product.name.RU }}</a>
      <img :src="product.image" />
    </h1>
  </div>
</template>
