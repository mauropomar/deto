<template>
  <q-page class="flex flex-center bg-backgroud">
    <div
      id="card-content"
      class="row animate__animated"
      :class="classAnimation"
    >
      <div class="col-12">
        <app-button-menu
          :icon="advertiment.icon"
          :text="advertiment.text"
          :name="advertiment.name"
          @clickBtn="goToPage('advertisements')"
        ></app-button-menu>
      </div>
      <div class="col-12">
        <app-button-menu
          :icon="recharges.icon"
          :text="recharges.text"
          :name="recharges.name"
          @clickBtn="goToPage('rechages')"
        ></app-button-menu>
      </div>
      <div class="col-12">
        <app-button-menu
          :icon="shipment.icon"
          :text="shipment.text"
          :name="shipment.name"
          @clickBtn="goToPage('shipments')"
        ></app-button-menu>
      </div>
      <div class="col-12">
        <app-button-menu
          :icon="combo.icon"
          :text="combo.text"
          :name="combo.name"
          @clickBtn="goToPage('combos')"
        ></app-button-menu>
      </div>
      <div class="col-12">
        <app-button-menu
          :icon="news.icon"
          :text="news.text"
          :name="news.name"
          @clickBtn="goToPage('news')"
        ></app-button-menu>
      </div>
      <div class="col-12">
        <app-button-menu
          :icon="theme.icon"
          :text="theme.text"
          :name="theme.name"
          @clickBtn="changeTheme()"
        ></app-button-menu>
      </div>
      <div class="col-12">
        <app-button-menu
          :icon="language.icon"
          :text="language.text"
          :name="language.name"
          @clickBtn="changeLanguage()"
        ></app-button-menu>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import ButtonMenu from "./../components/menu/ButtonMenu.vue";
import "animate.css";

export default defineComponent({
  name: "MenuPage",
  components: {
    "app-button-menu": ButtonMenu,
  },
  data() {
    return {
      advertiment: {
        icon: "ti-volume",
        name:"advertiment",
        text: "header.buttons.advertisement.text",
      },
      recharges: {
        icon: "mobile_friendly",
        name:"recharge",
        text: "header.buttons.recharge.text",
      },
      combo: {
        icon: "shopping_cart",
        name:"combo",
        text: "header.buttons.combo.text",
      },
      shipment: {
        icon: "attach_money",
        name:"shipment",
        text: "header.buttons.shipment.text",
      },
      theme: {
        icon: "wb_sunny",
        name:"theme",
        text: "header.buttons.theme.text",
      },
      news: {
        icon: "description",
        name:"news",
        text: "header.buttons.news.text",
      },
      language: {
        icon: "language",
        name:"language",
        text: "header.buttons.language.text",
      },
    };
  },
  methods: {
    goToPage(route) {
      const routeLink = `/${route}`;
      this.$store.dispatch("animation/setAnimationIn", { value: false });
      setTimeout(() => {
        this.$router.push(routeLink);
      }, 1000);
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
      this.theme.icon =
        themeLocale === "blue" ? "brightness_2" : "wb_sunny";
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
      if (this.animationIn) {
        result = "animate__bounceInDown";
      } else {
        result = "animate__bounceOutUp";
      }
      return result;
    },
    animationIn: {
      get() {
        return this.$store.state.animation.animationIn;
      },
    },
  },
  created() {
    this.$store.dispatch("animation/setAnimationIn", { value: true });
  },
  mounted() {
    this.$store.dispatch("toolbar/setVisibleOptionHeader", { visible: false });
    let themeLocale = localStorage.getItem("theme");
    this.theme.icon =
      themeLocale === null || themeLocale === "blue"
        ? "brightness_2"
        : "wb_sunny";
  },
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
