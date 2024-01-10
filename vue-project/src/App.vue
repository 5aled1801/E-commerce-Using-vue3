<script setup>
import { RouterView } from 'vue-router'
import layoutVue from './components/global/layout.vue'
</script>

<template>
  <div id="app" class="p-0">
    <layout-vue><router-view /> </layout-vue>
    <!-- <router-link /> -->
  </div>
</template>
<style scoped></style>
<script>
export default {
  components: {
    layoutVue
  }
}
</script>
<style lang="scss">
input[type='number']::-webkit-outer-spin-button,
::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
