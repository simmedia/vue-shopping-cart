<template>
  <v-container>
    <div style="margin-top: 60px">{{user}}</div>
    <v-carousel style="margin-top: 5%">
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
import firebase from "firebase";
import db from "./firebaseInit";

export default {
  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"]
    };
  },
  computed: {
    user() {
      return firebase.auth().currentUser;
    },
    currentUser() {
      return this.$store.getters.user;
    }
  },
  created() {
    // db.collection('employees').get().then(
    //   querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       console.log(doc.data());
    //     })
    //   }
    // )
  }
};
</script>
