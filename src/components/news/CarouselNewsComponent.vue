<template>
  <div>
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
      <q-carousel-slide
        :name="item.name"
        class="column no-wrap flex-center"
        v-for="item in sliders"
        :key="item.name"
      >
        <app-slide-carousel
          :slide="item.name"
          :filename="item.src"
          :title="item.title"
          :description="item.description"
          :showButtons="showButtonsShareLike"
          @clickImage="showButtonsShareLike = true"
        >
        </app-slide-carousel>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";
import SlideCarouselComponent from "./SlideCarouselComponent.vue";

export default {
  name: "CarouselNewsComponent",
  components: {
    "app-slide-carousel": SlideCarouselComponent,
  },
  setup() {
    return {
      slide: ref("promo1"),
    };
  },
  data() {
    return {
      showButtonsShareLike:false,
      sliders: [
        {
          name: "promo1",
          title: "news.promo1.title",
          description: "news.promo1.description",
          src: "Promo_1.jpg",
        },
        {
          name: "promo2",
          title: "news.promo2.title",
          description: "news.promo2.description",
          src: "Promo_2.jpg",
        },
        {
          name: "promo3",
          title: "news.promo3.title",
          description: "news.promo3.description",
          src: "Promo_3.jpg",
        },
      ],
    };
  },
  methods: {
    getDatePromo() {
      const date = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString(this.$i18n.locale, options);
    },
  },
  watch: {
      slide: function(val) {
         this.showButtonsShareLike = false;
      }
  }
};
</script>

<style scoped>
.bg-page {
  background-color: transparent !important;
  max-width: 600px;
}
</style>
