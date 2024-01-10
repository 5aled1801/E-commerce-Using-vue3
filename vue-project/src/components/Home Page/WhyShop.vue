<template>
  <div class="contwhy">
    <h2 class="text-center py-5 text-white">
      <span style="color: #04fff1">Why shop </span>with us?
    </h2>
    <v-container fluid>
      <v-row class="d-flex py-6">
        <v-col cols="12" sm="6" md="4" lg="3" class="text-center">
          <v-card color="transparent" class="text-white">
            <img src="./../../assets/images/free-shipping.png" alt="" />
            <v-card-title style="white-space: wrap">Free Shipping On First Order</v-card-title>
            <v-card-text> Lorem ipsum dolor sit amet consectetur adipisicing elit.</v-card-text>
            <a href="#">Learn more</a>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="text-center">
          <v-card color="transparent" class="text-white">
            <img src="./../../assets/images/weekly-flash-sales.png" alt="" />
            <v-card-title style="white-space: wrap">Weekly Flash Sale</v-card-title>
            <v-card-text> Lorem ipsum dolor sit amet consectetur adipisicing elit.</v-card-text>
            <a href="#">Learn more</a>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="text-center">
          <v-card color="transparent" class="text-white">
            <img src="./../../assets/images/discount.png" alt="" />
            <v-card-title style="white-space: wrap">Anual Payment Discount</v-card-title>
            <v-card-text> Lorem ipsum dolor sit amet consectetur adipisicing elit.</v-card-text>
            <a href="#">Learn more</a>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3" class="text-center">
          <v-card color="transparent" class="text-white">
            <img src="./../../assets/images/cash-back.png" alt="" />
            <v-card-title style="white-space: wrap">Cashback Reward Program</v-card-title>
            <v-card-text> Lorem ipsum dolor sit amet consectetur adipisicing elit.</v-card-text>
            <a href="#">Learn more</a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
.contwhy {
  background-image: url(./../../assets/images/why-shop-with-us-banner.webp);
  background-size: cover;
  background-position: center;
  width: 100vw;
  h2 {
    font-size: 30px;
  }
  img {
    width: 20%;
  }
  .v-card {
    padding-bottom: 20px;
    .v-card-title {
      height: 90px;
      font-size: 20px;
    }
  }

  a {
    color: gray;
  }
}
</style>
