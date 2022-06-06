<template>
   <q-page>
    <div class="btn-visit">
     <q-btn color="primary" label="Comprar" @click="visitPage()">
         <q-icon class="q-pl-sm" name="keyboard_arrow_right" size="10px" />
     </q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RechargePage',
  methods:{
    visitPage(){
      window.open("https://recargas.detooo.com/");
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
