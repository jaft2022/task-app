import { defineStore } from "pinia";
import { ToDo, Priority } from "../models";
  
export const useToDoStore = defineStore('toDoStore', {
    state: () => ({
        toDoList: <ToDo[]>[]
    }),
    
    actions: {
        addToDo(toDo: ToDo){
            this.toDoList = [...this.toDoList, toDo]
        },
        filterByPriority(flag: Priority){
            this.toDoList.filter((todo) => todo.priority === flag)
        },
        todoDone(id: number, done: boolean){
            const index = this.toDoList.findIndex(toDo => toDo.id === id);
            this.toDoList[index].done = done;
        },
        allTodoDone(){
            const done = this.toDoList.filter((task) => task.done)
            return done.length ?? 0;
        },
        allTodoPending(){
            const total = this.toDoList.length - this.allTodoDone()
            return total
        },
        allToDoDoneList(){
            const total = this.toDoList.filter(todo => todo.done)
            return total
        },
        allToDoPendingList(){
            return this.toDoList.filter(todo => !todo.done)
        },
        removeTask(id:number){
            const index = this.toDoList.findIndex(toDo => toDo.id === id);
            this.toDoList.splice(index, 1)
        }

    },
    persist: true,

}) 