<template>
   <main class="bg-white p-2 rounded-[20px] shadow-[0_-8px_30px_rgba(0,0,0,0.25)]">
        <div class="flex justify-between mb-4">
            <Home />
            <Favourited />
            <Location />
            <User />
        </div>
   </main>
</template>
<script setup lang="ts">
import Home from '@/icons/Home.vue'
import Favourited from '@/icons/Favourited.vue'
import Location from '@/icons/Location.vue'
import User from '@/icons/User.vue'
</script>