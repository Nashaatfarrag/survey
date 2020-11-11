<template>
  <v-app>
    <v-app-bar app color="primary" dark>

    </v-app-bar>

    <v-main>
      <DynamicTest />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import DynamicTest from "./components/dynamicTest"

export default {
  name: "App",

  components: {
    // HelloWorld,
    DynamicTest
  },

  data: () => ({
    //
  })
};
</script>
