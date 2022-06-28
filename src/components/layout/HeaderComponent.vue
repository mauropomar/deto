<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn @click="clickToMenu()" flat dense round aria-label="Menu"
        >
          <q-icon><img :src="getImgMenu()"/></q-icon
          >
        </q-btn>
      </q-toolbar-title>
      <app-button-header
        v-if="visibleOptionHeader"
        :icon="advertiment.icon"
        :text="advertiment.text"
        :name="advertiment.name"
        :style="advertiment.style"
        @setStyle="setStyleButton($event)"
        @removeStyle="removeStyleButton($event)"
        @clickBtn="goToPage('advertisements')"
      ></app-button-header>
      <app-button-header
        v-if="visibleOptionHeader"
        :icon="recharge.icon"
        :text="recharge.text"
        :name="recharge.name"
        :style="recharge.style"
        @setStyle="setStyleButton($event)"
        @removeStyle="removeStyleButton($event)"
        @clickBtn="goToPage('rechages')"
      ></app-button-header>
      <app-button-header
        v-if="visibleOptionHeader"
        :icon="combo.icon"
        :text="combo.text"
        :name="combo.name"
        :style="combo.style"
        @setStyle="setStyleButton($event)"
        @removeStyle="removeStyleButton($event)"
        @clickBtn="goToPage('combos')"
      ></app-button-header>
      <app-button-header
        v-if="visibleOptionHeader"
        :icon="shipment.icon"
        :text="shipment.text"
        :name="shipment.name"
        :style="shipment.style"
        @setStyle="setStyleButton($event)"
        @removeStyle="removeStyleButton($event)"
        @clickBtn="goToPage('shipments')"
      ></app-button-header>
      <app-button-header
        v-if="visibleOptionHeader"
        :icon="theme.icon"
        :text="theme.text"
        :name="theme.name"
        :style="theme.style"
        @setStyle="setStyleButton($event)"
        @removeStyle="removeStyleButton($event)"
        @clickBtn="changeTheme()"
      ></app-button-header>
      <app-button-header
        v-if="visibleOptionHeader"
        :icon="language.icon"
        :text="language.text"
        :name="language.name"
        :style="language.style"
        @setStyle="setStyleButton($event)"
        @removeStyle="removeStyleButton($event)"
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
  import {defineComponent} from "vue";
  import ButtonHeader from "./../header/ButtonHeader.vue";

  export default defineComponent({
    name: "HeaderComponent",
    components: {
      "app-button-header": ButtonHeader,
    },
    data() {
      return {
        advertiment: {
          icon: "ti-volume",
          name: "advertiment",
          text: "header.buttons.advertisement.text",
          style: "",
        },
        recharge: {
          icon: "mobile_friendly",
          name: "recharge",
          text: "header.buttons.recharge.text",
          style: "",
        },
        combo: {
          icon: "shopping_cart",
          name: "combo",
          text: "header.buttons.combo.text",
          style: "",
        },
        shipment: {
          icon: "attach_money",
          name: "shipment",
          text: "header.buttons.shipment.text",
          style: "",
        },
        theme: {
          icon: "wb_sunny",
          name: "theme",
          text: "header.buttons.theme.text",
          style: "",
        },
        language: {
          icon: "language",
          name: "language",
          text: "header.buttons.language.text",
          style: "",
        },
      };
    },
    methods: {
      clickToMenu() {
        const routePath = this.$route.path;
        if (routePath.indexOf("menu") === -1) {
          this.$store.dispatch("animation/setAnimationIn", {value: false});
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
        this.$store.dispatch("button/setSelectButtonMenuName", {name: ""});
        this.$store.dispatch("animation/setAnimationIn", {value: false});
        setTimeout(() => {
          this.$router.push("/");
        }, 1000);
        this.$store.dispatch("toolbar/setVisibleOptionHeader", {visible: true});
      },
      goToPage(route) {
        const routeLink = `/${route}`;
        if (this.$route.path !== routeLink) {
          this.$store.dispatch("animation/setAnimationIn", {value: false});
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
        this.applyThemeHeader(themeLocale);
        this.theme.icon = themeLocale === "blue" ? "brightness_2" : "wb_sunny";
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
        this.$store.dispatch("toolbar/setIconMenuHeader", {value: iconMenu});
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
      getStyleSelectButton(theme){
        let style = "";
        if (theme === null || theme === "blue") {
          style = {
            "background-color": "#fff !important",
            "color": "#0956a8 !important",
            "border": "2px solid #0956a8",
            "border-radius": "10px"
          };
        } else {
          style = {
            "background-color": "black !important",
            "color": "#0956a8 !important",
            "border": "2px solid #0956a8",
            "border-radius": "10px",
          };
        }
        return style;
      },
      getStyleNotSelectButton(theme){
        let style = "";
        if (theme === null || theme === "blue") {
          style = {
            "background-color": "#0956a8",
            "color": "#fff !important",
            "border": "2px solid #0956a8",
          };
        } else {
          style = {
            "background-color": "#0956a8",
            "color": "black !important",
            "border": "2px solid #0956a8",
          };
        }
        return style;
      },
      setStyleButton(name) {
        let themeLocale = localStorage.getItem("theme");
        const style = this.getStyleSelectButton(themeLocale);
        this[name].style = style;
      },
      removeStyleButton(name) {
        if(name !== null){
          let themeLocale = localStorage.getItem("theme");
          const style = this.getStyleNotSelectButton(themeLocale);
          this[name].style = style;
        }
      },
      applyThemeHeader(theme) {
        let items = ["advertiment", "recharge", "combo", "shipment"];
        const style1 = this.getStyleNotSelectButton(theme);
        const activeBtnName = this.selectButtonHeader ?this.selectButtonHeader.id: null;
        items.forEach((value) => {
          if(value !== activeBtnName) {
            this[value].style = style1;
          }else{
            let style2 = this.getStyleSelectButton(theme);
            this[value].style = style2;
          }
        });
      }
    },
    computed: {
      visibleOptionHeader: {
        get() {
          return this.$store.state.toolbar.visibleOptionHeader
        },
        set(value) {
          this.setVisibleOptionHeader({visible: value});
        },
      },
      iconMenuHeader: {
        get() {
          return this.$store.state.toolbar.iconMenuHeader
        },
        setIconMenu(value) {
          this.setIconMenuHeader({value: value});
        },
      },
      selectButtonHeader: {
        get() {
          return this.$store.state.button.selectButtonHeader
        },
      }
    },
    mounted() {
      let themeLocale = localStorage.getItem("theme");
      if (themeLocale === null || themeLocale === "blue") {
        this.theme.icon = "brightness_2";
        this.$store.dispatch("toolbar/setIconMenuHeader", {
          value: "logo_header_white.png",
        });
      } else {
        this.theme.icon = "wb_sunny";
        this.$store.dispatch("toolbar/setIconMenuHeader", {
          value: "logo_header_black.png",
        });
      }
    },
  });
</script>
