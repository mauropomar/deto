<template>
  <q-page class="flex flex-center bg-backgroud">
    <div id="card-content" class="row animate__animated animate__bounceInDown" :class="classAnimation">
      <div class="col-12">
        <q-btn
          @click="goToPage('advertisements')"
          flat
          color="primary"
          text-color="primary"
          icon="ti-volume"
          size="20px"
          :label="$t('header.buttons.advertisement.text')"
        />
      </div>
      <div class="col-12">
        <q-btn
          @click="goToPage('rechages')"
          flat
          color="primary"
          text-color="primary"
          icon="mobile_friendly"
          size="20px"
          :label="$t('header.buttons.recharge.text')"
        />
      </div>
      <div class="col-12">
        <q-btn
          @click="goToPage('combos')"
          flat
          color="primary"
          text-color="primary"
          icon="shopping_cart"
          size="20px"
          :label="$t('header.buttons.combo.text')"
        />
      </div>
      <div class="col-12">
        <q-btn
          @click="goToPage('shipments')"
          flat
          color="primary"
          text-color="primary"
          icon="attach_money"
          size="20px"
          :label="$t('header.buttons.shipment.text')"
        />
      </div>
      <div class="col-12">
        <q-btn
          @click="goToPage('news')"
          flat
          color="primary"
          text-color="primary"
          icon="description"
          size="20px"
          :label="$t('header.buttons.news.text')"
        />
      </div>
      <div class="col-12">
        <q-btn
          flat
          color="primary"
          text-color="primary"
          :icon="iconTheme"
          size="20px"
          :label="$t('header.buttons.theme.text')"
          @click="changeTheme()"
        />
      </div>
      <div class="col-12">
        <q-btn
          flat
          color="primary"
          text-color="primary"
          icon="language"
          size="20px"
          :label="$t('header.buttons.language.text')"
          style="width: 90%"
          @click="changeLanguage()"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue"
import "animate.css"

export default defineComponent({
  name: "MenuPage",
  data() {
    return {
      iconTheme: "wb_sunny",
      animateContainer: true
    };
  },
  methods: {
    goToPage(route) {
      const routeLink = `/${route}`;
      this.$router.push(routeLink);
      this.$store.dispatch("toolbar/setVisibleOptionHeader", { visible: true });
      this.$store.dispatch("toolbar/setVisibleOptionBack", { visible: true });
    },
    changeLanguage() {
      this.$i18n.locale = this.$i18n.locale === "es" ? "en-US" : "es";
    },
    changeTheme() {
      let themeLocale = document.body.getAttribute("data-theme");
      themeLocale =
        (themeLocale === null) | (themeLocale === "blue")
          ? "blue-dark"
          : "blue";
      document.body.setAttribute("data-theme", themeLocale);
      localStorage.setItem("theme", themeLocale);
      this.iconTheme = themeLocale === "blue" ? "brightness_2" : "wb_sunny";
      const iconMenu =
        themeLocale === "blue"
          ? "logo_header_white.png"
          : "logo_header_black.png";
      const iconDetoFooter =
        themeLocale === "blue"
          ? "logo_deto_footer_white.png"
          : "logo_deto_footer_black.png";
      this.$store.dispatch("toolbar/setIconMenuHeader", {
        value: iconMenu,
      });
      this.$store.dispatch("toolbar/setIconDetoFooter", {
        value: iconDetoFooter,
      });
    },
  },
  computed: {
    classAnimation() {
      let result;
      if (this.animateContainer) {
        result = "animate__bounceInDown";
      } else {
        result = "animate__bounceOutUp";
      }
      return result;
    },
  },
  mounted() {
    this.$store.dispatch("toolbar/setVisibleOptionHeader", { visible: false });
    let themeLocale = localStorage.getItem("theme");
    this.iconTheme =
      themeLocale === null || themeLocale === "blue"
        ? "brightness_2"
        : "wb_sunny";
  }
});
</script>

<style scope>
#card-content {
  text-align: center;
}
#card-content > div {
  margin-bottom: 10px;
}
.bg-backgroud {
  background: linear-gradient(90deg, #008dd2 0%, #0956a8 100%);
}
</style>
