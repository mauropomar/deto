<template>
  <q-page>
     <div class="q-pa-md">
       <app-carousel-news></app-carousel-news>
  </div>
  </q-page>
</template>

<script>
import CarouselNewsComponent from "components/news/CarouselNewsComponent";
import { defineComponent } from "vue";

export default defineComponent({
  name: 'NewsPage',
  components:{
    'app-carousel-news': CarouselNewsComponent
  }
})
</script>
