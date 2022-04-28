<template>
  <v-app>
    <v-main>
      <HelloWorld />
      <JsonFormsDemo />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import JsonFormsDemo from "./components/JsonFormsDemo.vue";

export default {
  name: "App",

  components: {
    HelloWorld,
    JsonFormsDemo,
  },

  data: () => ({
    //
  }),
};
</script>
