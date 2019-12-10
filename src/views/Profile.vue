<template>
  <v-container>
    <!-- <div style="margin-top: 300px">
      <form @submit.prevent="updateDisplayName">
        <input v-model="displayName" type="text">
        <input type="submit" value="update">
      </form>
      {{korisnik.displayName}}
    </div>-->

    <v-container class="mt-12 pt-12">
      <v-card>
        <v-card-text>Update Pofile</v-card-text>
        <v-row justify="start">
          <v-col xs="12" md="4">
            <v-form ref="form">
              <v-text-field v-model="displayName" :counter="20" label="Update Name" required></v-text-field>

              <v-text-field v-model="newEmail" label="New E-mail" required></v-text-field>

              <v-btn
                :disabled="!displayName && !newEmail"
                color="indigo"
                class="white--text mr-4 mt-5"
                @click="updateProfle"
              >Update</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      displayName: null,
      newEmail: null
    };
  },
  methods: {
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
