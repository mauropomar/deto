<template>
  <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="80vh"
        class="bg-page text-white shadow-1 rounded-borders"
      >
      <q-carousel-slide name="promo1" class="column no-wrap flex-center">
          <div style="width:300px;height:300px">
             <img src="./../../assets/images/Promo_1.png" />
          </div>
          <div class="q-mt-md text-center">

          </div>
        </q-carousel-slide>
        <q-carousel-slide name="promo2" class="column no-wrap flex-center">
          <div style="width:300px;height:300px">
             <img src="./../../assets/images/Promo_2.png" />
          </div>
          <div class="q-mt-md text-center">

          </div>
        </q-carousel-slide>
        <q-carousel-slide name="promo3" class="column no-wrap flex-center">
          <div style="width:300px;height:300px">
             <img src="./../../assets/images/Promo_3.png" />
          </div>
          <div class="q-mt-md text-center">

          </div>
        </q-carousel-slide>
      </q-carousel>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CarouselNewsComponent",
  setup() {
    return {
      slide: ref('promo1'),
    };
  },
};
</script>

<style scoped>
.bg-page{
  background-color: transparent !important;
}
</style>
