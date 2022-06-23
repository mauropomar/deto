<template>
    <q-footer elevated class="bg-primary text-white">
      <q-toolbar>
        <app-footer></app-footer>
        <q-btn flat round dense v-if="!visibleOptionBack">
          <q-icon name="ti-exchange-vertical" size="15px"></q-icon>
          <q-tooltip class="bg-primary">
            {{ $t("footer.buttons.displace.text") }}
          </q-tooltip>
        </q-btn>
        <q-btn
          flat
          round
          dense
          v-if="visibleOptionBack"
          @click="goToPageBack()"
        >
          <q-icon name="ti-arrow-left" size="15px"></q-icon>
          <q-tooltip class="bg-primary">
            {{ $t("footer.buttons.back.text") }}
          </q-tooltip>
        </q-btn>
        <q-space />
        <q-btn class="q-mr-lg" flat round dense icon="phone" @click="callNumber()">
          <q-tooltip class="bg-primary"> +1(786) 203 7678 </q-tooltip>
        </q-btn>
        <q-separator vertical="false" color="accent" />
        <q-icon class="q-mr-sm" size="40px"><img :src="getImgLogoDeto()"/></q-icon>
        <div class="q-mr-sm" style="font-size: 10px">
          {{ getFullYear() }} @ {{ $t("footer.copyright") }}
        </div>
      </q-toolbar>
    </q-footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
  methods: {
    getFullYear() {
      return new Date().getFullYear();
    },
    goToPageBack() {
      this.$router.go(-1);
      this.$store.dispatch("toolbar/setVisibleOptionHeader", {
        visible: false,
      });
      this.$store.dispatch("toolbar/setVisibleOptionBack", { visible: false });
    },
    callNumber(){
       window.open('tel:1(786) 203 7678');
    },
    getImgLogoDeto() {
      let images = require.context(
        "./../../assets/images/",
        false,
        /\.png$|\.jpg$/
      );
      return images("./" + this.iconDetoFooter);
    },
  },
  computed: {
    visibleOptionBack: {
      get() {
        return this.$store.state.toolbar.visibleOptionBack;
      },
      set(value) {
        this.setVisibleOptionBack({ visible: value });
      },
    },
    iconDetoFooter: {
      get() {
        return this.$store.state.toolbar.iconDetoFooter;
      },
      setIconMenu(value) {
        this.setIconDetoFooter({ value: value });
      },
    },
  },
  mounted() {
    let themeLocale = localStorage.getItem("theme");
    if (themeLocale === null || themeLocale === "blue") {
      this.$store.dispatch("toolbar/setIconDetoFooter", {
        value: "logo_deto_footer_white.png",
      });
    } else {
      this.$store.dispatch("toolbar/setIconDetoFooter", {
        value: "logo_deto_footer_black.png",
      });
    }
  },
});
</script>

<style>
</style>
