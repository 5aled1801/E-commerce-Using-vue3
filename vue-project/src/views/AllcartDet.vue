<template>
  <div class="app">
    <v-container fluid>
      <v-row>
        <v-col cols="12"
          ><v-breadcrumbs :items="['Home', 'Cart Page']" style="font-size: 12px">
            <template v-slot:divider>
              <v-icon icon="mdi-chevron-right"></v-icon>
            </template> </v-breadcrumbs
        ></v-col>

        <v-col cols="12">
          <v-card v-if="!CartItem.length" elevation="0">
            <v-card-text class="mx-5" style="color: gray"
              >Free shipping for all order over $10000!</v-card-text
            >
            <v-card-text class="text-center" style="color: gray">Your cart is empty</v-card-text>
            <v-container>
              <v-card-actions class="justify-center align-center"
                ><v-btn
                  variant="outlined"
                  rounded
                  class="py-5 w-50 h-95"
                  style="border-color: gray; align-content: center; font-size: 19px"
                  to="/"
                  >Continue Shopping</v-btn
                ></v-card-actions
              ></v-container
            >
          </v-card>
          <v-card elevation="0" v-if="CartItem.length">
            <div class="prog-parent pt-10 position-relative">
              <svg
                class="icon-shipping-truck"
                viewBox="0 0 40.55 24"
                :style="`left: calc(${
                  parseInt((calcTotal() / 10000) * 100) < 100
                    ? parseInt((calcTotal() / 10000) * 100)
                    : 100
                }% - 40px);
        width: 40px;
        position: absolute;
        bottom: 1px;
        z-index: 1;
        transition:0.2s
        `"
                fill="#f44336"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="truck-body"
                      d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
                    ></path>
                    <path
                      class="truck-body"
                      d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
                    ></path>
                    <path
                      fill="white"
                      class="wheel"
                      d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                    ></path>
                    <path
                      fill="white"
                      class="wheel"
                      d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
                    ></path>
                  </g>
                </g>
              </svg>
              <v-progress-linear
                :model-value="
                  parseInt((calcTotal() / 10000) * 100)
                    ? parseInt((calcTotal() / 10000) * 100)
                    : 100
                "
                height="10px"
                striped
                color="red"
                raised
                class=""
              ></v-progress-linear>
            </div> </v-card
        ></v-col>
        <v-col cols="12" v-if="CartItem.length">
          <v-card-text v-if="10000 - calcTotal() > 0">
            Only ${{ 10000 - calcTotal() }} away from Free shipping</v-card-text
          >
          <v-card-text v-if="10000 - calcTotal() <= 0">
            Your order now is included free
          </v-card-text>
        </v-col>

        <v-col cols="9" v-if="CartItem.length">
          <v-table>
            <thead>
              <tr>
                <th class="text-left">Product</th>
                <th class="text-left">Price</th>
                <th class="text-left">Quantity</th>
                <th class="text-left">Toptal</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="item in CartItem" :key="item.id">
                <!-- <tr elevation="0" class="d-flex" style="height: 120px; font-size: 13px"> -->
                <td style="width: 55%">
                  <v-row>
                    <v-col style="display: flex">
                      <img :src="item.thumbnail" width="50%" alt="" />
                      <v-card elevation="0">
                        <v-card-title style="font-size: 14px; white-space: pre-line"
                          >{{ item.title }} sample-{{ item.category }}</v-card-title
                        >
                        <v-card-text style="font-size: 14px"> {{ item.category }} </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </td>
                <td style="width: 15%">
                  ${{ Math.ceil(item.price - item.price * (item.discountPercentage / 100)) }}
                </td>
                <td style="width: 15%">
                  <div
                    class="cou"
                    style="
                      border: 1px solid gray;

                      margin-top: 7px;
                      border-radius: 17px;
                      text-align: center;
                      margin: 10px 0;
                    "
                  >
                    <v-icon
                      @click="item.counter <= 1 ? item.counter : item.counter--"
                      style="font-size: 15px"
                    >
                      mdi-minus
                    </v-icon>
                    <input
                      type="number"
                      :value="item.counter"
                      style="width: 35px; text-align: center"
                    />
                    <v-icon @click="item.counter++" style="font-size: 15px"> mdi-plus </v-icon>
                  </div>
                </td>
                <td style="width: 15%">
                  ${{
                    Math.ceil(item.price - item.price * (item.discountPercentage / 100)) *
                    item.counter
                  }}
                </td>
                <v-icon @click="delitem(item.id)">mdi-close</v-icon>
              </tr>
            </tbody>
          </v-table>
          <v-col cols="12" class="d-flex align-center m">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 179.94 179.96"
              class="icon icon-shield-check"
              fill="black"
              width="20"
            >
              <path
                d="M90,0,5,42.78C13.73,105.26,38.14,154.32,90,180c51.83-25.64,76.25-74.7,85-137.18Z"
              ></path>
              <polygon
                fill="white"
                class="cls-1"
                points="149.83 67.57 134.81 52.55 79.31 108.05 49.74 78.48 34.72 93.5 79.15 137.94 79.31 137.78 79.47 137.94 149.83 67.57"
              ></polygon>
            </svg>
            <span style="margin-left: 5px; color: gray">Secure Shopping Guarantee</span>
          </v-col>
          <v-col cols="12">
            <img src="../assets/images/cart-page-cards.webp" width="300" alt="" />
          </v-col>
        </v-col>
        <v-col cols="3" v-if="CartItem.length">
          <h3>ORDER SUMMARY</h3>
          <hr style="height: 3px; background-color: black" />
          <div style="display: flex; justify-content: space-between; padding: 10px">
            <span>Subtotal</span><span> $ {{ calcTotal() }}</span>
          </div>
          <hr />
          <h4 style="font-weight: 500">Get shopping Estimate:</h4>
          <select
            name="country"
            id="countrySelect"
            aria-controls
            style="
              width: 90%;
              border: 1px solid gray;
              padding: 10px;
              margin-top: 21px;
              border-radius: 30px;
              font-size: 13px;
            "
          >
            <option value="1">United States</option>
            <option value="2">Egypt</option>
            <option value="3">UAE</option>
          </select>
          <div style="display: flex">
            <select
              name="country"
              id="countrySelect"
              aria-controls
              style="
                width: 45%;
                border: 1px solid gray;
                padding: 10px;
                margin-top: 21px;
                border-radius: 30px;
                font-size: 13px;
              "
            >
              <option value="1">United States</option>
              <option value="2">Egypt</option>
              <option value="3">UAE</option>
            </select>
            <input
              type="text"
              placeholder="Postal code"
              style="
                border: 1px solid gray;
                width: 45%;
                padding-left: 5px;
                margin-top: 21px;
                margin-left: 5px;
                border-radius: 30px;
                font-size: 13px;
              "
            />
          </div>
          <v-btn rounded color="#0c86e6" class="mt-5 w-100" style="height: 50px"
            >Calculate Shipping</v-btn
          >
          <hr style="margin: 15px 0" />
          <h4 style="font-weight: 500">Coupon Code</h4>
          <input
            type="text"
            placeholder="Enter coupon code"
            style="
              border: 1px solid gray;
              width: 90%;
              height: 40px;
              padding-left: 5px;
              margin-top: 21px;
              margin-left: 5px;
              border-radius: 30px;
              font-size: 13px;
            "
          />
          <p style="color: gray; font-size: 14px; margin: 10px 0">
            Coupon code will be applied on the checkout page
          </p>
          <hr />
          <div style="display: flex; justify-content: space-between; margin: 20px 0">
            <span>TOTAL:</span> <span style="font-weight: 600">${{ calcTotal() }}</span>
          </div>
          <hr />
          <p style="color: gray; font-size: 14px; margin: 10px 0">
            Tax included and shipping calculated at checkout
          </p>
          <v-btn color="#0c86e6" class="mt-5 w-100" style="height: 50px" @click="tocheckout"
            >Proceed To Checkout</v-btn
          >
          <v-btn to="/" class="mt-5 w-100" style="height: 50px">Continue Shopping</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useStore } from './../stores/CartItem'
export default {
  computed: {
    ...mapState(useStore, ['CartItem'])
  },
  methods: {
    ...mapActions(useStore, ['getcartitem', 'delitem', 'setlocalstorage']),
    calcTotal() {
      let total = 0
      this.CartItem.forEach(
        (el) =>
          (total += Math.ceil(el.price - el.price * (el.discountPercentage / 100)) * el.counter)
      )
      return total
    },
    tocheckout() {
      this.setlocalstorage()
      this.$router.push({ name: 'check-out' })
    }
  },
  name: 'navCar',
  data() {
    return {
      drawer: false
    }
  },
  inject: ['Emitter'],

  mounted() {
    this.Emitter.on('openCart', () => {
      this.drawer = true
    })

    this.getcartitem
  }
}
</script>
