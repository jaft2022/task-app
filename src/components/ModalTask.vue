<template>
  <form @submit.prevent="getFormValues" class="w-full min-h-screen fixed top-0 z-10 bg-white">
    <h2 class="mb-10 mt-3">TASK FORM <a href="https://mi-cv-web.netlify.app/" target="_blank">@JAFT</a></h2>
    <span @click="closeModal" class="absolute top-10 right-10 cursor-pointer">X</span>
    <div class="flex flex-wrap mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-gray-700 text-xs
            font-bold
            mb-2
          "
          for="grid-first-name"
        >
          Title Task
        </label>
        <input
          v-model="taskData.taskName"
          class="
            appearance-none
            block
            w-full
            bg-gray-200
            text-gray-700
            border border-red-500
            rounded
            py-3
            px-4
            mb-3
            leading-tight
            focus:outline-none focus:bg-white
          "
          id="grid-first-name"
          type="text"
          placeholder="Title"
        />
        <p v-if="errorTaskName" class="text-red-500 text-xs italic">Add a title.</p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-gray-700 text-xs
            font-bold
            mb-2
          "
          for="grid-last-name"
        >
          Description Task
        </label>
        <textarea
          v-model="taskData.description"
          rows="6" cols="50"
          class="
            appearance-none
            block
            w-full
            bg-gray-200
            text-gray-700
            border border-gray-200
            rounded
            py-3
            px-4
            leading-tight
            focus:outline-none focus:bg-white focus:border-gray-500
          "
          id="grid-last-name"
          type="text"
          placeholder="Description"
        >
        </textarea>
        <p v-if="errorTaskName" class="text-red-500 text-xs italic">Add a Description.</p>

      </div>
      
    </div>

    <div class="flex flex-wrap mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-gray-700 text-xs
            font-bold
            mb-2
          "
          for="grid-state"
        >
          Priority
        </label>
        <div class="relative">
          <select
          v-model="taskData.priority"
            class="
              cursor-pointer
              block
              w-full
              bg-gray-200
              border border-gray-200
              text-gray-700
              py-3
              px-4
              pr-8
              rounded
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
            id="grid-state"
          >
            <option v-for="pr in Priority">{{pr}}</option>
          </select>
        </div>
      </div>
      <div class="w-full flex justify-between mx-5 md:w-1/3 px-3 mb-6 md:mb-0">
        <span
          class="
            block
            uppercase
            tracking-wide
            text-gray-700 text-xs
            font-bold
            mb-2
          "
          for="grid-zip"
        >
          DONE
        </span>
        <input
          v-model="taskData.done"
          type="checkbox"
          class="cursor-pointer border-black-300 rounded-full text-red-400 focus:ring-red-400"
        />
      </div>

      <div class="w-full mt-5 flex justify-between mx-5 md:w-1/3 px-3 mb-6 md:mb-0">
        <button class="mx-auto bg-blue-400 px-20 py-2 rounded text-white hover:bg-sky-700 hover:scale-125 ease-in-out duration-300">Save</button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Priority } from '../models'
import { useToDoStore } from '../stores/toDo'

    const emit = defineEmits(['closeModal', 'getFormValues']);


    
    const toDoListStore = useToDoStore();
    const errorTaskName = ref(false)
    const errorDescription = ref(false)
    const taskData = reactive({
      id: new Date().getTime(),
      taskName: '',
      description: '',
      createdAt: new Date(),
      done: false,
      priority: Priority.LOW,
    })
    
    function closeModal(){
        emit('closeModal')
    }
    function getFormValues(){
      if(taskData.taskName.trim() === '' && taskData.taskName.length < 4){
        errorTaskName.value = true
      }
      if(taskData.description.trim() === '' && taskData.description.length < 4){
        errorDescription.value = true
      }else {
        console.log(taskData)
        toDoListStore.addToDo(taskData)
        emit('getFormValues', true)
      }
    }
</script>

<style>

</style>
