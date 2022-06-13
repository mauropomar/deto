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
      <div class="carousel-slide-image">
        <img src="./../../assets/images/Promo_1.png" />
      </div>
      <div class="q-mt-md text-center"></div>
    </q-carousel-slide>
    <q-carousel-slide name="promo2" class="column no-wrap flex-center">
      <div class="carousel-slide-image">
        <img src="./../../assets/images/Promo_2.png" />
      </div>
      <div class="q-mt-md text-center"></div>
    </q-carousel-slide>
    <q-carousel-slide name="promo3" class="column no-wrap flex-center">
      <div class="carousel-slide-image">
        <img src="./../../assets/images/Promo_3.png" />
      </div>
      <div class="q-mt-md text-center">
        <span class="title-promo">OFERTA ESPECIAL PARA FIN DE AÑO</span>
        <p>Le ofrecemos esta Oferta por Fin de año para que su familia disfrute de las festividades.
        <br>Envie dinero a Cuba sin costo extra ni comisiones. Por cada 100 USD entregamos en efectivo 6400 MN,
        <br>y por 130 USD ponemos 100 MLC en tarjeta. Llamenos al 1(786) 203 7678.</p>
        <span class="title-romo">{{getDatePromo()}}</span>
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
      slide: ref("promo1"),
    };
  },
  methods: {
    getDatePromo() {
      const date = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(this.$i18n.locale, options);
    },
  }
};
</script>

<style scoped>
.bg-page {
  background-color: transparent !important;
}
.carousel-slide-image {
  width: 250px;
  height: 250px;
}
.title-promo{
  font-weight: bold;
}
</style>
