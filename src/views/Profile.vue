<template>
  <v-container>
    <!-- <div style="margin-top: 300px">
      <form @submit.prevent="updateDisplayName">
        <input v-model="displayName" type="text">
        <input type="submit" value="update">
      </form>
      {{korisnik.displayName}}
    </div> -->

    <v-container class="mt-10">
      <h4>Update profile</h4>
      <v-row justify="start">
        <v-col xs="12" md="4">
          <v-form ref="form" v-model="valid" :lazy-validation="lazy">
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>


            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Validate
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">
              Reset Form
            </v-btn>

            <v-btn color="warning" @click="resetValidation">
              Reset Validation
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      displayName: null
    };
  },
  methods: {
    updateDisplayName() {
      var user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: this.displayName
      });
    }
  },
  computed: {
    korisnik() {
      var currUser = firebase.auth().currentUser;
      return currUser;
    }
  }
};
</script>

<style></style>
