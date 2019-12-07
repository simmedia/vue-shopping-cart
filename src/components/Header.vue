<template>
  <div>
    <v-navigation-drawer temporary v-model="drawer" app>
      <v-list dense>
        <v-list-item
          color="indigo"
          router
          :to="item.link"
          v-for="item in menuItems"
          :key="item.title"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-if="userIsAuth"
          @click="onLogout"
          router
          style="cursor: pointer"
        >
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="red lighten-1" dark>
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer"
          >My VueShop</router-link
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
          text
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn @click="onLogout" v-if="userIsAuth" text>
          <v-icon left>mdi-logout</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },components: {},

  data: () => ({
    drawer: false
  }),
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "mdi-face", title: "Sign Up", link: "/signup" },
        { icon: "mdi-key", title: "Sign In", link: "/signin" }
      ];
      if (this.userIsAuth) {
        menuItems = [{ icon: "mdi-account", title: "Profile", link: "/profile" }
        ];
      }
      return menuItems;
    },
    userIsAuth() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/signin')
    }
  }
};
</script>

<style lang="scss" scoped>
.v-list-item--active .v-icon {
  color: red;
}
</style>
