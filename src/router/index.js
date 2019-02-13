/* eslint-disable quotes */
import Vue from 'vue'
import Router from 'vue-router'
// import Form from '@/components/Form'
import Welcome from "@/components/Welcome"
import Guide from "@/components/Guide"
import Signup from "@/components/Auth/Signup"
import Signin from "@/components/Auth/Signin"
import passwordreset from "@/components/Auth/Passreset"
import home from "@/components/Necessary/home"
import Scheduling from "@/components/Necessary/Scheduling"
import settings from "@/components/Necessary/Settings"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome
    },
    {
      path: "/Guide",
      name: "Guide",
      component: Guide
    },
    {
      path: "/Signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/Signin",
      name: "Signin",
      component: Signin
    },
    {
      path: "/passwordreset",
      name: "passwordreset",
      component: passwordreset
    },
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/Scheduling",
      name: "Scheduling",
      component: Scheduling
    },
    {
      path: "/settings",
      name: "settings",
      component: settings
    }
  ]
})
