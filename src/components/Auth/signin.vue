<template>
<div id="singin">
    <h1 class="pagetitle">Sing In</h1>
    <hr>
    <div class="field">
      <b-field label="E-mail">
        <b-input placeholder="Email" type="email" icon="email" v-model="email" required></b-input>
      </b-field>
    </div>
    <div class="field">
      <b-field label="Password">
        <b-input type="password" icon="password" placeholder="Password reveal input" password-reveal v-model="password" required></b-input>
      </b-field>
    </div>
    <div class="from_buttom">
        <div clas="checkbox">
          <b-checkbox>Remember me</b-checkbox><span>＜−実装遅れ</span>
        </div>
        <button class="button block" @click="signIn">Sing In</button>
        <div class="links">
          <p>Don't you remember the password?</p>
          <router-link to="/passwordreset">Passwordreset</router-link>
          <p>You don't have an account? </p>
          <router-link to="/Signup">create account now!!</router-link>
        </div>
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
          this.$router.push('home')
          this.$mail.user('')
        },
        err => {
          alert('Oops. ' + err.message)
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
.pagetitle{
  font-size: 28px;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 700;
}
.social_login{
  margin: 0 auto;
}
.field{
  margin-bottom: 30px;
}
.checkbox{
  margin-bottom: 16px;
  font-size:14px;
  font-weight: 600;
}
.from_buttom{
  display: flex;
  flex-direction : column
}
</style>