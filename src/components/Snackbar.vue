<template>
  <div class="text-center">
    <v-btn dark color="orange darken-2" @click="snackbar = true">Open Snackbar</v-btn>

    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{infoText}}    
      <v-btn color="blue" text @click="closeSnackbar">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      props: ['infoText'],
      snackbar: false,
    //   text: 'My timeout is set to 2000.',
      timeout: 1300,
    }),
    methods: {
      closeSnackbar() {
        this.snackbar = false
        this.infoText = null
      }
    }
  }
</script>

<style>
</style>