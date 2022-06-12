<template>
    <q-footer elevated class="bg-primary text-white">
      <q-toolbar>
        <app-footer></app-footer>
        <q-btn flat round dense v-if="!visibleOptionBack">
          <q-icon name="ti-exchange-vertical" size="15px"></q-icon>
          <q-tooltip class="bg-primary">
            {{ $t("footer.buttons.displace.text") }}
          </q-tooltip>
        </q-btn>
        <q-btn
          flat
          round
          dense
          v-if="visibleOptionBack"
          @click="goToPageBack()"
        >
          <q-icon name="ti-arrow-left" size="15px"></q-icon>
          <q-tooltip class="bg-primary">
            {{ $t("footer.buttons.back.text") }}
          </q-tooltip>
        </q-btn>
        <q-space />
        <q-btn class="q-mr-lg" flat round dense icon="phone" @click="callNumber()">
          <q-tooltip class="bg-primary"> +1(786) 203 7678 </q-tooltip>
        </q-btn>
        <q-separator vertical="false" color="accent" />
        <div class="q-mr-sm">Deto</div>
        <div class="q-mr-sm" style="font-size: 10px">
          {{ getFullYear() }} @ {{ $t("footer.copyright") }}
        </div>
      </q-toolbar>
    </q-footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
  methods: {
    getFullYear() {
      return new Date().getFullYear();
    },
    goToPageBack() {
      this.$router.go(-1);
      this.$store.dispatch("toolbar/setVisibleOptionHeader", {
        visible: false,
      });
      this.$store.dispatch("toolbar/setVisibleOptionBack", { visible: false });
    },
    callNumber(){
       window.open('tel:1(786) 203 7678');
    }
  },
  computed: {
    visibleOptionBack: {
      get() {
        return this.$store.state.toolbar.visibleOptionBack;
      },
      set(value) {
        this.setVisibleOptionBack({ visible: value });
      },
    }
  },
});
</script>

<style>
</style>
