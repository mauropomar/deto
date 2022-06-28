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
      const lastSelectName = this.activeButtonHeader
        ? this.activeButtonHeader.id
        : null;
      if (
        btnName !== "theme" &&
        btnName !== "language" &&
        lastSelectName !== btnName
      ) {
        if (this.activeButtonHeader !== null) {
          this.activeButtonHeader.style.maxWidth = "";
        }
        event.target.style.maxWidth = "7rem";
        event.target.id = btnName;
        this.$store.dispatch("button/setActiveButtonHeader", {
          comp: event.target,
        });
        this.$store.dispatch("button/setActiveButtonMenuName", {
          name: btnName,
        });
        this.$emit("setStyle", btnName);
        if (this.activeButtonHeader !== null) {
          this.$emit("removeStyle", lastSelectName);
        }
      }
      this.$emit("clickBtn");
    },
  },
  computed: {
    activeButtonHeader: {
      get() {
        return this.$store.state.button.activeButtonHeader;
      },
    },
    activeButtonMenuName: {
      get() {
        return this.$store.state.button.activeButtonMenuName;
      },
    },
  },
  mounted() {
    if (this.activeButtonMenuName === this.name) {
      if (this.activeButtonHeader !== null) {
        this.activeButtonHeader.style.maxWidth = "";
        this.$el.style.maxWidth = "7rem";
        this.$el.id = this.name;
        this.$emit("removeStyle", this.activeButtonHeader.id);
        this.$store.dispatch("button/setActiveButtonHeader", {
          comp: this.$el,
        });
        this.$emit("setStyle", this.name);
      } else {
        this.$el.style.maxWidth = "7rem";
        this.$el.id = this.name;
        this.$store.dispatch("button/setActiveButtonHeader", {
          comp: this.$el,
        });
        this.$emit("setStyle", this.name);
      }
    } else {
      if (this.activeButtonMenuName === "" &&  this.activeButtonHeader !== null) {
        this.$emit("removeStyle", this.activeButtonHeader.id);
        this.$store.dispatch("button/setActiveButtonHeader", {
          comp: null,
        });
      } else {
        if (this.name !== "theme" && this.name !== "language") {
          this.$emit("removeStyle", this.name);
        }
      }
    }
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
