<template>
  <q-layout view="hHh lpR fFf">
    <app-header></app-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <app-footer></app-footer>
  </q-layout>
</template>

<script>
import HeaderComponent from "../components/layout/HeaderComponent.vue";
import FooterComponent from "../components/layout/FooterComponent.vue";
import { defineComponent } from "vue";


export default defineComponent({
  name: "MainLayout",
  components: {
    "app-footer": FooterComponent,
    "app-header": HeaderComponent,
  },
  mounted() {
    let themeLocale = localStorage.getItem("theme");
    themeLocale =
      (themeLocale === null) | (themeLocale === "blue") ? "blue" : "blue-dark";
    document.body.setAttribute("data-theme", themeLocale);
  },
});
</script>

<style>
 .q-layout{
   overflow-x: hidden;
   overflow-y: hidden;
   background: linear-gradient(90deg, #008DD2 0%, #0956A8 100%)
}
</style>
