import Vue from "vue";

import Router from "vue-router";
import firebase from 'firebase'

import Navba from "./components/Navba.vue";
import Index from "./components/Index.vue";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ShoppingCart from "./components/cart/ShoppingCart";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes:[
    {
      path:"/",
      name: "trangChu",
      component:Index
    },
    {
      path:"/Navba",
      name: "navba",
      component:Navba
    },
    {
      path:"/signup",
      name: 'Signup',
      component:Signup
    },
    {
      path:"/login",
      name: 'Login',
      component:Login,
      // meta: {
        //   requiresAuth: true
        // }
      },
      {
        path:"/shoppingCart",
        name: 'ShoppingCart',
        component:ShoppingCart
      },
  ]
})

// đoạn beforeEach ở dưới để bảo vệ nếu chưa login thì ko hiện ra trang chủ GMap 
router.beforeEach((to, from, next) => {
  //check to see if route requires auth
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    //check auth state of user
    let user = firebase.auth().currentUser
    if(user){
      //user signed in, proceed to route
      next()
    }else{
      //no user signed in, redirect to login
      next({name:'Login'})
    }
  }else{
    next()
  }
})
export default router;