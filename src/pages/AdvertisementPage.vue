<template>
  <q-page>
    <div class="btn-visit">
     <q-btn color="primary" label="Visitar" @click="visitPage()">
         <q-icon class="q-pl-sm" name="keyboard_arrow_right" size="10px" />
     </q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AdvertisementPage',
  methods:{
    visitPage(){
      window.open("https://anuncios.detooo.com/login");
    }
  }
})
</script>

<style>
  .btn-visit{
    position: absolute;
    bottom: 240px;
    left: 250px;
  }
</style>
