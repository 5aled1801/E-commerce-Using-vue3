<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="app">
    <h1 style="text-align: center; padding: 10px 0">{{ $route.params.title }}</h1>
    <v-container class="d-flex flex-wrap">
      <v-card class="d-flex" :loading="loading" v-if="!categoryProduct.products">
        <v-col cols="3" v-for="num in 4" :key="num"
          ><v-skeleton-loader
            boilerplate
            class="mx-auto"
            elevation="2"
            max-width="360"
            type="card, article, actions"
          ></v-skeleton-loader>
        </v-col>
      </v-card>
      <v-row class="d-flex justify-center justify-md-start">
        <v-col cols="9" sm="5" md="4" lg="3" v-for="cat in categoryProduct.products" :key="cat.id">
          <v-card>
            <v-hover v-slot="{ isHovering, props }">
              <div class="pearent" style="overflow: hidden">
                <img
                  :src="shownData[cat.title] ? shownData[cat.title] : cat.thumbnail"
                  :style="`scale:${isHovering ? 1.1 : 1};width:100% ;   height:180px`"
                  alt=""
                  v-bind="props"
                />
              </div>
            </v-hover>

            <v-card-text>
              <p style="height: 60px">
                {{
                  cat.description > 7
                    ? cat.description
                    : cat.description.split(' ').slice(0, 9).join(' ') + '...'
                }}
              </p>
              <v-rating
                v-model="cat.rating"
                half-increments
                size="x-small"
                color="orange"
                readonly
              ></v-rating>
              <br />
              <del>${{ cat.price }} </del><span> from </span>
              <span style="color: red; font-weight: bold">
                ${{ Math.ceil(cat.price - cat.price * (cat.discountPercentage / 100)) }}
              </span>
            </v-card-text>

            <v-btn-toggle style="width: 200px" v-model="shownData[cat.title]" class="mt-4">
              <V-btn v-for="(pic, i) in cat.images" :value="pic" :key="i" style="width: 10px" act
                ><img :src="pic" style="height: 30px; width: 30px" alt=""
              /></V-btn>
            </v-btn-toggle>
            <div style="text-align: center">
              <v-btn
                class="mt-5 mb-5"
                elevation="0"
                style="border: 1px solid rgba(0, 0, 0, 0.273)"
                rounded
                @click="$router.push({ name: 'DetProduct', params: { productId: cat.id } })"
                >Choose Option</v-btn
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang=""></style>
<script>
import { useProductStore } from '@/stores/ProductMoudels'
import { mapState, mapActions } from 'pinia'
export default {
  name: 'produtCont',
  props: {
    products: { type: Array },
    titleName: {
      type: String
    }
  },
  data() {
    return {
      shownData: [],
      loading: false
    }
  },
  computed: {
    ...mapState(useProductStore, ['categoryProduct'])
  },
  methods: {
    ...mapActions(useProductStore, ['getCategoryProduct'])
  },
  watch: {
    $route() {
      this.loading = true
      this.getCategoryProduct(this.$route.params.category)
      this.loading = false
    }
  },
  async mounted() {
    this.loading = true
    await this.getCategoryProduct(this.$route.params.category)
    this.loading = false
  }
}
</script>
