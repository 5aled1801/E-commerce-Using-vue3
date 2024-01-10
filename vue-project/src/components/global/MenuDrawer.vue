<template>
  <v-navigation-drawer
    variant="text"
    style="height: 100%; top: 0; z-index: 1001; width: 35vw"
    v-model="drawer"
    location="left"
    temporary
  >
    <v-card class="d-flex align-center justify-space-between" elevation="0">
      <v-card-title style="font-size: 23px; font-weight: 600">Menu</v-card-title>
      <v-icon
        style="width: 100%; place-content: end; margin-inline-end: 5px; cursor: pointer"
        @click="drawer = false"
        >mdi-close</v-icon
      >
    </v-card>
    <hr />

    <v-card elevation="0">
      <v-list>
        <v-list-item class="px-8" v-for="item in categoroes" :key="item.route"
          ><v-list-item-title style="cursor: pointer"
            ><router-link
              :to="{
                name: 'produtCont',
                params: { category: item.route, title: item.title }
              }"
              style="color: black; text-decoration: none"
              >{{ item.title }}</router-link
            ></v-list-item-title
          ></v-list-item
        >
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>
<style lang="scss" scoped>
.v-navigation-drawer__scrim {
  background: none !important;
  display: none;
  position: none !important;
  z-index: 0;
}
</style>
<script>
import { mapState } from 'pinia'
import { useProductStore } from '@/stores/ProductMoudels'

export default {
  data() {
    return {
      drawer: false
    }
  },
  inject: ['Emitter'],
  mounted() {
    this.Emitter.on('openMenu', () => {
      this.drawer = true
    })
  },
  computed: {
    ...mapState(useProductStore, ['categoroes'])
  }
}
</script>
