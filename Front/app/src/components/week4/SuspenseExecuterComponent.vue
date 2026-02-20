<template>
  <button
        class="mb-[40px] mt-[-20px] bg-blue-300 text-white 
        border-none outline-none focus:outline-none
        shadow-xl
        "> 
          <span v-if="!isVisibleTab"    @click="()=>isVisibleTab = !isVisibleTab">Open Page</span>
          <span v-else @click="()=>isVisibleTab = !isVisibleTab">Open Tabs</span>
  </button> 
        
    <transition name="fade">  
         <div v-show="!isVisibleTab" v-if="!isVisibleTab" >
            <div class=" w-[20vw] flex justify-around ml-[10vw] mb-[50px]">

                 <a 
                 @click="tabsSwiter(1)"
                 class="h-[20px] flex items-center cursor-pointer" 
                 :class="isTab1Checked ? 'underline' :'' "
                 >
                 Register
                </a>
                 <a 
                 @click="tabsSwiter(2)"
                 class="h-[20px] flex items-center cursor-pointer"
                 :class="isTab2Checked ? 'underline' :'' "
                 >
                 Setting
                </a>

            </div>
            
             <transition name="fade">
                <keep-alive>
                    <component :is="activeComponent" v-show="isVisible"/>     
                </keep-alive>
             </transition>
         </div>
         <slot v-else></slot>          
    </transition>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Tab1 from './tabs/Tab1.vue';
import Tab2 from './tabs/Tab2.vue';

const isTab1Checked = ref<boolean>(false)
const isTab2Checked = ref<boolean>(false)
const isVisible = ref<boolean>(false)
const isVisibleTab = ref<boolean>(false)    
    
const activeComponent = ref()


// Tabs switcher
function tabsSwiter(id:number) {
     if(id ===1){
        isTab1Checked.value = true  
        isTab2Checked.value = false
        
        isVisible.value =true
        activeComponent.value  = Tab1
    }else{
        isTab1Checked.value = false
        isTab2Checked.value = true
        
        isVisible.value =true
        activeComponent.value = Tab2
    }
}    
 
await new Promise(resolve => setTimeout(resolve, 1000))   

onMounted(() => {
    isTab1Checked.value = true      
    isVisible.value =true
    activeComponent.value  = Tab1
})
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

</style>
 