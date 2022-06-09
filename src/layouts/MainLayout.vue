<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn
            @click="goToPage('menu')"
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
          />
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

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-primary text-white">
      <q-toolbar>
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
        <q-btn class="q-mr-lg" flat round dense icon="phone">
          <q-tooltip class="bg-primary"> +1(786) 203 7678 </q-tooltip>
        </q-btn>
        <q-separator vertical="false" color="accent" />
        <div class="q-mr-sm">Deto</div>
        <div class="q-mr-sm" style="font-size: 10px">
          {{ getFullYear() }} @ {{ $t("footer.copyright") }}
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
  components: {},
  data() {
    return {
     iconTheme: 'wb_sunny',
    };
  },
  methods: {
    getFullYear() {
      return new Date().getFullYear();
    },
    goToHome() {
      this.$router.push("/");
      this.$store.dispatch("toolbar/setVisibleOptionHeader", { visible: true });
    },
    goToPage(route) {
      const routeLink = `/${route}`;
      this.$router.push(routeLink);
      this.$store.dispatch("toolbar/setVisibleOptionBack", { visible: false });
    },
    goToPageBack() {
      this.$router.go(-1);
      this.$store.dispatch("toolbar/setVisibleOptionHeader", {
        visible: false,
      });
      this.$store.dispatch("toolbar/setVisibleOptionBack", { visible: false });
    },
    changeTheme() {
      let themeLocale = document.body.getAttribute("data-theme");
      themeLocale =
        (themeLocale === null) || (themeLocale === "blue")
          ? "blue-dark"
          : "blue";
      document.body.setAttribute("data-theme", themeLocale);
      this.iconTheme = themeLocale === 'blue' ?  "brightness_2" : "wb_sunny";
      localStorage.setItem('theme', themeLocale);
    },
    changeLanguage() {
      this.$i18n.locale = this.$i18n.locale === "es" ? "en-US" : "es";
    }
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
    visibleOptionBack: {
      get() {
        return this.$store.state.toolbar.visibleOptionBack;
      },
      set(value) {
        this.setVisibleOptionBack({ visible: value });
      },
    }
  },
  mounted(){
    let themeLocale = localStorage.getItem('theme');
    this.iconTheme = (themeLocale === null) || (themeLocale === "blue")? "brightness_2" : "wb_sunny";
    themeLocale = (themeLocale === null) | (themeLocale === "blue") ? "blue" : "blue-dark";
    document.body.setAttribute("data-theme", themeLocale);
  }
});
</script>
