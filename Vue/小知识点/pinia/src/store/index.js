import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    name: 'hl',
    age:21,
    todos: [1,2,4],
    filter: 'all',
    nextId:0
  }),
  getters: {
    finish(state) {
      return state.todos.filter(todo => todo>3)
    }
  },
  actions: {
    addTodo() {
        return ++this.todos[0]
    },
    ageAdd() {
     return  this.age++
    }
  }
})
