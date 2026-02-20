<template>
  <p class="h-[1.5px] w-[450px] mt-[40px] bg-blue-200"></p>

  <div class="mt-[20px] h-[35vh] overflow-scroll">
    <transition-group name="list" tag="ul">
      <ol 
        class="mt-[10px]" 
        v-for="(item, index) in listTasks" 
        :key="item.id"
        >

        <div class="flex w-[460px] items-center justify-between">
          <li class="text-[20px]">{{ index + 1 }}. {{ item.name }}</li>
          <button
            @click="removeTask(item.id)"
            class="w-[25px] h-[25px] bg-blue-400 text-white flex items-center justify-center 
                  text-center focus:outline-none border-none transition-all duration-75 
                  active:scale-50"
          >
            <span class="text-xl mt-[-2px]">x</span>
          </button>
        </div>
      </ol>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import useTODO from '@/composables/useTodoActions';

const { listTasks, removeTask } = useTODO()
</script>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

/* Start of enter & end of leave */
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Move animation when items change order */
.list-move {
  transition: transform 0.3s ease;
}

</style>