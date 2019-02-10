<template>
<div id="singin">
    <b-field label="E-mail">
        <b-input placeholder="Email" type="email" icon="email" v-model="email" required></b-input>
    </b-field>
    <b-field label="Password">
        <b-input type="password" icon="password" placeholder="Password reveal input" password-reveal v-model="password" required></b-input>
    </b-field>
    <b-checkbox>Remember me</b-checkbox><br>
    <button class="button block" @click="signIn">Singin</button>
    <p>You don't have an account? 
    <router-link to="/register">create account now!!</router-link>
    </p>
    <div class="links">
      <router-link to="/passwordreset">Passwordreset</router-link>
    </div>
</div>
</template>
<script>
import firebase from 'firebase'
export default {
  name: 'singin',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        user => {
          this.$router.push('/settings')
        },
        err => {
          alert(err.message)
        }
      )
    }
  }
}
</script>
<style>
#singin{
  padding: 24px;
}
</style>