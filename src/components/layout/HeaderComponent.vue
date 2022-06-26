<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn @click="clickToMenu()" flat dense round aria-label="Menu"
          ><q-icon><img :src="getImgMenu()" /></q-icon
        ></q-btn>
      </q-toolbar-title>
      <app-button-header
        v-if="visibleOptionHeader"
        :icon="iconAdvertiment.icon"
        :text="iconAdvertiment.text"
        @clickBtn="goToPage('advertisements')"
      ></app-button-header>
      <app-button-header
        v-if="visibleOptionHeader"
        :icon="iconRecharges.icon"
        :text="iconRecharges.text"
        @clickBtn="goToPage('rechages')"
      ></app-button-header>
      <app-button-header
        v-if="visibleOptionHeader"
        :icon="iconCombo.icon"
        :text="iconCombo.text"
        @clickBtn="goToPage('combos')"
      ></app-button-header>
      <app-button-header
        v-if="visibleOptionHeader"
        :icon="iconShipment.icon"
        :text="iconShipment.text"
        @clickBtn="goToPage('shipments')"
      ></app-button-header>
      <app-button-header
        v-if="visibleOptionHeader"
        :icon="iconTheme.icon"
        :text="iconTheme.text"
        @clickBtn="changeTheme()"
      ></app-button-header>
      <app-button-header
        v-if="visibleOptionHeader"
        :icon="iconLanguage.icon"
        :text="iconLanguage.text"
        @clickBtn="changeLanguage()"
      ></app-button-header>
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
import ButtonHeader from "./../header/ButtonHeader.vue";

export default defineComponent({
  name: "HeaderComponent",
  components: {
    "app-button-header": ButtonHeader,
  },
  data() {
    return {
      iconAdvertiment: {
        icon: "ti-volume",
        text: "header.buttons.advertisement.text",
      },
      iconRecharges: {
        icon: "mobile_friendly",
        text: "header.buttons.recharge.text",
      },
      iconCombo: {
        icon: "shopping_cart",
        text: "header.buttons.combo.text",
      },
      iconShipment: {
        icon: "attach_money",
        text: "header.buttons.shipment.text",
      },
      iconTheme: {
        icon: "wb_sunny",
        text: "header.buttons.theme.text",
      },
      iconLanguage: {
        icon: "language",
        text: "header.buttons.language.text",
      },
    };
  },
  methods: {
    clickToMenu() {
      const routePath = this.$route.path;
      if (routePath.indexOf("menu") === -1) {
        this.$store.dispatch("animation/setAnimationIn", { value: false });
        setTimeout(() => {
          this.$router.push("menu");
        }, 1000);
        this.$store.dispatch("toolbar/setVisibleOptionBack", {
          visible: false,
        });
      } else {
        this.goToHome();
      }
    },
    goToHome() {
      this.$store.dispatch("button/setSelectName", { name: "" });
      this.$store.dispatch("animation/setAnimationIn", { value: false });
      setTimeout(() => {
        this.$router.push("/");
      }, 1000);
      this.$store.dispatch("toolbar/setVisibleOptionHeader", { visible: true });
    },
    goToPage(route) {
      const routeLink = `/${route}`;
      if (this.$route.path !== routeLink) {
        this.$store.dispatch("animation/setAnimationIn", { value: false });
        setTimeout(() => {
          this.$router.push(routeLink);
        }, 1000);
        this.$store.dispatch("toolbar/setVisibleOptionBack", {
          visible: false,
        });
      }
    },
    changeTheme() {
      let themeLocale = document.body.getAttribute("data-theme");
      themeLocale =
        themeLocale === null || themeLocale === "blue" ? "blue-dark" : "blue";
      document.body.setAttribute("data-theme", themeLocale);
      this.iconTheme.icon =
        themeLocale === "blue" ? "brightness_2" : "wb_sunny";
      const iconMenu =
        themeLocale === "blue"
          ? "logo_header_white.png"
          : "logo_header_black.png";
      const iconDetoFooter =
        themeLocale === "blue"
          ? "logo_deto_footer_white.png"
          : "logo_deto_footer_black.png";
      const imageDetoIndexPage =
        themeLocale === "blue" ? "deto_white.png" : "deto_black.png";
      this.$store.dispatch("toolbar/setIconMenuHeader", { value: iconMenu });
      this.$store.dispatch("toolbar/setIconDetoFooter", {
        value: iconDetoFooter,
      });
      this.$store.dispatch("toolbar/setImageDetoIndexPage", {
        value: imageDetoIndexPage,
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
      this.iconTheme.icon = "brightness_2";
      this.$store.dispatch("toolbar/setIconMenuHeader", {
        value: "logo_header_white.png",
      });
    } else {
      this.iconTheme.icon = "wb_sunny";
      this.$store.dispatch("toolbar/setIconMenuHeader", {
        value: "logo_header_black.png",
      });
    }
  },
});
</script>
