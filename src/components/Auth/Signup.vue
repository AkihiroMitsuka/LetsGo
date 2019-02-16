<template>
<div id="singup">
    <h1 class="pagetitle">Sing Up</h1>
    <hr>
    <div class="field">
      <b-field label="E-mail">
          <b-input class="emailfield" placeholder="Your Email address" type="email" icon="email" v-model="email" required></b-input>
      </b-field>
    </div>
    <div class="field">
      <b-field label="Password">
          <b-input class="passwordfield" type="password" icon="password" placeholder="Your Password" password-reveal v-model="password" required></b-input>
      </b-field>
    </div>

    <div class="bottom_nav">
      <button class="button block Signin_button" @click="Signup">Sign Up</button>
      <p>Do you have an account? </p>
      <router-link to="/Signin">singin now!!</router-link>
    </div>
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
    Signup: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.push('/home')
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }
}
</script>
<style>
/* 独自Style */
#singup{
  padding: 24px
}
.pagetitle{
  font-size: 28px;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 700;
}
.field{
  margin-bottom: 30px;
}
.bottom_nav{
  display: flex;
  flex-direction : column
}
.Signin_button{
  margin-top: 14px;
}
</style>