<template>
  <div>
    <q-btn flat dense class="q-mr-xs" @click="clickButton($event, this.name)">
      <q-icon left :name="icon" />
      <span class="text">{{ $t(text) }}</span>
    </q-btn>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonHeader",
  props: ["icon", "text", "name"],
  methods: {
    clickButton(event, btnName) {
      if (btnName !== "theme" && btnName !== "language") {
        const lastSelectButton = this.$store.state.button.selectButtonHeader;
        if (lastSelectButton !== null) {
          lastSelectButton.style.maxWidth = "";
        }
        event.target.style.maxWidth = "7rem";
        this.$store.dispatch("button/setSelectButtonHeader", {
          comp: event.target,
        });
        this.$store.dispatch("button/setSelectButtonMenuName", { name: btnName });
      }
      this.$emit("clickBtn", true);
    },
  },
  computed: {
    selectButtonHeader: {
      get() {
        return this.$store.state.button.selectButtonHeader;
      },
    },
  },
});
</script>

<style scoped>
button .text {
  max-width: 0;
  transition: max-width 0.5s;
  font-size: 11px;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  overflow: hidden;
}

button:hover .text {
  max-width: 7rem !important;
  font-size: 12px;
  transition-delay: 0.1s;
}

button .separator {
  display: inline-block;
  width: 1px;
  transition: width 0.1s;
  transition-delay: 0.5s;
}

button:hover .separator {
  width: 0.5em;
  transition-delay: unset;
}
</style>
