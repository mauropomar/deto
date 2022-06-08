<template>
  <q-page class="flex flex-center">
    <div id="card-content" class="row">
      <div class="col-12">
        <q-btn
          @click="goToPage('advertisements')"
          color="primary"
          icon="ti-volume"
          size="20px"
          :label="$t('header.buttons.advertisement.text')"
          style="width: 25%"
        />
      </div>
      <div class="col-12">
        <q-btn
          @click="goToPage('rechages')"
          color="primary"
          icon="mobile_friendly"
          size="20px"
          :label="$t('header.buttons.recharge.text')"
          style="width: 25%"
        />
      </div>
      <div class="col-12">
        <q-btn
          @click="goToPage('combos')"
          color="primary"
          icon="shopping_cart"
          size="20px"
          :label="$t('header.buttons.combo.text')"
          style="width: 25%"
        />
      </div>
      <div class="col-12">
        <q-btn
          @click="goToPage('shipments')"
          color="primary"
          icon="attach_money"
          size="20px"
          :label="$t('header.buttons.shipment.text')"
          style="width: 25%"
        />
      </div>
      <div class="col-12">
        <q-btn
          @click="goToPage('news')"
          color="primary"
          icon="description"
          size="20px"
          :label="$t('header.buttons.news.text')"
          style="width: 25%"
        />
      </div>
      <div class="col-12">
        <q-btn
          color="primary"
          icon="brightness_2"
          size="20px"
          :label="$t('header.buttons.theme.text')"
          style="width: 25%"
        />
      </div>
      <div class="col-12">
        <q-btn
          color="primary"
          icon="language"
          size="20px"
          :label="$t('header.buttons.language.text')"
          style="width: 25%"
          @click="changeLanguage()"
        />
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
      this.$store.dispatch("toolbar/setVisibleOptionHeader", { visible: true });
      this.$store.dispatch("toolbar/setVisibleOptionBack", { visible: true });
    },
    changeLanguage() {
      this.$i18n.locale = this.$i18n.locale === "es" ? "en-US" : "es";
    },
  },
  mounted() {
    this.$store.dispatch("toolbar/setVisibleOptionHeader", { visible: false });
  },
});
</script>

<style scope>
#card-content {
  text-align: center;
}
#card-content > div {
  margin-bottom: 10px;
}
</style>
