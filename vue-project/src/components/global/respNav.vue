<template>
  <v-container fluid class="p-0">
    <v-app-bar style="z-index: 100; width: 100vw; padding: 0">
      <v-col cols="4" class="d-flex">
        <v-app-bar-nav-icon @click="openMenu"></v-app-bar-nav-icon>
        <svg
          data-icon="search"
          viewBox="0 0 512 512"
          width="25"
          class="ml-6"
          style="cursor: pointer"
        >
          <path
            d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"
          ></path>
        </svg>
      </v-col>
      <v-col cols="4" style="text-align: center"
        ><v-btn color="white" elevation="0" style="border: 0px" to="/">
          <img src="@/assets/images/footer-logo.webp" width="90%" alt="" /></v-btn
      ></v-col>
      <v-col cols="4" class="text-end"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="icon icon-account"
          viewBox="0 0 1024 1024"
          width="25"
          height="25"
          style="cursor: pointer"
        >
          <title>user</title>
          <path
            class="path1"
            d="M486.4 563.2c-155.275 0-281.6-126.325-281.6-281.6s126.325-281.6 281.6-281.6 281.6 126.325 281.6 281.6-126.325 281.6-281.6 281.6zM486.4 51.2c-127.043 0-230.4 103.357-230.4 230.4s103.357 230.4 230.4 230.4c127.042 0 230.4-103.357 230.4-230.4s-103.358-230.4-230.4-230.4z"
          ></path>
          <path
            class="path2"
            d="M896 1024h-819.2c-42.347 0-76.8-34.451-76.8-76.8 0-3.485 0.712-86.285 62.72-168.96 36.094-48.126 85.514-86.36 146.883-113.634 74.957-33.314 168.085-50.206 276.797-50.206 108.71 0 201.838 16.893 276.797 50.206 61.37 27.275 110.789 65.507 146.883 113.634 62.008 82.675 62.72 165.475 62.72 168.96 0 42.349-34.451 76.8-76.8 76.8zM486.4 665.6c-178.52 0-310.267 48.789-381 141.093-53.011 69.174-54.195 139.904-54.2 140.61 0 14.013 11.485 25.498 25.6 25.498h819.2c14.115 0 25.6-11.485 25.6-25.6-0.006-0.603-1.189-71.333-54.198-140.507-70.734-92.304-202.483-141.093-381.002-141.093z"
          ></path>
        </svg>
        <v-badge
          location="right top"
          :content="CartItem.length"
          color="blue"
          offset-x="-18"
          offset-y="-25"
          max="9"
        ></v-badge>
        <svg
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          style="cursor: pointer"
          @click="openCart()"
        >
          <path
            class="path1"
            d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
          ></path>
          <path
            class="path2"
            d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
          ></path>
          <path
            class="path3"
            d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z"
          ></path>
        </svg>
      </v-col>
    </v-app-bar>
  </v-container>
</template>
<script>
import { useProductStore } from '@/stores/ProductMoudels'
import { mapState } from 'pinia'
import { useStore } from '../../stores/CartItem'
export default {
  inject: ['Emitter'],
  methods: {
    openCart() {
      this.Emitter.emit('openCart')
    },
    openMenu() {
      this.Emitter.emit('openMenu')
    }
  },
  computed: {
    ...mapState(useProductStore, ['categoroes']),
    ...mapState(useStore, ['CartItem'])
  }
}
</script>
