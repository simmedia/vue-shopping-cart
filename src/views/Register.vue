<template>
  <v-container bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-flex>
        <v-row justify="center">
          <v-col md="4">
            <h2 class="mb-10 text-center display-1">Register</h2>
            <v-form ref="form" v-model="valid" :lazy-validation="lazy" @submit.prevent="register">

              <v-text-field v-model="email" label="E-mail" required></v-text-field>
              <v-text-field v-model="password" label="Password" type="password"></v-text-field>

              <v-btn color="warning" class="mr-4 mt-6" type="submit">Register</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase'
export default {
  data: () => ({
    valid: true,
    email: "",
    password: "",
    select: null,
    lazy: false
  }),

  methods: {
    register() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        console.log('success'),
        this.$router.push('/')
        
      ).catch(err => {
        console.log(err);
        
      })
      
    }
  }
};
</script>

<style>

.col {
  padding: 30px;
}

</style>