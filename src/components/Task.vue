<template>
   <div class="card w-4/5 flex mx-auto h-fit shadow rounded mb-2">
      <div 
      class="priority__color min-h-max w-2 rounded-l-sm"
      :class="getPriorityBGColor"
      ></div>
      <div class="content w-full ml-4 mr-4 mt-2 text-sm">
      <div class="w-full flex justify-between pb-3">
      <input
            @click="checkedIsDone(task.id, $event)"
            :checked="task.done"
            ref="checked"
            type="checkbox"
            class="
              bg-red-100
              border-black-300
              rounded-full
              text-red-400
              focus:ring-red-400
            "
          />
          <div @click="removeTask(task.id)" class="cursor-pointer">
            <Trash />
          </div>
      </div>

        <div class="w-full flex justify-between">
          <span class="title text-left">{{task.taskName}}</span>
          
        </div>
        <p class="description text-left">{{task.description}}</p>
        <div class="w-full flex justify-between">
          <div class="created text-left text-xs italic">{{task.createdAt.toLocaleString()}}</div>
          <div 
            class="priority__message text-left"
            :class="getPriorityColor"
          
          >{{task.priority}}</div>
        </div>
        
      </div>
    </div>
</template>

<script setup lang="ts">
import { Priority } from '../models';
import { computed, ref } from 'vue';
import { useToDoStore } from '../stores/toDo';
import Trash from './Trash.vue'
    const props = defineProps(['task'])
    const toDoListStore = useToDoStore()

    const checked = ref(props.task.done)
    const checkedIsDone = (id:number, e:any) => {

      toDoListStore.todoDone(id, checked.value.checked)
      checked.value.checked = !checked.value.checked;
    }

    const removeTask = (id:number) => {
      toDoListStore.removeTask(id)
    }
    const getPriorityBGColor = computed(() => {
        if(props.task.priority === Priority.LOW) return 'bg-blue-400'
        if(props.task.priority === Priority.MEDIUM) return 'bg-green-400'
        if(props.task.priority === Priority.HIGHT) return 'bg-red-400'
        if(props.task.priority === Priority.INMEDIATE) return 'bg-violet-700'
    })
    const getPriorityColor = computed(() => {
        if(props.task.priority === Priority.LOW) return 'text-blue-400'
        if(props.task.priority === Priority.MEDIUM) return 'text-green-400'
        if(props.task.priority === Priority.HIGHT) return 'text-red-400'
        if(props.task.priority === Priority.INMEDIATE) return 'text-violet-700'
    })
    
</script>

<style>

</style>