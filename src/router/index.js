/* eslint-disable quotes */
import Vue from 'vue'
import Router from 'vue-router'
// import Form from '@/components/Form'
import Scheduling from "@/components/Scheduling"
import Welcome from "@/components/Welcome"
import register from "@/components/Auth/register"
import signin from "@/components/Auth/signin"
import passwordreset from "@/components/Auth/passwordreset"
import settings from "@/components/settings"

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", name: "Welcome", component: Welcome },
    { path: "/Scheduling", name: "Scheduling", component: Scheduling },
    { path: "/settings", name: "settings", component: settings },
    { path: "/register", name: "register", component: register },
    { path: "/passwordreset", name: "passwordreset", component: passwordreset },
    { path: "/signin", name: "signin", component: signin }
  ]
})
