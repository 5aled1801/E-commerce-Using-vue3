<template>
  <div class="home">
    <div class="banner">
      <landingBanner />
    </div>
    <div class="feature">
      <featuresVue />
    </div>
    <photofeature />
    <productMoudels :products="flashDeals" titleColor="red" titleName="Flash Deals" />
    <Topcat />
    <newproduct :products="newproduct" />
    <Qualityfeatures />
    <productMoudels :products="TopPhone" titleColor="black" titleName="Top Phones" />
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <img src="./../assets/images/band-left-cover.webp" class="w-100" alt="" />
        </v-col>
        <v-col cols="6">
          <img src="./../assets/images/band-right-cover.webp" class="w-100" alt="" />
        </v-col>
      </v-row>
    </v-container>
    <productMoudels :products="homedec" titleColor="black" titleName="Home Decoration" />
    <v-container fluid>
      <v-row>
        <v-col>
          <img src="./../assets/images/tv-banner.webp" class="w-100" alt="" />
        </v-col> </v-row
    ></v-container>
    <WhyShop />
    <QuickView />
  </div>
</template>
<script>
import landingBanner from '@/components/Home Page/landingBanner.vue'
import featuresVue from '@/components/Home Page/features.vue'
import Topcat from '@/components/Home Page/Topcate.vue'
import newproduct from '@/components/Home Page/Newproduct.vue'
import Qualityfeatures from '@/components/Home Page/Qualityfeatures.vue'
import WhyShop from '@/components/Home Page/WhyShop.vue'
import QuickView from '@/components/Home Page/QuickView.vue'

import photofeature from '@/components/Home Page/photofeature.vue'
import productMoudels from '@/components/Home Page/productMoudels.vue'
import { useProductStore } from '@/stores/ProductMoudels'
import { mapActions, mapState } from 'pinia'

export default {
  components: {
    landingBanner,
    featuresVue,
    photofeature,
    productMoudels,
    Topcat,
    newproduct,
    Qualityfeatures,
    WhyShop,
    QuickView
  },
  computed: {
    ...mapState(useProductStore, ['flashDeals', 'newproduct', 'TopPhone', 'homedec'])
  },
  methods: {
    ...mapActions(useProductStore, ['getFlashDeal'])
  },
  beforeMount() {
    this.getFlashDeal()
  }
}
</script>
