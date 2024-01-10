<template>
  <div class="dial">
    <v-dialog v-model="dia" max-width="60%">
      <v-card>
        <v-icon
          @click="dia = false"
          style="position: absolute; right: 20px; top: 10px; cursor: pointer"
          color="black"
        >
          mdi-close</v-icon
        >
        <transition name="fade">
          <v-alert
            style="top: 0"
            color="success"
            v-if="alertvis"
            icon="$success"
            title="Product added successfully"
          >
          </v-alert
        ></transition>
        <v-container fluid class="mt-10">
          <v-row>
            <v-col cols="5" class="h-100 text-center">
              <img
                :src="tab ? tab : singleproduct.thumbnail"
                alt=""
                width="100%"
                height="100%"
                style="height: 400px"
              />
              <v-tabs center-active v-model="tab">
                <v-tab v-for="(imge, i) in singleproduct.images" :key="i" :value="imge">
                  <img :src="imge" alt="" width="50" />
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="7">
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
                  <span
                    >Avilability: {{ singleproduct.stock > 0 ? 'In Stock' : 'Out of Stock' }}</span
                  >
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
                  class="cou"
                  style="
                    border: 1px solid gray;
                    padding: 7px;
                    width: 50%;
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
                <span
                  >Subtotal: ${{
                    Math.ceil(
                      singleproduct.price -
                        singleproduct.price * (singleproduct.discountPercentage / 100)
                    ) * counter
                  }}</span
                ><br />

                <v-btn
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
                  @click="addCartitem(singleproduct), alertMes(), setlocals()"
                  :loading="loadings"
                  >Add to card</v-btn
                >
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  transition: 0.5s;
  opacity: 0;
}
@media (max-width: 990px) {
  input {
    width: 10% !important;
    margin-inline: 20px;
  }
}
@media (max-width: 660px) {
  input {
    width: 5% !important;
    margin-inline: 20px;
  }
}
</style>

<script>
import { mapActions } from 'pinia'
import { useStore } from '../../stores/CartItem'
export default {
  name: 'DetProduct',
  inject: ['Emitter'],
  methods: {
    ...mapActions(useStore, ['additem', 'setlocalstorage']),
    addCartitem(item) {
      item.counter = this.counter
      this.additem(item)
    },
    alertMes() {
      this.loadings = true
      setTimeout(
        () => {
          this.loadings = false
          this.alertvis = true

          setTimeout(() => {
            this.alertvis = false
            this.dia = false
          }, 500)
        },

        1000
      )
      clearTimeout()
    },
    loadingmes() {
      this.loadings = true
      setTimeout(() => {
        ;(this.loadings = false),
          setTimeout(() => {
            clearInterval(), 1000
          })
      }, 2500)
    },
    setlocals() {
      this.setlocalstorage()
    }
  },
  mounted() {
    this.Emitter.on('openQuickView', (open) => {
      this.singleproduct = open
      this.dia = true
    })
  },
  updated() {
    if (this.dia === false) {
      this.counter = 1
    }
  },

  data() {
    return {
      loadings: false,
      alertvis: false,
      tab: '',
      counter: 1,
      dia: false,
      singleproduct: ''
    }
  }
}
</script>
