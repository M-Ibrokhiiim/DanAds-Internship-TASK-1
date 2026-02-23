<template>
    <div class="absolute top-[60px] w-[100%]  flex justify-center">
                <div class="flex h-[90px] justify-between items-center   w-[80%]">
                    <input 
                            v-model="userStore.searchedUser"
                            type="text" 
                            placeholder="Search..." 
                            class="flex-grow px-4 py-2 text-gray-700 h-[44px]   border-r-0 focus:outline-none border-[2px] border-blue-400 shadow-xl rounded-l-full "
                     />
                    <button 
                        class="bg-blue-400 hover:bg-blue-500 h-[45px] active:bg-blue-400 focus:outline-none border-none text-white px-4 py-2 rounded-r-full transition"
                        >
                        Search
                    </button>
                </div>
    </div>
</template>
<script setup lang="ts">
import { useUsersStore } from '@/stores/usersStoreByCompositionStyle'

const userStore = useUsersStore()

</script>