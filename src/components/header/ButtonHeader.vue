<template>
  <div>
    <q-btn flat dense @click="clickButton($event, this.name)" :style="style">
      <q-icon left :name="icon" />
      <span class="text">{{ $t(text) }}</span>
    </q-btn>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonHeader",
  props: ["icon", "text", "name", "style"],
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    clickButton(event, btnName) {
      const lastSelectName = this.selectButtonHeader
        ? this.selectButtonHeader.id
        : null;
      if (
        btnName !== "theme" &&
        btnName !== "language" &&
        lastSelectName !== btnName
      ) {
        if (this.selectButtonHeader !== null) {
          this.selectButtonHeader.style.maxWidth = "";
        }
        event.target.style.maxWidth = "7rem";
        event.target.id = btnName;
        this.$store.dispatch("button/setSelectButtonHeader", {
          comp: event.target,
        });
        this.$store.dispatch("button/setSelectButtonMenuName", {
          name: btnName,
        });
        this.$emit("setStyle", btnName);
        if (this.selectButtonHeader !== null) {
          this.$emit("removeStyle", lastSelectName);
        }
      }
      this.$emit("clickBtn");
    },
  },
  computed: {
    selectButtonHeader: {
      get() {
        return this.$store.state.button.selectButtonHeader;
      },
    },
    selectButtonMenuName: {
      get() {
        return this.$store.state.button.selectButtonMenuName;
      },
    },
  },
  mounted() {
    if (this.selectButtonMenuName === this.name) {
      if (this.selectButtonHeader !== null) {
        this.selectButtonHeader.style.maxWidth = "";
        this.$el.style.maxWidth = "7rem";
        this.$el.id = this.name;
        this.$emit("removeStyle", this.selectButtonHeader.id);
        this.$store.dispatch("button/setSelectButtonHeader", {
          comp: this.$el,
        });
        this.$emit("setStyle", this.name);
      } else {
          this.$el.style.maxWidth = "7rem";
          this.$el.id = this.name;
          this.$store.dispatch("button/setSelectButtonHeader", {
            comp: this.$el,
          });
          this.$emit("setStyle", this.name);
        }
      }
      if(this.selectButtonMenuName === '' && this.selectButtonHeader !== null){
        this.$emit("removeStyle", this.selectButtonHeader.id);
        this.$store.dispatch("button/setSelectButtonHeader", {
          comp: null,
        });
      }
    }
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
