<template>
  <v-container>
    <div style="margin-top: 300px">
      <h1>{{ korisnik }}</h1>
      <h3>adasd</h3>
    </div>
  </v-container>
</template>

<script>
import firebase from 'firebase'
export default {
  computed: {
    korisnik() {
      var user = firebase.auth().currentUser;
      return user
    }
  }
};
</script>

<style></style>
