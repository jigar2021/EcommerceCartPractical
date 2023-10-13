import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CartPage from '../views/CartPage.vue'
import ProductSection from '../views/ProductSection.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import store from '../store/index'

const authGuard = (to, from, next) => {
  if (store.getters['user/isAuthenticated']) {
    next()
  } else {
    next('/login')
  }
}

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   redirect :'/home',
  // },
  {
    path: '/home',
    name: 'Home',
    component:Home,
  },
  {
    path: '/details/:id',
    name: 'details',
    component: ProductSection,
    beforeEach: authGuard

  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage,
    beforeEach: authGuard

  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/:pathMatch(.*)*',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
  routes
})



export default router
