<template>
  <v-container bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-flex>
        <v-row justify="center">
          <v-col md="4">
            <h2 class="mb-10 text-center display-1">Register</h2>
            <v-form ref="form" v-model="valid" :lazy-validation="lazy" @submit.prevent="register">
              <v-text-field v-model="name" label="Name" required></v-text-field>
              <v-text-field v-model="email" label="E-mail" required></v-text-field>
              <v-text-field v-model="password" label="Password" type="password"></v-text-field>

              <v-btn color="warning" class="mr-4 mt-6" type="submit">Register</v-btn>
              <v-btn router to="/signin" class="mr-4 mt-6" text>Sign In</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from "firebase";
export default {
  data: () => ({
    valid: true,
    name: "",
    email: "",
    password: "",
    select: null,
    lazy: false
  }),
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  // beforeDestroy() {
  //   const user = firebase.auth().currentUser;
  //   user.updateProfile({
  //     displayName: this.name
  //   });
  // },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  beforeDestroy() {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: this.name
    });
  },

  methods: {
    register() {
      this.$store
        .dispatch("signUserUp", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          console.log("registered!");
        });
    }
  }
};
</script>

<style>
.col {
  padding: 30px;
}
</style>
