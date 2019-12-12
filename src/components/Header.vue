<template>
  <div>
    <v-navigation-drawer v-if="userIsAuth" temporary v-model="drawer" app>
      <v-list-item v-if="userIsAuth">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ user.displayName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

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
        <v-list-item v-if="userIsAuth" to="/profile" router style="cursor: pointer">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item style="cursor: pointer">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-if="userIsAuth" v-slot:append>
        <div class="pa-2">
          <v-btn @click="onLogout" block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar v-if="userIsAuth" app color="red lighten-1" dark>
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">My VueShop</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-for="item in menuItems" :key="item.title" router :to="item.link" text>
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>

        <v-menu offset-y v-if="userIsAuth" :open-on-hover="openOnHover">
          <template v-slot:activator="{ on }">
            <v-btn class="red lighten-2" text dark v-on="on">
              {{ userActive.userName }}
              <v-icon right>mdi-arrow-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item class="pr-5" router to="/profile" style="cursor: pointer">
              <v-list-item-action>
                <v-icon>mdi-account</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Profile</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="pr-5" @click="onLogout" style="cursor: pointer">
              <v-list-item-action>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- <v-btn @click="onLogout" v-if="userIsAuth" text>
          <v-icon left>mdi-logout</v-icon>
          Logout
        </v-btn>-->
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  props: {
    source: String
  },
  components: {},

  data: () => ({
    drawer: false,
    openOnHover: true,
    user: null
  }),
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      }
    });
  },
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "mdi-face", title: "Sign Up", link: "/signup" },
        { icon: "mdi-key", title: "Sign In", link: "/signin" }
      ];
      if (this.userIsAuth) {
        menuItems = [
          // { icon: "mdi-account", title: "Profile", link: "/profile" }
        ];
      }
      return menuItems;
    },
    userIsAuth() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    userActive() {
      return this.$store.getters.user
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      // this.$store.commit('setUser', null)
      this.$router.push("/signin");
    }
  }
};
</script>

<style lang="scss" scoped>
.v-list-item--active .v-icon {
  color: red;
}
</style>
