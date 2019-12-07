import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    loginUser({
      commit
    }, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              email: user.email
            }
            commit('setUser', newUser)

          }
        )
        .catch(error => {
          console.log(error);

        })
    },
    signUserIn({
      commit
    }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
            }
            commit('setUser', newUser)
          }
        )
        .catch(error => {
          console.log(error);

        })
    },
    autoSignIn({
      commit
    }, payload) {
      commit('setUser', {
        id: payload.uid,
      })
    }
  },
  getters: {
    user(state) {
      return state.user
    },
  },
  modules: {}
})