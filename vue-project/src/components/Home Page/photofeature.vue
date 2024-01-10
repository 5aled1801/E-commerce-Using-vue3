<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="photofeatures bg-gray-lighten-4 pt-4">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="4" md="4" lg="4">
          <v-hover v-slot="{ isHovering, props }">
            <div v-bind="props">
              <img
                src="../../assets/images/chairs.webp"
                alt=""
                :style="` scale:${isHovering ? 1.1 : 1}`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4" md="4" lg="4">
          <v-hover v-slot="{ isHovering, props }">
            <div v-bind="props">
              <img
                src="../../assets/images/playstations.webp"
                alt=""
                :style="` scale:${isHovering ? 1.1 : 1}`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4" md="4" lg="4">
          <v-hover v-slot="{ isHovering, props }">
            <div v-bind="props">
              <img
                src="../../assets/images/headset.webp"
                alt=""
                :style="` scale:${isHovering ? 1.1 : 1}`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6"
          ><v-hover v-slot="{ isHovering, props }"
            ><div v-bind="props">
              <img
                src="../../assets/images/iphones.webp"
                alt=""
                :style="`scale:${isHovering ? 1.1 : 1}`"
              />
            </div>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="6">
          <v-hover v-slot="{ isHovering, props }">
            <div v-bind="props">
              <img
                src="../../assets/images/laptops.webp"
                alt=""
                :style="`transition:5s all ese-in-out; scale:${isHovering ? 1.1 : 1}`"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
.photofeatures {
  background-color: rgba(183, 183, 183, 0.181);
  img {
    width: 100%;
    height: 300px;
    cursor: pointer;
    transition: 0.8s all ease-in-out;
  }
  .v-col-4 {
    text-align: center;
    height: 10%;
    overflow: hidden !important;
    img {
      height: 210px;
    }
  }
  div {
    overflow: hidden;
  }
}
</style>
