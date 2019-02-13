<template>
<div id="wolcome">
    <section class="hero is-medium is-primary is-bold">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                Welcome to SUTUDIOgo!!
                </h1>
                <p class="subtitle">
                You can add a schedule anytime, anywhere
                Let's use it immediately
                </p>
            </div>
        </div>
    </section>
    <div class="Event_create_inner">
        <router-link to="/Signup">
            <div class="Event_Signup Event_button">ユーザー登録する</div>
        </router-link>
        <router-link to="/Signin">
            <div class="Event_Signin Event_button">サインイン</div>
        </router-link>
    </div>  
</div>
</template>
<script>
export default {
}
</script>
<style>
/* 独自Style */
    #wolcome{
        display: flex;
        flex-direction: column;
    }
    .hero{
        margin-bottom: 32px;
    }
    .Event_create_inner{
        width: 80%;
        display: block;
        margin: 0 auto;
    }
    .Event_button{
        padding: 12px 28px;
        font-weight: 600;
        text-decoration: none;
        text-align: center;
        color: #ffffff;
        background-color: #7957d5;
        border-radius: 2em;
    }
    .Event_Signup{
        margin-bottom: 30px;
    }
</style>