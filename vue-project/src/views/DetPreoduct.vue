<template>
  <div class="detproduct">
    <v-container fluid class="mt-10">
      <v-row class="justify-center">
        <v-col cols="10" sm="10" class="h-100">
          <img
            :src="tab ? tab : singleproduct.thumbnail"
            alt=""
            width="100%"
            height="100%"
            style="height: 400px"
          />
          <v-tabs center-active v-model="tab">
            <v-tab v-for="(imge, i) in singleproduct.images" :key="i" :value="imge">
              <img :src="imge" alt="" width="20" />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="10" sm="10">
          <v-card elevation="0">
            <v-card-title
              class="px-0"
              style="font-size: 20px; white-space: pre-line; font-weight: 600"
              >({{ singleproduct.title }}) Sample- {{ singleproduct.category }} For
              sale</v-card-title
            >

            <div class="rating-parent">
              <v-rating
                v-model="singleproduct.rating"
                half-increments
                size="x-small"
                color="orange"
                readonly
              ></v-rating>
            </div>
            <div class="brand-stock" style="color: gray; font-size: 14px  margin: 10px 0;">
              <v-card-text class="px-0">
                {{ singleproduct.description }}
              </v-card-text>
              <span>Brand: {{ singleproduct.brand }}</span>
              <br />
              <span>Avilability: {{ singleproduct.stock > 0 ? 'In Stock' : 'Out of Stock' }}</span>
            </div>

            <br />
            <del>${{ singleproduct.price }} </del><span> from </span>
            <span style="font-weight: bold">
              ${{
                Math.ceil(
                  singleproduct.price -
                    singleproduct.price * (singleproduct.discountPercentage / 100)
                )
              }}
            </span>
            <br />
            <span style="color: gray; font-size: 14px; margin-top: 10px">Quantity</span>
            <div
              class="cou justify-center"
              style="
                border: 1px solid gray;
                padding: 7px;
                width: 40%;
                margin-top: 7px;
                border-radius: 17px;
                text-align: center;
                margin: 10px 0;
              "
            >
              <v-icon @click="counter <= 1 ? counter : counter--" style="font-size: 15px">
                mdi-minus
              </v-icon>
              <input type="number" :value="counter" style="width: 75px; text-align: center" />
              <v-icon @click="counter++" style="font-size: 15px"> mdi-plus </v-icon>
            </div>
            <v-card-text>
              subtotale: ${{
                Math.ceil(
                  singleproduct.price -
                    singleproduct.price * (singleproduct.discountPercentage / 100)
                ) * counter
              }}
            </v-card-text>
            <v-card-action
              ><v-btn
                variant="outline"
                style="
                  border: 1px solid black;
                  border-radius: 20px;
                  margin-top: 10px;
                  color: white;
                  background-color: black;
                  text-transform: none;
                "
                height="45px"
                width="300px"
                @click="addCartitem(singleproduct)"
                >Add to card</v-btn
              >
            </v-card-action>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { useProductStore } from '@/stores/ProductMoudels'
import { useStore } from '../stores/CartItem'
import { mapActions, mapState } from 'pinia'

export default {
  name: 'DetProduct',
  methods: {
    ...mapActions(useProductStore, ['getsingleProduct']),
    ...mapActions(useStore, ['additem']),
    addCartitem(item) {
      item.counter = this.counter
      this.additem(item)
    }
  },
  computed: {
    ...mapState(useProductStore, ['singleproduct'])
  },
  async mounted() {
    await this.getsingleProduct(this.$route.params.productId)
  },
  data() {
    return {
      tab: '',
      counter: 1
      //   product: {
      //     id: 1,
      //     title: 'iPhone 9',
      //     description: 'An apple mobile which is nothing like apple',
      //     price: 549,
      //     discountPercentage: 12.96,
      //     rating: 4.69,
      //     stock: 94,
      //     brand: 'Apple',
      //     category: 'smartphones',
      //     thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      //     images: [
      //       'https://i.dummyjson.com/data/products/1/1.jpg',
      //       'https://i.dummyjson.com/data/products/1/2.jpg',
      //       'https://i.dummyjson.com/data/products/1/3.jpg',
      //       'https://i.dummyjson.com/data/products/1/4.jpg',
      //       'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
      //     ]
      //   }
    }
  }
}
</script>
