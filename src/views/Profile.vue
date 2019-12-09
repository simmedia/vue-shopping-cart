<template>
  <v-container>
    <!-- <div style="margin-top: 300px">
      <form @submit.prevent="updateDisplayName">
        <input v-model="displayName" type="text">
        <input type="submit" value="update">
      </form>
      {{korisnik.displayName}}
    </div> -->

    <v-container class="mt-12 pt-12">
      <v-card>
        <v-card-text>Update Pofile</v-card-text>
        <v-row justify="start">
          <v-col xs="12" md="4">
            <v-form ref="form">
              <v-text-field
                v-model="displayName"
                :counter="10"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="newEmail"
                label="E-mail"
                required
              ></v-text-field>

              <v-btn
                :disabled="!displayName && !newEmail"
                color="indigo"
                class="white--text mr-4 mt-5"
                @click="updateProfle"
              >
                Update
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <v-btn dark color="orange darken-2" @click="setInfoText">
      Open Snackbar
    </v-btn>
    <app-info-text :infoText="text" />
    <!-- {{ user }} -->
  </v-container>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      displayName: null,
      newEmail: null,
      text: null
    };
  },
  methods: {
    setInfoText() {
      this.text = 'Successfuly updated!'
      
    },
    updateProfle() {
      if (this.displayName) this.updateDisplayName();
      if (this.newEmail) {
        this.updateEmail();
      }
    },
    updateDisplayName() {
      this.user.updateProfile({
        displayName: this.displayName
      });
      this.snackbar = true;
    },
    updateEmail() {
      this.user.updateEmail(this.newEmail);
    }
  },
  computed: {
    user() {
      return firebase.auth().currentUser;
    }
  }
};
</script>

<style></style>
