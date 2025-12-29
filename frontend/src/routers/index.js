import { createRouter, createWebHistory } from "vue-router";
// import { useAuthStore } from "../services/store/auth";
// import { Login, Register, Home } from "../pages/page";
import Login from "@/pages/auth/login.vue";
import Register from "@/pages/auth/register.vue";
import Home from "@/pages/Home.vue";

import UserLayout from "@/layout/userLayout.vue";
const routes = [
  {
    path: "/",
    name: "root",
    component: UserLayout,
    children: [
      { path: "", name: "home", component: Home },
      {
        path: "/login",
        name: "login",
        component:  () => import("@/pages/auth/login.vue"),
      },
      {
        path: "/register",
        name: "register",
        component:  () => import("@/pages/auth/register.vue"),
      },
      {
        path: "add",
        name: "user-create",
        component: () => import("@/pages/user/newUser.vue"),
      },
      {
        path: "edit/:id",
        name: "user-edit",
        component: () =>
          import("@/pages/user/editUser.vue"),
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: () =>
          import("@/pages/dashboard.vue"),
      },
      {
        path: "user-dashboard",
        name: "user-dashboard",
        component: () =>
          import("@/pages/user/user-dashboard.vue"),
      },
      {
        path: "services",
        name: "services",
        component: () =>
          import("@/pages/user/services.vue"),
      },
      {
        path: "tickets",
        name: "tickets",
        component: () =>
          import("@/pages/user/tickets.vue"),
      },
      {
        path: "invoices",
        name: "invoices",
        component: () =>
          import("@/pages/user/invoices.vue"),
      },
      // {
      //   path:"update/:id",
      //   name:"user-update",
      //   component: () => import("@/pages/user/editUser.vue"),
      // },

      {
        path: "delete/:id",
        name: "user-delete",
        component: () =>
          import("@/pages/user/editUser.vue"),
      },
    ],
    meta: { layout: "user" },
  },

  // {
  //     path: "/",
  //     name: "root",
  //     component: UserLayout,
  //     children: [
  //         { path: "", name: "home", component: Home },
  //         {
  //             path: "shop",
  //             name: "shop",
  //             component: () => import("@/jS/pages/user/ShopeView.vue"),
  //         },
  //         {
  //             path: "product-details/:slug",
  //             name: "product-details",
  //             component: () =>
  //                 import("@/jS/pages/product/ProductDetailsView.vue"),
  //         },

  //         {
  //             path: "wishlist",
  //             name: "wishlist",
  //             component: () => import("@/jS/pages/user/WishlistView.vue"),
  //         },
  //         {
  //             path: "shoping-cart",
  //             name: "shoping-cart",
  //             component: () => import("@/jS/pages/user/ShopingCartView.vue"),
  //         },
  //         {
  //             path: "checkout",
  //             name: "checkout",
  //             component: () => import("@/jS/pages/user/Checkoutview.vue"),
  //         },
  //         {
  //             path: "order-success",
  //             name: "order-success",
  //             component: () => import("@/jS/pages/user/successOrderview.vue"),
  //         },
  //         {
  //             path: "order-cancel",
  //             name: "order-cancel",
  //             component: () => import("@/jS/pages/user/CancelOrderview.vue"),
  //         },
  //         {
  //             path: "order-history",
  //             name: "order-history",
  //             component: () => import("@/jS/pages/user/orderHistory.vue"),
  //         },
  //         {
  //             path: "about-us",
  //             name: "about-us",
  //             component: () => import("@/jS/pages/user/AboutView.vue"),
  //         },
  //         {
  //             path: "contact-us",
  //             name: "contac-us",
  //             component: () => import("@/jS/pages/user/ContactView.vue"),
  //         },
  //         {
  //             path: "profile",
  //             name: "profile",
  //             component: () => import("@/jS/pages/user/Profile.vue"),
  //         },
  //         {
  //             path: "edit-user-profile",
  //             name: "edit-user-profile",
  //             component: () => import("@/jS/pages/user/UserEditProfile.vue"),
  //         }, // Corrected path
  //     ],
  //     meta: { layout: "user" },
  // },
  // {
  //     path: "/login",
  //     name: "login",
  //     component: Login,
  // },
  // {
  //     path: "/register",
  //     name: "register",
  //     component: Register,
  // },
  // {
  //     path: "/admin",
  //     name: "admin-dashboard",
  //     component: () => import("@/jS/layout/AdminLayout.vue"),

  //     children: [
  //         {
  //             path: "",
  //             name: "admin_home",
  //             component: () => import("@/jS/admin/dashboardView.vue"),
  //         },
  //         {
  //             path: "admin-profile",
  //             name: "admin-profile",
  //             component: () => import("@/jS/admin/AdminProfileView.vue"),
  //         },
  //         {
  //             path: "product",
  //             name: "product",
  //             component: () => import("@/jS/pages/product/ProductLayout.vue"),
  //             children: [
  //                 {
  //                     path: "",
  //                     name: "product-list",
  //                     component: () =>
  //                         import("@/jS/pages/product/ProductView.vue"),
  //                 },
  //                 {
  //                     path: "add",
  //                     name: "product-create",
  //                     component: () =>
  //                         import("@/jS/pages/product/AddProductView.vue"),
  //                 },
  //                 {
  //                     path: "edit/:slug",
  //                     name: "product-edit",
  //                     component: () =>
  //                         import("@/jS/pages/product/UpdateProductView.vue"),
  //                 },
  //             ],
  //         },
  //         {
  //             path: "category",
  //             name: "category",
  //             component: () => import("@/jS/pages/category/CategoryView.vue"),
  //         },
  //         {
  //             path: "order",
  //             name: "order",
  //             component: () => import("@/jS/pages/order/OrderView.vue"),
  //         },
  //         {
  //             path: "cart",
  //             name: "cart",
  //             component: () => import("@/jS/pages/cart/CartView.vue"),
  //         },
  //         {
  //             path: "user",
  //             name: "user",
  //             component: () => import("@/jS/pages/user/UserView.vue"),
  //         },
  //         {
  //             path: "review",
  //             name: "review",
  //             component: () => import("@/jS/pages/review/ReviewView.vue"),
  //         },
  //         {
  //             path: "edit-profile/:slug",
  //             name: "edit-profile",
  //             component: () =>
  //                 import("@/jS/pages/profile/EditProfileView.vue"),
  //         },
  //     ],
  //     meta: { layout: "admin" },
  // },

  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/pages/notfound.vue"),
    meta: { layout: "user" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach(async(to, from, next) => {
//     try{

//     const authStore = useAuthStore();

//     const { status, role } = authStore;

//     if (status) {
//         if (role === "admin") {
//             // If admin tries to access the login page, redirect them to the admin dashboard
//             if (to.path === "/login") {
//                 return next("/admin");
//             }
//             // Allow admin to proceed
//             return next();
//         } else if (role === "user") {
//             // If user tries to access the login page, redirect them to the home page
//             if (to.path === "/login" || to.path.startsWith("/admin")) {
//                 return next("/");
//             }
//             // Allow user to proceed
//             return next();
//         }
//     }

//     if (!status) {
//         return to.path === "/admin" ? next("/login") : next();
//     }

//     next();

//     }catch(error){
//         console.log(error);
//     }finally{
//         // next();
//     }

// });

export default router;
