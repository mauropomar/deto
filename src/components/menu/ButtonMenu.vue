<template>
  <div>
    <q-btn
      flat
      color="primary"
      text-color="primary"
      size="20px"
      @click="clickButton()"
      @mouseover="hoverOver()"
      @mouseout="hoverOut()"
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
  props: ["icon", "text"],
  data() {
    return {
      visible:false
    };
  },
  methods: {
    clickButton() {
        this.$emit("clickBtn",true);
    },
    hoverOver(){
      this.visible = true;
    },
    hoverOut(){
      this.visible = false;
    }
  },
});
</script>

<style></style>
