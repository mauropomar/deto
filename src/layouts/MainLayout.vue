<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
        />
        </q-toolbar-title>
      <q-btn flat round dense icon="record_voice_over" class="q-mr-xs" />
      <q-btn flat round dense icon="mobile_friendly" class="q-mr-xs" />
      <q-btn flat round dense icon="shopping_cart" class="q-mr-xs" />
      <q-btn flat round dense icon="attach_money" class="q-mr-xs" />
      <q-btn flat round dense icon="brightness_2" class="q-mr-xs" />
      <q-btn flat round dense icon="language" class="q-mr-xs" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-primary text-white">
      <q-toolbar>
          <q-btn flat round dense icon="compare_arrows"/>
          <q-space />
          <q-btn class="q-mr-lg" flat round dense icon="phone"/>
          <q-separator vertical="false" color="accent"/>
          <div class="q-mr-sm">Deto</div>
          <div>|{{getFullYear()}} @ Todos los derechos estan reservados</div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'MainLayout',
  components: {

  },
  methods:{
    getFullYear(){
      return new Date().getFullYear();
    }
  }
})
</script>
