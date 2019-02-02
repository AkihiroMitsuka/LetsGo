<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>オンラインでいつでもどこでも次回来校日を指定できます。</p>
    <a href="">ガイドを見に行く</a>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '次にデジハリに来る日程を決めましょう！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration:none;
}
</style>
