<template>
<div class="w-[20vw] h-[7vw] border p-2 border-black mt-[20px] ">
    <p class="border rounded-full bg-blue-300 w-fit pl-2 pr-3 mb-2 mt-1 text-[13.4px]">™ChildComponent</p>
    <input 
         type="text" 
         placeholder="Type" 
         :value="modelValue"
         @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
         class="border border-black mt-[20px] focus:outline-none pl-1">
</div>
</template>
<script setup lang="ts">
const props = defineProps({
    modelValue: {
        type: String
    }
})
</script>