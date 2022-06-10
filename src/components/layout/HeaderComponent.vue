<template>
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
</template>


<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",
  data() {
    return {
     iconTheme: 'wb_sunny',
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
      localStorage.setItem("theme", themeLocale);
    },
    changeLanguage() {
      this.$i18n.locale = this.$i18n.locale === "es" ? "en-US" : "es";
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
    }
  },
});
</script>

