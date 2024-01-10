<!-- eslint-disable vue/no-duplicate-attributes -->
<!-- eslint-disable no-undef -->
<!-- eslint-disable vue/no-unused-components -->
<template>
  <div class="product px-8 pt-16 pb-16">
    <h2 :class="[`text-${titleColor}`]">{{ titleName }}</h2>
    <v-container fluid>
      <v-row>
        <v-col cols="12" v-if="!products.length">
          <v-row>
            <v-col v-for="num in 4" :key="num"
              ><v-skeleton-loader
                boilerplate
                class="mx-auto"
                elevation="2"
                max-width="360"
                type="card, article, actions"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :navigation="true"
      :autoplay="{ delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false }"
      :slides-per-view="4"
      :space-between="15"
      style="height: 75vh"
      :breakpoints="this.breakpoints"
    >
      <SwiperSlide v-for="item in products" :key="item.id" style="text-align: center">
        <v-hover v-slot="{ isHovering, props }">
          <div class="pearentImge position-relative" style="overflow: hidden">
            <img
              :src="shownData[item.title] ? shownData[item.title] : item.thumbnail"
              :style="`scale:${isHovering ? 1.1 : 1}`"
              alt=""
              v-bind="props"
            />
            <v-btn class="quick-view" @click="openQuickView(item)">Quick View</v-btn>
          </div>
        </v-hover>
        <div class="context" style="">
          <p>
            {{
              item.description >= 9
                ? item.description
                : item.description.split(' ').slice(0, 9).join(' ') + '...'
            }}
          </p>
          <v-rating
            v-model="item.rating"
            half-increments
            size="x-small"
            color="orange"
            readonly
          ></v-rating>

          <br />
          <!-- {{ item }} -->
          <v-card-text>
            <del>${{ item.price }} </del><span> from </span>
            <span style="color: red; font-weight: bold">
              ${{ Math.ceil(item.price - item.price * (item.discountPercentage / 100)) }}
            </span>
          </v-card-text>
        </div>

        <v-btn-toggle mandatory style="width: 250px" v-model="shownData[item.title]" class="mt-4">
          <V-btn v-for="(pic, i) in item.images" :value="pic" :key="i" style="width: 20px" act
            ><img :src="pic" style="height: 50px; width: 50px" alt=""
          /></V-btn>
        </v-btn-toggle>
        <div style="text-align: center">
          <v-btn
            class="mt-5"
            elevation="0"
            style="border: 1px solid rgba(0, 0, 0, 0.442)"
            rounded
            @click="$router.push({ name: 'DetProduct', params: { productId: item.id } })"
            >Choose Option</v-btn
          >
        </div>
      </SwiperSlide>
      <div class="swiper-pagination"></div>
    </Swiper>
  </div>
</template>
<style lang="scss" scoped>
.product {
  h2 {
    padding: 25px;
    font-weight: 600;
    font-size: 30px;
  }
  img {
    height: 150px;
    width: 90%;
    height: 200px;
    cursor: pointer;
    transition: 0.8s all ease-in-out;
  }
  .context {
    width: 95%;
    text-align: start;
    p {
      margin-inline-start: 10px;
      font-size: 13px;
      max-width: 250px;
      height: 30px;
      margin-bottom: 20px;
    }
    .v-rating_wrapper {
      width: 15px;
    }
  }
  .quick-view {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    opacity: 0;
    height: '40px';
    width: '80px';
  }
  .pearentImge:hover {
    .quick-view {
      opacity: 1 !important;
    }
  }
}
</style>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// import vSkeletonLoad from 'vuetify/lib/labs/components.mjs'f

import { ref } from 'vue'
export default {
  inject: ['Emitter'],
  methods: {
    openQuickView(product) {
      this.Emitter.emit('openQuickView', product)
    }
  },
  props: {
    products: { type: Array },
    titleName: {
      type: String
    },
    titleColor: {
      type: String
    }
  },
  setup() {
    const shownData = ref({})
    return {
      shownData,
      modules: [Navigation, Pagination, Autoplay]
    }
  },
  components: { Swiper, SwiperSlide },
  data: () => {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        580: { slidesPerView: 2 },
        767: { slidesPerView: 3 },
        995: { slidesPerView: 4 }
      }
    }
  }
}
</script>
