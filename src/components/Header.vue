<template>
<div>
    <v-navigation-drawer class=".d-flex .d-sm-none" v-model="drawer" app>
      <v-list dense>
        <v-list-item to="/login" link>
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Log In</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/register" link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="red lighten-1" dark>
      <v-app-bar-nav-icon class="d-flex d-xs-flex d-sm-none" @click="drawer = !drawer" />
      <v-toolbar-title><span class="">Vue</span>Shopping</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mr-5 d-none d-sm-flex" to="/register" outlined>SIGN UP</v-btn>
      <v-btn class="d-none d-sm-flex" to="/login" text>LOG IN</v-btn>
    </v-app-bar>
    </div>


</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: false
  })
};
</script>

<style lang="scss" scoped>

.v-list-item--active .v-icon {
  color: red;
}

</style>