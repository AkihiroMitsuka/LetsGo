<template>
  <div id="event">
    <router-link to="/">Welcome-page</router-link>
    <div class="field">
        <b-switch>通知</b-switch>
    </div>
    <b-field label="">
        <b-datepicker
            placeholder="何日にする?" icon="calendar-today"
            :monday-first="manday"
            :min-date="minDate"
            :unselectable-days-of-week="[1]"
            :first-day-of-week="[1]"
            :mobile-native="true"
            >
        </b-datepicker>
    </b-field>
    <!-- 表示は曜日によって分けられるようにによう -->
    <b-select placeholder="時間を指定する">
        <option disabled>月水木金</option>
        <option>12:00</option>
        <option>13:00</option>
        <option>14:00</option>
        <option>15:00</option>
        <option>16:00</option>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option disabled>土日</option>
        <option>10:00</option>
        <option>11:00</option>
        <option>12:00</option>
        <option>13:00</option>
        <option>14:00</option>
        <option>15:00</option>
        <option>16:00</option>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
    </b-select>
    <button class="button">決定</button>


    <div class="add_item">

    </div>
</div>
</template>

<script>
export default {
  data () {
    const today = new Date()
    return {
      date: new Date(),
      minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5),
      maxDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5),
      isActive: false
    }
  }
}
</script>

<style>

</style>
