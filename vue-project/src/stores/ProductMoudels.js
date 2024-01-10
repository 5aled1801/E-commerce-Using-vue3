/* eslint-disable no-undef */
import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    flashDeals: [],
    newproduct: [],
    TopPhone: [],
    homedec: [],
    categoroes: [
      {
        title: 'Smartphones',
        route: 'smartphones'
      },
      {
        title: 'Laptops',
        route: 'laptops'
      },
      {
        title: 'Home Decoration',
        route: 'home-decoration'
      },
      {
        title: 'Mens Shirts',
        route: 'mens-shirts'
      },
      {
        title: 'Lighting',
        route: 'lighting'
      },
      {
        title: 'Groceries',
        route: 'groceries'
      }
    ],
    categoryProduct: [],
    singleproduct: ''
  }),
  actions: {
    async getFlashDeal() {
      await axios
        .get('https://dummyjson.com/products')
        .then((res) => {
          this.flashDeals = res.data.products.slice(0, 8)
          this.newproduct = res.data.products.filter((el) => el.category === 'laptops')
          this.TopPhone = res.data.products.filter((el) => el.category === 'smartphones')

          this.homedec = res.data.products.filter((el) => el.category === 'home-decoration')
        })
        .catch((err) => console.log(err))
    },
    async getCategoryProduct(category) {
      await axios.get(`https://dummyjson.com/products/category/${category}`).then((res) => {
        console.log((this.categoryProduct = res.data))
        this.categoryProduct = res.data
      })
    },
    async getsingleProduct(productId) {
      await axios.get(`https://dummyjson.com/products/${productId}`).then((res) => {
        console.log((this.singleproduct = res.data))
        console.log(this.singleproduct.thumbnail)
        this.singleproduct = res.data
      })
    }
  }
})
