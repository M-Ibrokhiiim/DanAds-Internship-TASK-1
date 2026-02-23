<template>
     <div>
        <TagForWeeks :tag = "'5'"/> 
     </div>
     <div class="mt-[20px] border-t border-cyan-300">
        <h1 class="text-[20px] mt-[30px]">This week we will  learn about PINIA</h1>
        <div>
            <p>Name: {{ userIbrokhiiim.user.name }}</p>
            <p>Surname: {{ userIbrokhiiim.user.surname }}</p>
            <p>Full Name: {{ userIbrokhiiim.fullName }}</p>
            <p>About: {{ userIbrokhiiim.aboutUser  }}</p>
            <p> New car: {{ userIbrokhiiim.user.newCar ? userIbrokhiiim.user.newCar : ''  }}</p>
             <form action="submit">
                <label for="">Car:</label>
                <input v-model="car" type="text" class="border border-black rounded-md p-1 focus:outline-none">
                <button @click.prevent="userIbrokhiiim.giveNewCar(car)" type="submit" class="bg-blue-200   items-center   ">Change car</button>
             </form>
        </div>
        
     </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import TagForWeeks from '../tags/TagForWeeks.vue';
import { usePractice } from '@/stores/practiceStore';

const car = ref<string >('')
const userIbrokhiiim = usePractice()

</script>