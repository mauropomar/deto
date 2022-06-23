<template>
  <q-page class="q-pa-sm bg-page">
    <div id="section" class="flex flex-center animate__animated animate__bounceInRight">
      <app-carousel-news></app-carousel-news>
    </div>
  </q-page>
</template>

<script>
import CarouselNewsComponent from "components/news/CarouselNewsComponent";
import { defineComponent } from "vue";
import "animate.css";

export default defineComponent({
  name: "NewsPage",
  components: {
    "app-carousel-news": CarouselNewsComponent,
  },
});
</script>
<style scope>
.bg-page {
  background: linear-gradient(90deg, #008dd2 0%, #0956a8 100%);
  overflow: hidden;
}
#section {
  width: 100vw;
  position: relative;
  background-image: url("./../assets/images/Bg_1.png");
  height: 83vh;
}

img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.section-rt {
  position: relative;
  text-align: center;
  z-index: 9;
}
</style>
