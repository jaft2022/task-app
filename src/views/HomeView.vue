<template>
  <header class="bg-red-400 h-24 relative mb-5">
    <h2 class="text-white p-5">TASK APP <a href="https://mi-cv-web.netlify.app/" target="_blank">@JAFT</a></h2>
    <Stats />
  </header>
  <div class="inline-block relative w-30 pb-4">
    List
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
  </div>
</div>
  <!-- TASKS -->
  <main class="mb-32">
    <div v-if="tabDoneIsOpen && toDoListStore.allToDoDoneList().length < 1">
      Nothin To Show
    </div>
    <div v-if="tabDoneIsOpen" v-for="task in toDoListStore.allToDoDoneList()">
      <Task :task="task"/>
    </div>
    <div v-if="tabAllIsOpen && toDoListStore.toDoList.length < 1">
      Nothin To Show
    </div>
    <div v-if="tabAllIsOpen" v-for="task in toDoListStore.toDoList">
      <Task :task="task"/>
    </div>
    <div v-if="tabPendingIsOpen && toDoListStore.allToDoPendingList() < 1">
      Nothin To Show
    </div>
    <div v-if="tabPendingIsOpen" v-for="task in toDoListStore.allToDoPendingList()">
      <Task :task="task"/>
    </div>
    
  </main>

  <ModalTask v-if="openModalComponent" @closeModal="openModalComponent = false" @getFormValues="openModalComponent = false"/>
  <footer class="fixed bottom-0 mt-20 w-full">
    <div @click="openModal" class="w-10 ml-2 mb-3 h-10 rounded-full bg-blue-400 leading-10 text-white cursor-pointer hover:bg-sky-700 hover:w-20 ease-in-out duration-300">
      +
    </div>
    <div class="tabs w-full bg-red-400 text-white flex justify-around">
      <button 
        class="active:bg-sky-700 focus:bg-sky-700 focus:outline-none ease-in-out duration-300 cursor-pointer hover:bg-sky-700 py-5 w-full"
        :class="{'bg-sky-700':tabAllIsOpen}"
        @click="tabAll"
        >All</button>
      <button 
        class="focus:bg-sky-700 focus:outline-none ease-in-out duration-300 cursor-pointer hover:bg-sky-700 py-5 w-full"
        :class="{'bg-sky-700': tabPendingIsOpen}"
        @click="tabPending"
        >Pending</button>
      <button 
        class="focus:bg-sky-700 focus:outline-none ease-in-out duration-300 cursor-pointer hover:bg-sky-700 py-5 w-full" 
        :class="{'bg-sky-700': tabDoneIsOpen}"
        @click="tabDone"
      >Done</button>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { useToDoStore } from "../stores/toDo";
import { Priority } from "../models";
import { ref, computed } from 'vue';
import ModalTask from '../components/ModalTask.vue'
import Task from '../components/Task.vue';
import Stats from '../components/Stats.vue'


const toDoListStore = useToDoStore();
const openModalComponent = ref(false);

const tabAllIsOpen = ref(true);
const tabDoneIsOpen = ref(false);
const tabPendingIsOpen = ref(false);

const filterTodo = (e:any) => {
  console.log("Target: ", e.target.value)
}

const tabDone = () => {
  tabDoneIsOpen.value = true;
  tabAllIsOpen.value = false;
  tabPendingIsOpen.value = false;
  
}
const tabAll = () => {
  tabAllIsOpen.value = true;
  tabDoneIsOpen.value = false;
  tabPendingIsOpen.value = false;

}
const tabPending = () => {
  tabAllIsOpen.value = false;
  tabDoneIsOpen.value = false;
  tabPendingIsOpen.value = true;

}

const openModal = () => {
  openModalComponent.value = !openModalComponent.value
}
</script>