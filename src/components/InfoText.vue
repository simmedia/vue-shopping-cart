<template>
  <v-alert class="error" error dismissible v-if="infoText" :timeout="timeout" :value="true">
      {{ infoText }}
  </v-alert>
</template>

<script>
export default {
  props: ["infoText"],
  data: () => ({
    timeout: 2000
  }),
  methods: {
    toggler() {
      this.$emit("toggleSnackbar");
    }
  }
};
</script>

<style></style>
