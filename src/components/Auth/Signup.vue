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

    <div class="field">
      <small>
        <b-checkbox><span @click="confirmCustom" style="color:#7957d5;margin-bottom:10px;">利用規約</span>に同意する</b-checkbox>
      </small>
    </div>

    <div class="bottom_nav">
      <button class="button block Signin_button" @click="Signin">Sign Up</button>
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
    Signin: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.push('/home')
        })
        .catch(error => {
          alert(error.message)
        })
    },
    confirmCustom () {
      this.$dialog.confirm({
        title: '利用規約',
        message:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce id fermentum quam. Proin sagittis,
            nibh id hendrerit imperdiet, elit sapien laoreet elit,
            ac scelerisque diam velit in nisl. Nunc maximus ex non
            laoreet semper. Nunc scelerisque, libero sit amet pretium dignissim,
            augue purus placerat justo,
            sit amet porttitor dui metus in nisl.
            Nulla non leo placerat, porta metus eu, laoreet risus.
            Etiam lacinia, purus eu luctus maximus, elit ex viverra tellus,
            sit amet sodales quam dui nec odio.
            Nullam porta mollis est. Quisque aliquet malesuada fringilla.
            Pellentesque volutpat lacus at ante posuere,
            non pulvinar ante porta. Proin viverra eu massa nec porta.
            Aliquam rhoncus velit quis sem hendrerit,
            ut dictum nisl accumsan. Maecenas erat enim, scelerisque non ligula ac,
            eleifend venenatis ligula.
            Praesent molestie mauris sed elit posuere, non malesuada libero gravida.
            In hac habitasse platea dictumst.
            Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas.`,
        confirmText: 'ok',
        type: 'is-white',
        onConfirm: () => this.$toast.open('User agreed')
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