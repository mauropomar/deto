<template>
  <q-footer elevated class="bg-primary text-white">
    <q-toolbar>
      <app-footer></app-footer>
      <app-button-footer
         v-if="!visibleOptionBack"
         :icon="iconDisplace.icon"
         :text="iconDisplace.text"
         :size="iconDisplace.size"
         @clickBtn="displace()"
         >
      </app-button-footer>
      <app-button-footer
         v-if="visibleOptionBack"
         :icon="iconBack.icon"
         :text="iconBack.text"
         :size="iconBack.size"
          @clickBtn="goToPageBack()"
         >
      </app-button-footer>
      <q-space />
      <app-button-footer
         :icon="iconPhone.icon"
         :text="iconPhone.text"
         :size="iconPhone.size"
        @click="callNumber()"
         >
      </app-button-footer>
      <q-separator vertical="false" color="accent" />
      <q-icon class="q-mr-sm" size="40px"
        ><img :src="getImgLogoDeto()"/></q-icon>
      <div class="q-mr-sm" style="font-size: 10px">
        {{ getFullYear() }} @ {{ $t("footer.copyright") }}
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script>
import { defineComponent } from "vue";
import ButtonFooter from "./../footer/ButtonFooter.vue"

export default defineComponent({
  name: "FooterComponent",
  components:{
     "app-button-footer": ButtonFooter,
  },
  data() {
    return {
      iconBack: {
        icon: "ti-arrow-left",
        text: "footer.buttons.back.text",
        size:"12px"
      },
      iconDisplace: {
        icon: "ti-exchange-vertical",
        text: "footer.buttons.displace.text",
        size:"12px"
      },
      iconPhone: {
        icon: "phone",
        text: "+1(786) 203 7678",
        size:"20px"
      },
    }
  },
  methods: {
    getFullYear() {
      return new Date().getFullYear();
    },
    displace(){

    },
    goToPageBack() {
      this.$store.dispatch("animation/setAnimationIn", { value: false });
      setTimeout(()=>{
         this.$router.go(-1);
      }, 1000);
      this.$store.dispatch("toolbar/setVisibleOptionHeader", {
        visible: false,
      });
      this.$store.dispatch("toolbar/setVisibleOptionBack", { visible: false });
    },
    callNumber() {
      window.open("tel:1(786) 203 7678");
    },
    getImgLogoDeto() {
      let images = require.context(
        "./../../assets/images/",
        false,
        /\.png$|\.jpg$/
      );
      return images("./" + this.iconDetoFooter);
    },
  },
  computed: {
    visibleOptionBack: {
      get() {
        return this.$store.state.toolbar.visibleOptionBack;
      },
      set(value) {
        this.setVisibleOptionBack({ visible: value });
      },
    },
    iconDetoFooter: {
      get() {
        return this.$store.state.toolbar.iconDetoFooter;
      },
      setIconMenu(value) {
        this.setIconDetoFooter({ value: value });
      },
    },
  },
  mounted() {
    let themeLocale = localStorage.getItem("theme");
    if (themeLocale === null || themeLocale === "blue") {
      this.$store.dispatch("toolbar/setIconDetoFooter", {
        value: "logo_deto_footer_white.png",
      });
    } else {
      this.$store.dispatch("toolbar/setIconDetoFooter", {
        value: "logo_deto_footer_black.png",
      });
    }
  },
});
</script>
