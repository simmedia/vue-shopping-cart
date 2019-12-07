import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    signUserUp({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          if (user) {
            console.log('registered');
          }
          const newUser = {
            id: user.uid
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          console.log(error);
        });
    },
    signUserIn({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          console.log('logged in');

          const newUser = {
            id: user.uid
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          console.log(error);
        });
    },
    autoSignIn({ commit }, payload) {
      commit("setUser", {
        id: payload.uid
      });
    },

    logout({
      commit
    }) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  modules: {}
});
