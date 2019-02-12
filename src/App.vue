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

          <router-link to="/">
          <b-dropdown-item>Welcome</b-dropdown-item></router-link>
        
          <router-link to="/Scheduling">
          <b-dropdown-item>Scheduling</b-dropdown-item></router-link>

          <router-link to="/Signup">
          <b-dropdown-item>Signup</b-dropdown-item></router-link>

          <router-link to="/Signin">
          <b-dropdown-item>Signin</b-dropdown-item></router-link>
          
          <router-link to="/Guide">
          <b-dropdown-item>Guide</b-dropdown-item></router-link>

          <router-link to="/Guide">
          <b-dropdown-item>
            <b-icon icon="bell"></b-icon>
              通知
            </b-dropdown-item>
          </router-link>

          <router-link to="/settings">
            <b-dropdown-item value="settings">
              <b-icon icon="settings"></b-icon>
              設定
            </b-dropdown-item>
          </router-link>

          <b-dropdown-item value="logout">
              <b-icon icon="logout"></b-icon>
              ログアウト
          </b-dropdown-item>

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
/* 独自Style */
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
.navgation_left{
  
}
/* 共通Style */
hr{
  margin: 6px 0 38px 0;
}
</style>