<template>
  <v-navigation-drawer
    variant="text"
    style="height: 100%; top: 0; z-index: 1001; width: 95vw"
    v-model="drawer"
    location="left"
    temporary
  >
    <v-card elevation="0" class="position-relative">
      <v-card-title style="font-size: 18px; font-weight: 600"> Shopping Cart</v-card-title>
      <v-icon
        @click="drawer = false"
        style="position: absolute; right: 5px; top: 7px; cursor: pointer"
        >mdi-close</v-icon
      >

      <v-card-text class="mx-5" style="color: gray">{{ CartItem.length }} items</v-card-text>
      <v-card v-if="!CartItem.length">
        <v-card-text class="mx-5" style="color: gray"
          >Free shipping for all order over $10000!</v-card-text
        >
        <v-card-text class="text-center" style="color: gray">Your cart is empty</v-card-text>
        <v-container>
          <v-card-actions class="justify-center align-center"
            ><v-btn
              variant="outlined"
              rounded
              class="py-5 w-100 h-95"
              style="border-color: gray; align-content: center; font-size: 19px"
              to="/"
              @click="drawer = false"
              >Continue Shopping</v-btn
            ></v-card-actions
          ></v-container
        >
      </v-card>
      <v-card elevation="0" v-if="CartItem.length">
        <v-container>
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
                parseInt((calcTotal() / 10000) * 100) ? parseInt((calcTotal() / 10000) * 100) : 100
              "
              height="10px"
              striped
              color="red"
              raised
              class=""
            ></v-progress-linear>
          </div>
          <v-card-text v-if="10000 - calcTotal() > 0">
            Only ${{ 10000 - calcTotal() }} away from Free shipping</v-card-text
          >
          <v-card-text v-if="10000 - calcTotal() <= 0">
            Your order now is included free
          </v-card-text>

          <v-card elevation="1" class="over" style="overflow-y: scroll; height: 320px">
            <v-row>
              <v-container>
                <v-card v-for="item in CartItem" :key="item.id" elevation="0" class="d-flex">
                  <v-col cols="4"><img :src="item.thumbnail" width="100" alt="" /></v-col>
                  <v-col cols="8">
                    <v-card-title style="font-size: 17px">{{ item.title }}</v-card-title>
                    <v-card-text style="font-size: 14px">
                      <span style="color: gray">Category:</span>
                      <span>{{ item.category }}</span>
                    </v-card-text>
                    <v-card-text style="padding: 0px 0px 0px 16px"
                      >${{
                        Math.ceil(item.price - item.price * (item.discountPercentage / 100))
                      }}</v-card-text
                    >
                    <div class="d-flex">
                      <div
                        class="cou"
                        style="
                          border: 1px solid gray;

                          width: 30%;
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
                          style="width: 45px; text-align: center"
                        />
                        <v-icon @click="item.counter++" style="font-size: 15px"> mdi-plus </v-icon>
                      </div>
                      <v-card-text
                        ><span style="color: gray">Subtotal:</span>${{
                          Math.ceil(item.price - item.price * (item.discountPercentage / 100)) *
                          item.counter
                        }}
                      </v-card-text>
                      <v-icon @click="delitem(item.id)">mdi-close</v-icon>
                    </div>
                  </v-col>
                </v-card>
              </v-container>
            </v-row>
          </v-card>
          <v-card elevation="0">
            <v-card-title>Total: ${{ calcTotal() }}</v-card-title>
            <v-card-actions
              style="display: flex; flex-direction: column; width: 100%; text-align: center"
              class="pt-3"
            >
              <v-btn
                variant="flat"
                rounded
                class="py-5 h-95 mb-5"
                color="blue"
                style="text-transform: none; align-content: center; font-size: 19px; width: 60%"
                @click="tocheckout(), (drawer = false)"
                >Ckeck out</v-btn
              >
              <v-btn
                variant="outlined"
                rounded
                class="py-5 h-95"
                style="
                  text-transform: none;
                  border-color: gray;
                  align-content: center;
                  font-size: 19px;
                  width: 60%;
                "
                to="/allcartdet"
                @click="drawer = false"
                >View Cart</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-container>
      </v-card>
    </v-card>
  </v-navigation-drawer>
</template>
<style lang="scss" scoped>
.over {
  &::-webkit-scrollbar {
    width: 5px;
    /* Set the width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    width: 1px;
    background-color: #f1f1f1; /* Set the color of the scrollbar track */
  }

  &::-webkit-scrollbar-thumb {
    width: 1px;
    background-color: #c1c1c1; /* Set the color of the scrollbar thumb */
    /* Set the border radius of the scrollbar thumb */
  }
}
.v-navigation-drawer__scrim {
  background: none !important;
  display: none;
  position: none !important;
  z-index: 0;
}
</style>
<script>
import { mapActions, mapState } from 'pinia'
import { useStore } from '../../stores/CartItem'
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

    this.getcartitem()
  }
}
</script>
