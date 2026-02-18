<template>
  <p class="h-[1.5px] w-[450px] mt-[40px] bg-blue-200"></p>

  <div class="mt-[20px] h-[35vh] overflow-scroll">
    
      <ol class="mt-[10px]">
        <transition-group name="todo" tag="ul" class="todo-list">
        <div
          class="flex w-[460px] items-center justify-between"
          v-for="(task, index) in listTasks"
          :key="task.id"
        >
          <li class="text-[20px]">{{ index + 1 }}. {{ task.name }}</li>
          <button
            @click="removeTask(task.id)"
            class="w-[25px] h-[25px] bg-blue-400 text-white flex items-center justify-center 
                  text-center focus:outline-none border-none transition-all duration-75 
                  active:scale-50"
          >
            <span class="text-xl mt-[-2px]">x</span>
          </button>
        </div>
        </transition-group>
      </ol>
  </div>
</template>

<script setup lang="ts">
interface Task {
  id: number
  name: string
  createdAt?: Date
}

const props = defineProps({
  listTasks: Array as () => Task[] | undefined
})

const emits = defineEmits(['removalTask'])

function removeTask(id: number) {
  emits('removalTask', id)
}
</script>
<style scoped>  
/* ENTER */
.todo-enter-active {
  transition: all 0.35s ease-out;
}

.todo-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.todo-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* LEAVE */
.todo-leave-active {
  transition: all 0.25s ease-in;
  position: absolute;
}

.todo-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.todo-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

/* MOVE */
.todo-move {
  transition: transform 0.3s ease;
}

</style>
