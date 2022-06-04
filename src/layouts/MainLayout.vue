<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn flat dense round icon="menu" aria-label="Menu" />
        </q-toolbar-title>
        <q-btn @click="goToPage('advertisements')" flat round dense  icon="record_voice_over" class="q-mr-xs">
            <q-tooltip class="bg-primary">
              Anuncios
            </q-tooltip>
        </q-btn>
        <q-btn @click="goToPage('rechages')" flat round dense icon="mobile_friendly" class="q-mr-xs">
           <q-tooltip class="bg-primary">
                 Recargas
           </q-tooltip>
        </q-btn>
        <q-btn @click="goToPage('combos')" flat round dense icon="shopping_cart" class="q-mr-xs">
            <q-tooltip class="bg-primary">
                 Combos
           </q-tooltip>
        </q-btn>
        <q-btn @click="goToPage('shipments')" flat round dense icon="attach_money" class="q-mr-xs">
            <q-tooltip class="bg-primary">
              Envios
           </q-tooltip>
        </q-btn>
        <q-btn @click="changeTheme()"  round dense icon="brightness_2" class="q-mr-xs">
            <q-tooltip class="bg-primary">
              Temas
           </q-tooltip>
        </q-btn>
        <q-btn @click="changeLanguage()" flat round dense icon="language" class="q-mr-xs">
            <q-tooltip class="bg-primary">
              Lenguajes
           </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat round dense icon="compare_arrows">
          <q-tooltip class="bg-primary">
              Dezplazar
           </q-tooltip>
        </q-btn>
        <q-space />
        <q-btn class="q-mr-lg" flat round dense icon="phone">
          <q-tooltip class="bg-primary">
              +1(786) 203 7678
           </q-tooltip>
        </q-btn>
        <q-separator vertical="false" color="accent" />
        <div class="q-mr-sm">Deto</div>
        <div>{{ getFullYear() }} @ Todos los derechos estan reservados</div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  components: {},
  methods: {
    getFullYear() {
      return new Date().getFullYear();
    },
    goToPage(route) {
      const routeLink = `/${route}`;
      this.$router.push(routeLink);
    },
    changeTheme(){

    },
    changeLanguage(){

    }
  },
});
</script>
