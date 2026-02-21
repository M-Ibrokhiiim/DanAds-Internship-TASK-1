<template>
  <div class="bg-gray-100 flex flex-col">

    <header class="bg-white px-4 py-3 flex items-center justify-end shadow-sm">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        class="w-9 h-9 rounded-full"
        alt="user"
      />
    </header>

    <main class="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">

      <div>
        <input
          type="text"
          placeholder="Search favourites..."
          class="w-full p-3 rounded-xl bg-white shadow text-sm outline-none"
        />
      </div>

      <section class="space-y-3">
        <div
          v-for="product in favouritedProducts"
          :key="product.id"
          class="bg-white p-3 rounded-xl shadow flex justify-between items-center"
        >
          <div class="flex items-center gap-3">
            <img
              :src="product.image"
              alt="product"
              class="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <p class="text-sm font-semibold">{{ product.name }}</p>
              <p class="text-xs text-gray-500">{{ product.price }}</p>
            </div>
          </div>
          <button class="text-red-500 text-sm" @click="removeFromFavourites(product.id)">
            Remove
          </button>
        </div>
      </section>

    </main>

    

  </div>
</template>

<script setup>
import { ref } from 'vue'
import pic1 from "@/pictures/pic1.jpeg"
import pic2 from "@/pictures/pic2.jpeg"
import pic3 from "@/pictures/pic3.jpeg"
import pic4 from "@/pictures/pic4.jpeg"

const favouritedProducts = ref([
  { id: 1, name: 'Wireless Headphones', price: '$120', image: pic1 },
  { id: 2, name: 'Smart Watch', price: '$220', image: pic2 },
  { id: 3, name: 'Gaming Mouse', price: '$55', image:  pic3},
  { id: 4, name: 'Bluetooth Speaker', price: '$80', image: pic4}
])

const removeFromFavourites = (id) => {
  favouritedProducts.value = favouritedProducts.value.filter(p => p.id !== id)
}
</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>