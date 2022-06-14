<template>
  <div class="carousel-slide-image">
    <img :src="resolve_img_url(filename)" />
  </div>
  <div class="q-mt-md text-center">
    <span class="title-promo">{{ $t(title) }}</span>
    <p>{{ $t(description) }}</p>
    <span class="title-romo">{{ getDatePromo() }}</span>
  </div>
  <q-btn class="btn-like" flat round dense icon="thumb_up_alt" v-if="showButtons">
    <q-tooltip class="bg-primary">
      {{ $t("news.buttons.like.text") }}
    </q-tooltip>
  </q-btn>
  <q-btn class="btn-share" flat round dense icon="share" v-if="showButtons">
    <q-tooltip class="bg-primary">
      {{ $t("news.buttons.share.text") }}
    </q-tooltip>
  </q-btn>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SlideCarouselComponent",
  props: ["title", "description", "filename", "showButtons"],
  methods: {
    getDatePromo() {
      const date = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString(this.$i18n.locale, options);
    },
    resolve_img_url: function (path) {
      let images = require.context(
        "./../../assets/images/",
        false,
        /\.png$|\.jpg$/
      );
      return images("./" + path);
    },
  },
});
</script>

<style scoped>
.carousel-slide-image {
  width: 250px;
  height: 250px;
}
.title-promo {
  font-weight: bold;
}
.btn-like {
  position: absolute;
  top: 25px;
  right: 25px;
}
.btn-share {
  position: absolute;
  top: 60px;
  right: 25px;
}
</style>
