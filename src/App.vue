<template>
  <v-app id="inspire">
    <Header />

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <v-footer color="red lighten-1" app>
      <span class="white--text">&copy; 2019 by: Stefan Simic</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Snackbar from "@/components/Snackbar.vue";

export default {
  components: {
    Header,
    Snackbar
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    text: "Success",
    snackbar: false,
    //   text: 'My timeout is set to 2000.',
    timeout: 1300
  })
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>