<template>
<div>
    <v-navigation-drawer class="d-xs-flex d-sm-none" v-model="drawer" app>
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
      <v-app-bar-nav-icon class="d-flex d-xs-flex d-sm-none" @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="red darken-1 d-none d-sm-flex" to="/register">SIGN UP</v-btn>
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

 @media screen and (min-width: 620px){
    .v-navigation-drawer {
    visibility: hidden;
  }
 }

</style>