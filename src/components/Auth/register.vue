<template>
<div id="register">
    <b-field label="E-mail">
        <b-input placeholder="Email" type="email" icon="email" v-model="email" required></b-input>
    </b-field>
    <b-field label="Password">
        <b-input type="password" icon="password" placeholder="Password reveal input" password-reveal v-model="password" required></b-input>
    </b-field>
    <button class="button block" @click="Register">CreateUser</button>
    <p>Do you have an account? </p>
    <router-link to="/signin">singin now!!</router-link>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'email',
  data () {
    return {
      email: '',
      password: '',
      isLoading: false,
      isFullPage: true
    }
  },
  methods: {
    Register: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.push('/settings')
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }
}
</script>
<style>
#register{
  padding: 24px
}
</style>