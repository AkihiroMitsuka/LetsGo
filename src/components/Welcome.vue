<template>
<div id="wolcome">
    <div class="Welcome_text">
        <h1>Welcome to SUTUDIOgo!!</h1>
        <p>You can add a schedule anytime, anywhere</p>
        <p>Let's use it immediately</p>
    </div>
    <div class="Event_create_inner">
        <router-link to="/register">
            <div class="Event_create_page">
                Create a User
            </div>
        </router-link>
    </div>  
</div>
</template>
<script>
export default {
}
</script>
<style>
    #wolcome{
        padding: 20px;
        display: flex;
        flex-direction: column;
    }
    .Welcome_text{
        text-align: center;
        margin-bottom: 28px; 
    }
    .Welcome_text h1 {
        font-weight: 700;
    }
    .Event_create_page{
        padding: 12px 28px;
        font-weight: 600;
        text-decoration: none;
        text-align: center;
        color: aliceblue;
        border:3px solid black;
        background-color: black;
        border-radius: 2em;	
    }
</style>