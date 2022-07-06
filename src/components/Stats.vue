<template>
<div
      class="
        flex justify-around bg-white w-4/5 mx-auto rounded shadow
      "
    >
      <div class="stats">
        <p>{{allTasks}}</p>
        <span class="text-xs">All Tasks</span>
      </div>
      <div class="stats">
        <p>{{toDoListStore.allTodoPending()}}</p>
        <span class="text-xs">Pending Tasks</span>
      </div>
      <div class="stats">
        <p>{{toDoListStore.allTodoDone()}}</p>
        <span class="text-xs">Done Tasks</span>
      </div>
    </div>
</template>
<script setup lang="ts">
import { useToDoStore } from '../stores/toDo';
import { computed } from 'vue';
const toDoListStore = useToDoStore()

const allTasks = computed(() => {
    return toDoListStore.toDoList.length;
})

/* const doneTasks = computed(() => {
    const done = toDoListStore.toDoList.filter((task) => task.done)
    
    return done
}) */
</script>