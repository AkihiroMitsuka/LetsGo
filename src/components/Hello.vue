<template>
  <div id="event">
  
    <form action="">
      
      <b-field label="STDIOに行く日程を決める">
          <b-datepicker
                placeholder="Click to select..."
                icon="calendar-today">
          </b-datepicker>
      </b-field>
      <button class="button">確定する</button>
    </form>
</div>
</template>
<script>
export default {
  name: 'event',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<style>

</style>
