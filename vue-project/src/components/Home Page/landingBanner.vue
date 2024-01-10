<template>
  <div class="banner">
    <div class="parent">
      <img src="../../assets/images/banner-bg.jpg" alt="" />
      <div class="cont">
        <v-col cols="6">
          <h3>
            <span>Huge Saving </span>on <br />
            UHD Television
          </h3>
          <span>Sale up to 70% off on selected items*</span><br />
          <v-btn
            variant="outlined"
            density="comfortable"
            color="white"
            rounded
            style="
              text-transform: none;
              margin-top: 10px;
              padding: 10px;
              align-content: center;
              right: 5%;
              width: 35%;
              height: 10%;
            "
            >Shope Now</v-btn
          >
        </v-col>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.banner {
  position: relative;
  height: 54vh;
  img {
    background-position: center;
    background-size: contain;
    width: 100%;
    height: 54vh;
    object-fit: cover;
  }
  .parent {
    position: relative;
    width: 100%;
    .cont {
      position: absolute;
      top: 25%;
      width: 100%;
      text-align: center;
      color: white;
      h3 {
        font-size: 40px;
        span {
          color: #04fff1;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
}
@media (max-width: 990px) {
  .parent {
    .cont {
      h3 {
        font-size: 35px !important;
      }
    }
  }
}
@media (max-width: 771px) {
  .parent {
    .cont {
      button {
        font-size: 13px !important;
        width: 40% !important;
      }
    }
  }
}
@media (max-width: 666px) {
  .parent {
    .cont {
      h3 {
        font-size: 30px !important;
      }
      p {
        font-size: 12px !important;
      }
    }
  }
}
@media (max-width: 595px) {
  .parent {
    .cont {
      h3 {
        font-size: 25px !important;
      }
      p {
        font-size: 10px !important;
      }
      button {
        font-size: 13px !important;
        width: 50% !important;
      }
    }
  }
}
</style>
