import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCTMv_OwA4Cky7MQ-dF2PaM2oXyzPoqmBA',
  authDomain: 'platzi-rooms-f4509.firebaseapp.com',
  databaseURL: 'https://platzi-rooms-f4509-default-rtdb.firebaseio.com',
  projectId: 'platzi-rooms-f4509',
  storageBucket: 'platzi-rooms-f4509.appspot.com',
  messagingSenderId: '298502309859',
  appId: '1:298502309859:web:fdadf0ae37c9624ff682d6',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// observa los cambios en el estado de la autenticacon en firebase
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('FETCH_AUTH_USER');
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    if (store.state.authId) {
      this.$store.dispatch('FETCH_USER', { id: store.state.authId });
    }
  },
}).$mount('#app');
