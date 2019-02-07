<template>
  <div>
    <!-- 共通処理 -->
    <header>

      <div class="navgation_left">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
      </div>
      
      <div class="title">
        <p>STUDIOgo!!</p>
      </div>

      <div class="User_settings">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      </div>
    
    </header>
    <main>
      <!-- 継承処理 -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
</script>

<style>
body {
  margin: 0;
}



#app {
  font-family: 'Noto Sans JP', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main {
  text-align: center;
  margin-top: 30px;
}
header {
  margin: 0;
  height: 60px;
  /* background: rgb(239,157,67);
  background: linear-gradient(90deg, rgba(239,157,67,1) 0%, rgba(244,144,101,1) 100%); */
}

svg {
  color:black;
}
.navgation_left{
  position: absolute;
  top:18px;
  left: 24px;
}
.title{
  margin-top: 18px;
  color:black;
  font-size:20px;
  font-weight:700;
  text-align: center;
}
.title p {
  display: inline-block;
}

.User_settings{

  position: absolute;
  top:18px;
  right: 24px;
}
</style>
