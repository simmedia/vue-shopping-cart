<template>
  <v-app id="inspire">
    <Header />

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <v-footer color="red lighten-1" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>