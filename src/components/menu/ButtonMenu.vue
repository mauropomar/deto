<template>
  <div>
    <q-btn
      flat
      size="20px"
      @click="clickButton(this.name)"
      @mouseover="hoverOver()"
      @mouseout="hoverOut()"
      class="btn-menu"
      :style="getStyle()"
    >
      <q-icon v-if="visible" left :name="icon" />
      <span class="text">{{ $t(text) }}</span>
    </q-btn>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonMenu",
  props: ["icon", "text", "name"],
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    clickButton(name) {
      this.$store.dispatch("button/setActiveButtonMenuName", { name: name });
      this.$emit("clickBtn", true);
    },
    hoverOver() {
      this.visible = true;
    },
    hoverOut() {
      this.visible = false;
    },
    getStyle() {
      const activeBtnName = this.activeButtonMenuName;
      if (activeBtnName === this.name) {
        this.visible = true;
        let themeLocale = document.body.getAttribute("data-theme");
        if (themeLocale === null || themeLocale === "blue") {
          return {
            "background-color": "#fff",
            "color": "#0956a8 !important",
            "border": "2px solid #0956a8",
            "border-radius":"10px"
          };
        } else {
          return {
            "background-color": "black",
            "color": "#0956a8 !important",
            "border": "2px solid #0956a8",
            "border-radius":"10px"
          };
        }
      } else {
        this.visible = false;
        return "";
      }
    },
  },
  computed: {
    activeButtonMenuName: {
      get() {
        return this.$store.state.button.activeButtonMenuName;
      },
    },
  }
});
</script>

<style scope></style>
