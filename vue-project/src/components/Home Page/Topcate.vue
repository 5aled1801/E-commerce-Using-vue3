<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="cat">
    <img src="./../../assets/images/cyber-banner.webp" class="w-100" alt="" />
  </div>
  <div class="topcat">
    <div class="d-flex justify-center align-center pt-7">
      <h2 class="flex-grow-1 text-center">Top Categories</h2>
      <a href="#" class="pr-7">Shop All</a>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="2" v-for="cat in categories" :key="cat.title">
          <v-card elevation="0" class="text-center">
            <v-hover v-slot="{ isHovering, props }">
              <div
                style="
                  overflow: hidden;
                  border-radius: 60%;
                  width: 100%;
                  height: 100%;
                  cursor: pointer;
                "
              >
                <img
                  :src="cat.image"
                  alt=""
                  v-bind="props"
                  :style="`scale:${isHovering ? 1.2 : 1} ;transition: 0.8s; `"
                />
              </div>
            </v-hover>
            <v-card-text>{{ cat.title }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
.topcat {
  a {
    color: gray;
  }
}
</style>
<script>
export default {
  data() {
    return {
      categories: [
        {
          title: 'mobile',
          image:
            ' https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263'
        },
        {
          title: 'laptop',
          image:
            '  https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209'
        },
        {
          title: 'tv ',
          image:
            'https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137'
        },
        {
          title: 'pc ',
          image:
            ' https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840'
        },
        {
          title: 'audio & videon ',
          image:
            'https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791'
        },
        {
          title: 'gaming',
          image:
            'https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635'
        },
        {
          title: 'home appliances',
          image:
            ' https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882'
        },
        {
          title: 'kitchen',
          image:
            'https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410'
        },
        {
          title: 'cameras',
          image:
            'https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515'
        },
        {
          title: 'consume',
          image:
            'https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964'
        },
        {
          title: 'smart',
          image:
            'https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828'
        },
        {
          title: 'accessories',
          image:
            ' https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367'
        }
      ]
    }
  }
}
</script>
