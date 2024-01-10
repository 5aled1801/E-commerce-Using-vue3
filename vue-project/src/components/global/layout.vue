<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-layout>
    <v-main
      :style="`padding-top: ${
        $route.name != 'check-out' ? (windowwidth <= 990 ? '60px' : '145px') : '0px'
      }; --v-layout-bottom: 0px;`"
    >
      <slot></slot>
      <footer-vue v-if="$route.name != 'check-out'" />
    </v-main>

    <nav-car-vue />
    <app-nav v-if="$route.name != 'check-out' && windowwidth > 990" />
    <fixedNav v-if="$route.name != 'check-out' && windowwidth > 990" />
    <resp-nav v-if="$route.name != 'check-out' && windowwidth <= 990" />
    <menu-drawer-vue />
  </v-layout>
</template>
<script>
import FooterVue from './Footer.vue'
import navCarVue from './navCar.vue'
import AppNav from './AppNav.vue'
import fixedNav from './fixedNav.vue'
import respNav from './respNav.vue'
import MenuDrawerVue from './MenuDrawer.vue'
export default {
  data: () => ({
    windowwidth: 0
  }),
  inject: ['Emitter'],

  components: {
    FooterVue,
    navCarVue,
    fixedNav,
    AppNav,
    respNav,
    MenuDrawerVue
  },
  methods: {
    openCart() {
      this.Emitter.emit('openCart')
    }
  },
  mounted() {
    this.windowwidth = window.innerWidth
    window.onresize = () => {
      this.windowwidth = window.innerWidth
    }
  }
}
</script>
