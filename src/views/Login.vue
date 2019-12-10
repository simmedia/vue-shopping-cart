<template>
  <v-container bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-flex>
        <v-row justify="center">
          <v-col md="4">
            <h2 class="mb-10 text-center display-1">Log In</h2>
            <v-form ref="form" v-model="valid" :lazy-validation="lazy">

              <v-text-field v-model="email" label="E-mail" required></v-text-field>
              <v-text-field v-model="password" label="Password" type="password"></v-text-field>

              <v-btn color="success" class="mr-4 mt-6" @click="onSignin">Log In</v-btn>
              <v-btn router to="/signup" class="mr-4 mt-6" text>Sign Up</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    email: "",
    password: "",
    select: null,
    lazy: false
  }),
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },

  methods: {
    onSignin() {
      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password
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