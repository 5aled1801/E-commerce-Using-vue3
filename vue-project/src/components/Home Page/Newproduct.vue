<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="new">
    <h2>New Products</h2>
  </div>

  <v-container fluid>
    <v-row>
      <v-col cols="7" v-if="!products.length">
        <v-row>
          <v-col v-for="num in 3" :key="num"
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

      <v-col cols="12" sm="12" md="7" lg="7" class="order-1 order-md-0">
        <Swiper
          :pagination="{ el: '.swiper-pagination', clickable: true }"
          :modules="modules"
          :navigation="true"
          :slides-per-view="3"
          :autoplay="{ delay: 3000, pauseOnMouseEnter: true }"
          :space-between="35"
          style="height: 70vh"
          :breakpoints="breakpoints"
          class="px-4"
        >
          <SwiperSlide v-for="item in products" :key="item.title">
            <v-card>
              <v-hover v-slot="{ isHovering, props }">
                <div class="pearentImge position-relative" style="overflow: hidden">
                  <img
                    :src="shownData[item.title] ? shownData[item.title] : item.thumbnail"
                    :style="`scale:${isHovering ? 1.1 : 1};width:100% ;   height:180px`"
                    alt=""
                    v-bind="props"
                  />
                  <v-btn class="quick-view" @click="openQuickView(item)">Quick View</v-btn>
                </div>
              </v-hover>
              <v-card-text>
                <p style="height: 60px">
                  {{
                    item.description > 7
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
                <del>${{ item.price }} </del><span> from </span>
                <span style="color: red; font-weight: bold">
                  ${{ Math.ceil(item.price - item.price * (item.discountPercentage / 100)) }}
                </span>
              </v-card-text>

              <v-btn-toggle
                mandatory=""
                style="width: 200px"
                v-model="shownData[item.title]"
                class="mt-4"
              >
                <V-btn v-for="(pic, i) in item.images" :value="pic" :key="i" style="width: 10px" act
                  ><img :src="pic" style="height: 30px; width: 30px" alt=""
                /></V-btn>
              </v-btn-toggle>
              <div style="text-align: center">
                <v-btn
                  class="mt-5 mb-5"
                  elevation="0"
                  style="border: 1px solid rgba(0, 0, 0, 0.273)"
                  rounded
                  @click="$router.push({ name: 'DetProduct', params: { productId: item.id } })"
                  >Choose Option</v-btn
                >
              </div>
            </v-card>
          </SwiperSlide>
          <div class="swiper-pagination"></div>
        </Swiper>
      </v-col>
      <v-col cols="12" sm="12" md="5" lg="5" class="text-center">
        <img class="img-ban" src="./../../assets/images/vr-banner.webp" alt="" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.new {
  padding-top: 70px;
  h2 {
    padding: 0 0 30px 50px;
  }
}
.quick-view {
  opacity: 0;
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
@media (max-width: 595px) {
  .img-ban {
    width: 100% !important;
  }
}
</style>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
export default {
  inject: ['Emitter'],
  methods: {
    openQuickView(product) {
      this.Emitter.emit('openQuickView', product)
    }
  },
  props: {
    products: {
      type: Array
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay]
    }
  },
  data() {
    return {
      shownData: [],
      breakpoints: {
        0: { slidesPerView: 1 },
        580: { slidesPerView: 2 },
        767: { slidesPerView: 3 },
        956: { slidesPerView: 4 },
        960: { slidesPerView: 2 },
        969: { slidesPerView: 2 },

        990: { slidesPerView: 2 },

        1000: { slidesPerView: 2 },
        1144: { slidesPerView: 3 }
      }
    }
  }
}
</script>
