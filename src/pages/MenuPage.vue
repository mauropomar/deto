<template>
  <q-page class="flex flex-center">
    <div id="card-content" class="row">
      <div class="col-12">
        <q-btn @click="goToPage('advertisements')" color="primary" icon="ti-volume" label="ANUNCIOS" size="20px" style="width: 50%;"/>
      </div>
      <div class="col-12">
        <q-btn @click="goToPage('rechages')" color="primary" icon="mobile_friendly" label="RECARGAS" size="20px" style="width: 50%;"/>
      </div>
      <div class="col-12">
        <q-btn @click="goToPage('combos')" color="primary" icon="shopping_cart" label="COMBOS" size="20px" style="width: 50%;"/>
      </div>
      <div class="col-12">
        <q-btn @click="goToPage('shipments')" color="primary" icon="attach_money" label="ENVIOS" size="20px" style="width: 50%;"/>
      </div>
      <div class="col-12">
        <q-btn @click="goToPage('news')" color="primary" icon="description" label="NOTICIAS" size="20px" style="width: 50%;"/>
      </div>
       <div class="col-12">
         <q-btn color="primary" icon="brightness_2" label="TEMAS" size="20px" style="width: 50%;"/>
      </div>
      <div class="col-12">
        <q-btn color="primary" icon="language" label="IDIOMA" size="20px" style="width: 50%;"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuPage",
  methods: {
     goToPage(route) {
      const routeLink = `/${route}`;
      this.$router.push(routeLink);
      this.$store.dispatch('toolbar/setVisible',{visible:true});
    },
  },
});
</script>

<style scope>
   #card-content{
      text-align: center;
   }
   #card-content > div{
     margin-bottom: 10px;
   }
</style>
