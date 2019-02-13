<template>
<div id="home">
    <div class="card_header">
        <div class="serect_crad">
            <p class="cras_text">予定を追加</p>
        </div>
        <div class="serect_crad">
            <p class="cras_text">リストを表示</p>
        </div>
    </div>
    ここからいろんなページにアクセスできる。
</div>
</template>
<script>
export default {
}
</script>
<style>
/* 独自Style */
#settings{
    padding: 24px;
}
.card_header{
    display: flex;
}
.serect_crad{
    height: 100px;
    width: 40%;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 2px 2px 4px gray;
    position: relative;
}
.cras_text{
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%,-50%);
    -webkit-transform : translate(-50%,-50%);
    transform : translate(-50%,-50%);
    font-weight: 600;
    width: 100px;
    text-align: center;/*一応BOX内の文字も中央寄せ*/
}
</style>