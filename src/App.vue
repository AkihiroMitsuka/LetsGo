<template>
  <div class="header_nav">
    <!-- 共通処理 -->
    <header>
      <div class="navgation_left">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
      </div>    
      <div class="title">
        <router-link to="/">
          <p>STUDIOgo!!</p>
        </router-link>
      </div>
      <section>
        <b-dropdown>
          <p slot="trigger">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </p>
          <b-dropdown-item>
            <small>ページ各種(そのうちUserOptionNav)</small>
          </b-dropdown-item>
          <hr class="dropdown-divider">
          <b-dropdown-item><router-link to="/">Welcome</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/Scheduling">Scheduling</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/settings">Settings</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/signin">signin</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/register">Register</router-link></b-dropdown-item>
          <b-dropdown-item>Logout</b-dropdown-item>
        </b-dropdown>
      </section>
    </header>
    <main>
      <!-- 継承処理 -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default{
}
</script>

<style>
header{
  height: 60px;
  width: 100%;
  display: flex;
  justify-content:space-between;
  padding: 20px;
}
.title{
  font-size:20px;
  font-weight: 700;
}
</style>