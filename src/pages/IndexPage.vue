<template>
  <q-page class="bg-backgroud">
    <div id="section" class="row">
      <div class="col-12 col-sm-5 flex flex-center">
        <div class="row q-pa-md">
          <div class="col-12 text-center section-title">
            TODO LO QUE <br />NECESITAS
          </div>
          <div class="col-12 text-center q-mt-md">
            Somos una plataforma multiservicio para Cuba
          </div>
          <div class="col-12 text-center q-mt-md">
            <q-btn
              color="primary"
              text-color="primary"
              icon="mobile_friendly"
              :label="$t('header.buttons.news.text')"
            />
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-7">
        <div class="flex flex-center section-rt">
          <img src="../assets/images/deto.png" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style scope>
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

.bg-backgroud {
  background: linear-gradient(90deg, #008dd2 0%, #0956a8 100%);
}
</style>
