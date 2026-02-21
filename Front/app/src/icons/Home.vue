<template>
    <div @click="homePageNav" class="border-2 cursor-pointer border-black w-[30px] h-[30px] rounded-full  p-1 flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="30px" width="25px" viewBox="0 0 24 24">
            <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path>
        </svg>
    </div>
    
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

function homePageNav(){
  router.push('/dashboard')
}
</script>