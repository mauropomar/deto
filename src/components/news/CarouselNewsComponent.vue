<template>
  <q-carousel
    swipeable
    animated
    v-model="slide"
    thumbnails
    infinite
    height="80vh"
  >
    <q-carousel-slide
      :name="1"
      img-src="https://cdn.quasar.dev/img/mountains.jpg"
    />
    <q-carousel-slide
      :name="2"
      img-src="https://cdn.quasar.dev/img/parallax1.jpg"
    />
    <q-carousel-slide
      :name="3"
      img-src="https://cdn.quasar.dev/img/parallax2.jpg"
    />
  </q-carousel>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CarouselNewsComponent",
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>

<style scoped>
</style>
