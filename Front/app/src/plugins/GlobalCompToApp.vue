<template>
    <div class="border-[2px] border-black rounded-2xl p-2 mb-[20px]">
        'Hello' is coming from  Global component via Plugin!
    </div>

    <button @click="()=>{toggle = !toggle}">
       Toggle
    </button>   
</template>     
<script setup lang="ts">
import { ref } from 'vue';

const toggle = ref<boolean>(false)
</script>