<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-dialog v-model="dialog" max-width="" v-if="dialog" persistent>
    <v-card>
      <div class="text-center">
        <v-icon
          style="
            font-size: 80px;
            padding: 60px;
            border: 1px solid green;
            border-radius: 50%;
            margin: 20px;
            color: green;
          "
          >mdi-check</v-icon
        >
      </div>
      <v-card-title
        style="color: rgba(56, 54, 54, 0.888); text-align: center; font-size: 27px; padding: 17px 0"
        >Order placed successfuly!</v-card-title
      >
      <v-card-text
        style="font-size: 14px; max-width: 75%; align-self: center; text-align: center; color: gray"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa mollitia delectus,
        laboriosam corrupti excepturi ea illum quae eum dolor pariatur! Distinctio at illum fugit
        odio consectetur corporis, obcaecati iusto!</v-card-text
      >
      <v-card-actions style="padding: 20px; align-self: center"
        ><v-btn color="blue" variant="flat" @click="restData()">Done</v-btn></v-card-actions
      >
    </v-card>
  </v-dialog>
</template>
<script>
import { useStore } from '@/stores/CartItem'
import { mapActions } from 'pinia'

export default {
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    ...mapActions(useStore, ['restLocalStorage']),
    restData() {
      this.restLocalStorage()
      this.dialog = false
      this.$router.push({ name: 'home' })
    }
  },
  watch: {
    dialog(newVal) {
      if (!newVal) {
        this.$emit('close_popup')
      }
    }
  },
  props: {
    popup: {
      type: Boolean
    }
  },
  mounted() {
    this.dialog = this.popup
  }
}
</script>
