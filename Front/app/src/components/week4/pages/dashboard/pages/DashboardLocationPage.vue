<template>
  <div class="bg-gray-100 flex flex-col  ">

    <header class="bg-white px-4 py-3 flex items-center justify-end shadow-sm">
      <img
        src="https://randomuser.me/api/portraits/men/30.jpg"
        class="w-9 h-9 rounded-full"
        alt="user"
      />
    </header>

    <main class="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">

      <div>
        <input
          type="text"
          placeholder="Search locations..."
          class="w-full p-3 rounded-xl bg-white shadow text-sm outline-none"
        />
      </div>

      <section class="space-y-3">
        <div
          v-for="location in filteredLocations"
          :key="location.id"
          class="bg-white p-3 rounded-xl shadow flex justify-between items-center"
        >
          <div>
            <p class="text-sm font-semibold">{{ location.name }}</p>
            <p class="text-xs text-gray-500">{{ location.address }}</p>
          </div>
          <button class="text-blue-600 text-sm" @click="selectLocation(location)">
            Select
          </button>
        </div>
      </section>

    </main>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')

const locations = ref([
  { id: 1, name: 'New York Office', address: '123 5th Ave, NY' },
  { id: 2, name: 'London Branch', address: '45 Baker Street, London' },
  { id: 3, name: 'Tokyo HQ', address: 'Shibuya, Tokyo, Japan' },
  { id: 4, name: 'Sydney Office', address: '10 George St, Sydney' },
])

const filteredLocations = computed(() => {
  if (!searchQuery.value) return locations.value
  return locations.value.filter(loc =>
    loc.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const selectLocation = (location) => {
  alert(`You selected: ${location.name}`)
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