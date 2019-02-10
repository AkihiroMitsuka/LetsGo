<template>
<div id="event">

    <div class="top-text">
        <p>Decide the day to go to STUDIO</p>
    </div>

    <div class="Datepicer">
    <p>School visit date</p>
        <b-field v-model="newEventsData">
            <b-datepicker
                placeholder="Add Data" icon="calendar-today"
                :monday-first="manday"
                :min-date="minDate"
                :unselectable-days-of-week="[1]"
                :first-day-of-week="[1]"
                :mobile-native="true"
                >
        </b-datepicker></b-field>
    </div>

    <div class="Timeselecter">
    <p>Campus time</p>
    <b-select placeholder="Add time" v-model="newEventTime">
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
        <option>19:00</option></b-select>
    </div>
    <!-- 表示は曜日によって分けられるようにによう -->
    <div class="noti">
        <b-switch v-model="newEventNotication">Notification settings</b-switch>
    </div>
    <div class="Button_Outside">
        <router-link to="/" tag="button">Create</router-link>
    </div>
</div>
</template>

<script>
</script>

<style>
#event{
    width: 100%;
    padding: 20px;
}
.top-text{
    margin-bottom: 32px;
    font-weight: 600;
    text-align: center
}
.Datepicer{
    margin-bottom:20px; 
}
.Datepicer p {
    font-size:14px;
    font-weight: 600;
}
.Timeselecter{
    margin-bottom: 24px;
}
.Timeselecter p {
    font-size:14px;
    font-weight: 600;
}
.noti{
    margin-bottom: 20px;
}
.noti {
    font-size:14px;
    font-weight: 600;
}
</style>
