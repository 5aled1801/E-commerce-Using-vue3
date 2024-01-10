import { defineStore } from 'pinia'

export const useStore = defineStore('useStore', {
  state: () => ({
    CartItem: []
  }),
  actions: {
    additem(item) {
      let exist = false
      for (let i = 0; i < this.CartItem.length; i++) {
        if (this.CartItem[i].id === item.id) {
          this.CartItem[i].counter += item.counter
          exist = true
          break
        }
      }
      if (!exist) {
        this.CartItem.push(JSON.parse(JSON.stringify(item)))
      }
      localStorage.setItem('cart item', JSON.stringify(this.CartItem))
    },
    getcartitem() {
      if (localStorage.getItem('cart item')) {
        this.CartItem = JSON.parse(localStorage.getItem('cart item'))
      }
    },
    delitem(id) {
      for (let i = 0; i < this.CartItem.length; i++) {
        if (this.CartItem[i].id == id) {
          this.CartItem.splice(i, 1)
          break
        }
      }
      localStorage.setItem('cart item', JSON.stringify(this.CartItem))
    },
    setlocalstorage() {
      localStorage.setItem('cart item', JSON.stringify(this.CartItem))
    },
    restLocalStorage() {
      this.CartItem = []
      localStorage.removeItem('cart item')
    }
  }
})
