<template>
  <q-page class="flex flex-center bg-backgroud">
    <div
      id="card-content"
      class="row animate__animated"
      :class="classAnimation"
    >
      <div class="col-12">
        <app-button-menu
          :icon="iconAdvertiment.icon"
          :text="iconAdvertiment.text"
          :name="iconAdvertiment.name"
          @clickBtn="goToPage('advertisements')"
        ></app-button-menu>
      </div>
      <div class="col-12">
        <app-button-menu
          :icon="iconRecharges.icon"
          :text="iconRecharges.text"
          :name="iconRecharges.name"
          @clickBtn="goToPage('rechages')"
        ></app-button-menu>
      </div>
      <div class="col-12">
        <app-button-menu
          :icon="iconShipment.icon"
          :text="iconShipment.text"
          :name="iconShipment.name"
          @clickBtn="goToPage('shipments')"
        ></app-button-menu>
      </div>
      <div class="col-12">
        <app-button-menu
          :icon="iconCombo.icon"
          :text="iconCombo.text"
          :name="iconCombo.name"
          @clickBtn="goToPage('combos')"
        ></app-button-menu>
      </div>
      <div class="col-12">
        <app-button-menu
          :icon="iconNews.icon"
          :text="iconNews.text"
          :name="iconNews.name"
          @clickBtn="goToPage('news')"
        ></app-button-menu>
      </div>
      <div class="col-12">
        <app-button-menu
          :icon="iconTheme.icon"
          :text="iconTheme.text"
          :name="iconTheme.name"
          @clickBtn="changeTheme()"
        ></app-button-menu>
      </div>
      <div class="col-12">
        <app-button-menu
          :icon="iconLanguage.icon"
          :text="iconLanguage.text"
          :name="iconLanguage.name"
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
      iconAdvertiment: {
        icon: "ti-volume",
        name:"advertiment",
        text: "header.buttons.advertisement.text",
      },
      iconRecharges: {
        icon: "mobile_friendly",
        name:"recharge",
        text: "header.buttons.recharge.text",
      },
      iconCombo: {
        icon: "shopping_cart",
        name:"combo",
        text: "header.buttons.combo.text",
      },
      iconShipment: {
        icon: "attach_money",
        name:"shipment",
        text: "header.buttons.shipment.text",
      },
      iconTheme: {
        icon: "wb_sunny",
        name:"theme",
        text: "header.buttons.theme.text",
      },
      iconNews: {
        icon: "description",
        name:"news",
        text: "header.buttons.news.text",
      },
      iconLanguage: {
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
    this.iconTheme.icon =
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
