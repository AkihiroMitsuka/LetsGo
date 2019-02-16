<template>
  <div id="event">
    <h1 class="pagetitle">Scheduling</h1>
    <hr>
      <div class="Datepicer">
        <b-field v-model="newEventsData" label="Serected Data">
          <b-datepicker v-model="newEventItem_Data"
              placeholder="Add Data" icon="calendar-today"
              :monday-first="manday"
              :min-date="minDate"
              :unselectable-days-of-week="[1]"
              :first-day-of-week="[1]"
              :mobile-native="false"
              >
          </b-datepicker>
        </b-field>
      </div>

  <div class="Timeselecter">
    <b-field v-model="newEventsData" label="Selected Time">
      <b-select placeholder="Add time" icon="clock" v-model="newEventItem_Time">
        <option disabled>火水木金</option>
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
    </b-field>
  </div>
      <!-- 表示は曜日によって分けられるようにによう -->
    <div class="scfrom_buttom">
      <button class="button block" @click="cresteEventItem">Create</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'EventItem',
  created: function () {
    this.database = firebase.database()
    this.EventItemRef = this.database.ref('EventItems')
    var _this = this
    this.EventItemRef.on('value', function (snapshot) {
      _this.EventItems = snapshot.val()
    })
  },
  data () {
    return {
      database: null,
      EventItemRef: null,
      newEventItem_Data: '',
      newEventItem_Time: '',
      EventItems: []
    }
  },
  methods: {
    createEventItem: function (newEventItem)
  }
}
</script>

<style>
/* 独自Style */
#event{
    padding: 24px;
}
.pagetitle{
    font-size: 28px;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
}
.Datepicer{
    margin-bottom:20px; 
}

.Timeselecter{
    margin-bottom: 24px;
}
.noti{
    margin-bottom: 20px;
    font-size:14px;
    font-weight: 600;
}
.field{
    margin-bottom: 30px;
}
.scfrom_buttom{
    display: flex;
    flex-direction : column
}
.Notification{
    margin-bottom: 36px;
    font-size:14px;
    font-weight: 600;
}
</style>
