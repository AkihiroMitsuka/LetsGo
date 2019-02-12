/* eslint-disable quotes */
import Vue from 'vue'
import Router from 'vue-router'
// import Form from '@/components/Form'
import Scheduling from "@/components/Scheduling"
import Welcome from "@/components/Welcome"
import Signup from "@/components/Auth/Signup"
import Signin from "@/components/Auth/Signin"
import passwordreset from "@/components/Auth/passwordreset"
import settings from "@/components/settings"
import Guide from "@/components/Guide"

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", name: "Welcome", component: Welcome },
    { path: "/Signup", name: "Signup", component: Signup },
    { path: "/Signin", name: "Signin", component: Signin },
    { path: "/Scheduling", name: "Scheduling", component: Scheduling },
    { path: "/settings", name: "settings", component: settings },
    { path: "/passwordreset", name: "passwordreset", component: passwordreset },
    { path: "/Guide", name: "Guide", component: Guide }
  ]
})
