<template>
  <q-page class="bg-page">
    <div id="section" class="row">
      <div class="col-12 col-sm-5 flex flex-center">
        <div class="row q-pa-md">
          <div class="col-12 text-center section-title">
            <q-icon name="shopping_cart" size="45px" />
            <div class="col-12 text-center section-title">
              {{ $t("combo.title") }}
            </div>
          </div>
          <div class="col-12 text-center q-mt-md">
            {{ $t("combo.text") }}
          </div>
          <div class="col-12 text-center q-mt-md">
            <q-btn
              color="primary"
              :label="$t('combo.buttons.buy.text')"
              @click="visitPage()"
            >
              <q-icon class="q-pl-sm" name="keyboard_arrow_right" size="10px" />
            </q-btn>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-7">
        <div class="flex flex-center section-rt">
          <img src="../assets/images/combos.png" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComboPage',
  methods:{
    visitPage(){
      window.open("https://tienda.detooo.com/en");
    }
  }
})
</script>

<style>
  .btn-visit {
  position: absolute;
  bottom: 240px;
  left: 250px;
}

#section {
  width: 100vw;
  position: relative;
  background-image: url("./../assets/images/Bg_1.png");
  height: 85vh;
}
 .section-rt {
  height: 100%;
  z-index: 9;
}

img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.section-title {
  font-weight: bold;
  font-size: 25px;
}

.bg-page {
  background: linear-gradient(90deg, #008dd2 0%, #0956a8 100%);
}
</style>
