import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import News from "../views/News.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import Profile from "../views/Profile.vue";
import Admin from "../views/Admin.vue";
import AddNews from "../views/AddNews.vue";
import NewsPreview from "../views/NewsPreview.vue";
import ViewNews from "../views/ViewNews.vue";
import EditNews from "../views/EditNews.vue";
import Message from "../views/Message.vue";
import AddFood from "../views/food/AddFood.vue";
import Foods from "../views/food/Foods.vue";
import EditFood from "../views/food/EditFood.vue";
import AddDrink from "../views/drink/AddDrink.vue";
import Drinks from "../views/drink/Drinks.vue";
import EditDrink from "../views/drink/EditDrink.vue";
import About from "../components/About.vue"



import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/news",
    name: "News",
    component: News,
    meta: {
      title: "News",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "About ",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
      requiresAuth: false,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register",
      requiresAuth: false,
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: "Forgot Password",
      requiresAuth: false,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      title: "Profile",
      requiresAuth: true,
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      title: "Admin",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: "/add-news",
    name: "AddNews",
    component: AddNews,
    meta: {
      title: "Add News",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: "/news-preview",
    name: "NewsPreview",
    component: NewsPreview,
    meta: {
      title: "Preview News ",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: "/view-news/:newsid",
    name: "ViewNews",
    component: ViewNews,
    meta: {
      title: "View News",
      requiresAuth: false,
    },
  },
  {
    path: "/edit-news/:newsid",
    name: "EditNews",
    component: EditNews,
    meta: {
      title: "Edit News ",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: "/msg",
    name: "Message",
    component: Message,
    meta: {
      title: "Message",
      requiresAuth: true,
    },
  },
  {
    path: "/add-food",
    name: "AddFood",
    component: AddFood,
    meta: {
      title: "Add Food",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: "/foods",
    name: "Foods",
    component: Foods,
    meta: {
      title: "Foods",
    },
  },
  {
    path: "/edit-food/:foodid",
    name: "EditFood",
    component: EditFood,
    meta: {
      title: "Edit Food ",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: "/add-drink",
    name: "AddDrink",
    component: AddDrink,
    meta: {
      title: "Add Drink",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: "/drinks",
    name: "Drinks",
    component: Drinks,
    meta: {
      title: "Drinks",
    },
  },
  {
    path: "/edit-drink/:drinkid",
    name: "EditDrink",
    component: EditDrink,
    meta: {
      title: "Edit Drink ",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

//To associate a title for current tab opened ex. Home | RMS
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | RMS`;
  next();
});

//route acces control
router.beforeEach(async (to, from, next) => {
  let user = firebase.auth().currentUser;
  let admin = null;
  if (user) {
    let token = await user.getIdTokenResult();
    admin = token.claims.admin;
  }
  if (to.matched.some((res) => res.meta.requiresAuth)) {
    if (user) {
      if (to.matched.some((res) => res.meta.requiresAdmin)) {
        if (admin) {
          return next();
        }
        return next({ name: "Home" });
      }
      return next();
    }
    return next({ name: "Home" });
  }
  return next();
});

export default router;

//or
// router.beforeEach(async (to, from, next) => {
//   const requiresAuth = to.matched.some(
//   (record) => record.meta.isAdmin || record.meta.isAuthenticated
//   );
//   const user = await getAuth().currentUser;
  
//   if (requiresAuth && !user) {
//   const tokenResult = await getAuth().currentUser.getIdTokenResult();
//   const isUserAdmin = tokenResult.claims.admin;
  
//   const isAdminRoute = to.matched.some(
//   (record) => record.meta.isAdmin
//   );
  
//   if (isUserAdmin && !isAdminRoute) {
//   // redirect admin who tries to access user route
//   next("/admin/list");
//   } else if (!isUserAdmin && isAdminRoute) {
//   // redirect user who attempts to access admin route
//   next("/about")
//   } else {
//   next();
//   };
  
//   next("/");
//   } else {
//   next();
//   }
//   });
