import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";

import AddPost from "./components/post/AddPost.vue"
import Posts from "./components/post/Posts.vue"

import Profile from "./components/auth/Profile.vue"
import SignUp from "./components/auth/SignUp.vue"
import SignIn from "./components/auth/SignIn.vue"


Vue.use(Router);

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts
    },
    {
      path: "/post/add",
      name: "AddPost",
      component: AddPost
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/signin",
      name: "SignIn",
      component: SignIn
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp
    },
  ]
});
