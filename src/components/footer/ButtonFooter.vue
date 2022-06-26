<template>
  <div>
    <q-btn flat
        dense
        class="q-mr-xs"
        @click="clickButton()"
      >
      <q-icon left :name="icon" :size="size"/>
      <span class="text">{{ $t(text) }}</span>
    </q-btn>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonFooter",
  props: ["icon", "text", "size"],
  methods:{
    clickButton(){
       this.$emit("clickBtn",true);
    }
  }
});
</script>

<style scoped>
button .text {
  max-width: 0;
  transition: max-width 0.5s;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  overflow: hidden;
}

button:hover .text {
  max-width: 7rem;
  font-size: 10px;
  transition-delay: 0.1s;
}

button .separator {
  display: inline-block;
  width: 0;
  transition: width 0.1s;
  transition-delay: 0.5s;
}

button:hover .separator {
  width: 0.3em;
  transition-delay: unset;
}
</style>
