<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn @click="goToPage('menu')" flat dense round aria-label="Menu"
          ><q-icon><img :src="getImgMenu()" /></q-icon
        ></q-btn>
      </q-toolbar-title>
      <q-btn
        v-if="visibleOptionHeader"
        @click="goToPage('advertisements')"
        flat
        round
        dense
        icon="ti-volume"
        class="q-mr-xs"
      >
        <q-tooltip class="bg-primary">
          {{ $t("header.buttons.advertisement.text") }}
        </q-tooltip>
      </q-btn>
      <q-btn
        v-if="visibleOptionHeader"
        @click="goToPage('rechages')"
        flat
        round
        dense
        icon="mobile_friendly"
        class="q-mr-xs"
      >
        <q-tooltip class="bg-primary">
          {{ $t("header.buttons.recharge.text") }}
        </q-tooltip>
      </q-btn>
      <q-btn
        v-if="visibleOptionHeader"
        @click="goToPage('combos')"
        flat
        round
        dense
        icon="shopping_cart"
        class="q-mr-xs"
      >
        <q-tooltip class="bg-primary">
          {{ $t("header.buttons.combo.text") }}
        </q-tooltip>
      </q-btn>
      <q-btn
        v-if="visibleOptionHeader"
        @click="goToPage('shipments')"
        flat
        round
        dense
        icon="attach_money"
        class="q-mr-xs"
      >
        <q-tooltip class="bg-primary">
          {{ $t("header.buttons.shipment.text") }}
        </q-tooltip>
      </q-btn>
      <q-btn
        v-if="visibleOptionHeader"
        @click="changeTheme()"
        round
        dense
        :icon="iconTheme"
        class="q-mr-xs"
      >
        <q-tooltip class="bg-primary">
          {{ $t("header.buttons.theme.text") }}
        </q-tooltip>
      </q-btn>
      <q-btn
        v-if="visibleOptionHeader"
        @click="changeLanguage()"
        flat
        round
        dense
        icon="language"
        class="q-mr-xs"
      >
        <q-tooltip class="bg-primary">
          {{ $t("header.buttons.language.text") }}
        </q-tooltip>
      </q-btn>
      <q-btn
        v-if="!visibleOptionHeader"
        @click="goToHome()"
        flat
        round
        dense
        icon="close"
        size="10px"
      >
        <q-tooltip class="bg-primary">
          {{ $t("header.buttons.close.text") }}
        </q-tooltip>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>


<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",
  data() {
    return {
      iconTheme: "wb_sunny",
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/");
      this.$store.dispatch("toolbar/setVisibleOptionHeader", { visible: true });
    },
    goToPage(route) {
      const routeLink = `/${route}`;
      this.$router.push(routeLink);
      this.$store.dispatch("toolbar/setVisibleOptionBack", { visible: false });
    },
    changeTheme() {
      let themeLocale = document.body.getAttribute("data-theme");
      themeLocale =
        themeLocale === null || themeLocale === "blue" ? "blue-dark" : "blue";
      document.body.setAttribute("data-theme", themeLocale);
      this.iconTheme = themeLocale === "blue" ? "brightness_2" : "wb_sunny";
      const iconMenu =
        themeLocale === "blue"
          ? "logo_header_white.png"
          : "logo_header_black.png";
      const iconDetoFooter =
        themeLocale === "blue"
          ? "logo_deto_footer_white.png"
          : "logo_deto_footer_black.png";
      this.$store.dispatch("toolbar/setIconMenuHeader", { value: iconMenu });
      this.$store.dispatch("toolbar/setIconDetoFooter", {
        value: iconDetoFooter,
      });
      localStorage.setItem("theme", themeLocale);
    },
    changeLanguage() {
      this.$i18n.locale = this.$i18n.locale === "es" ? "en-US" : "es";
    },
    getImgMenu() {
      let images = require.context(
        "./../../assets/images/",
        false,
        /\.png$|\.jpg$/
      );
      return images("./" + this.iconMenuHeader);
    },
  },
  computed: {
    visibleOptionHeader: {
      get() {
        return this.$store.state.toolbar.visibleOptionHeader;
      },
      set(value) {
        this.setVisibleOptionHeader({ visible: value });
      },
    },
    iconMenuHeader: {
      get() {
        return this.$store.state.toolbar.iconMenuHeader;
      },
      setIconMenu(value) {
        this.setIconMenuHeader({ value: value });
      },
    },
  },
  mounted() {
    let themeLocale = localStorage.getItem("theme");
    if (themeLocale === null || themeLocale === "blue") {
      this.iconTheme = "brightness_2";
      this.$store.dispatch("toolbar/setIconMenuHeader", {
        value: "logo_header_white.png",
      });
    } else {
      this.iconTheme = "wb_sunny";
      this.$store.dispatch("toolbar/setIconMenuHeader", {
        value: "logo_header_black.png",
      });
    }
  },
});
</script>

