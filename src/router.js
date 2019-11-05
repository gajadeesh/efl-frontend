import Vue from "vue";
import Router from "vue-router";

const Home = () => import("@/views/Home.vue");
const Login = () => import("@/views/Login");
const Logout = () => import("@/components/LogoutComp");
const Dashboard = () => import("@/views/Dashboard");
const ForgotPass = () => import("@/views/forgotPassword");
const resetPassword = () => import("@/views/resetPassword");
const ResetRedirect = () => import("@/components/ResetRedirect");
const Shipments = () => import("@/views/Shipments");
const SignalShipments = () => import("@/views/SignalShipments");
const ShipmentDetailView = () => import("@/views/SingleShipmentDetailView");
const CreateBooking = () => import("@/views/CreateBooking");
const Booking = () => import("@/views/Booking");
const Usermanagement = () => import("@/views/UserManagement");
const UsermanagementEdit = () => import("@/views/UserManagementEdit");
const UsermanagementView = () => import("@/views/UserManagementView");
const Quotation = () => import("@/views/Quotes");
const Billing = () => import("@/views/Billing");
const PurchaseOrder = () => import("@/views/PurchaseOrder");
const Setting = () => import("@/views/Setting");
const AccessLevel = () => import("@/views/AccessLevel");
const CreateAccessLevel = () => import("@/views/CreateAccessLevel");
const EditAccessLevel = () => import("@/views/EditAccessLevel");
const Client = () => import("@/views/client");
const Ports = () => import("@/views/ports");
const EflAdminManagement = () => import("@/views/EflAdminManagement");
const NotFound = () => import("@/views/not-found");
const CreateClient = () => import("@/views/CreateClient");

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      name: "home",
      component: Home,
      meta: {
        is_admin: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
      // meta: {
      //   grequiresGuest: true
      // }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: {
        is_admin: true,
        requiresAuth: true
      }
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: ForgotPass,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/password/reset/:token",
      component: ResetRedirect,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/password-reset",
      name: "passwordReset",
      component: resetPassword,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/shipments",
      name: "shipments",
      component: Shipments,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/shipment/:eid",
      name: "shipmentid",
      component: SignalShipments
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/shipmentdetailview/:eid",
      name: "shipmentdetailview",
      component: ShipmentDetailView
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/create-booking",
      name: "createbooking",
      component: CreateBooking
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/user-management",
      name: "usermanagement",
      component: Usermanagement
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/usermanagementedit/:uedit",
      name: "usermanagementedit",
      component: UsermanagementEdit
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/usermanagementview/:uedit",
      name: "usermanagementview",
      component: UsermanagementView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/booking",
      name: "booking",
      component: Booking,
      meta: {
        // requiresAuth: true,
        is_admin: true
      }
    },
    {
      path: "/quotation",
      name: "quotation",
      component: Quotation
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/ports",
      name: "ports",
      component: Ports
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/billing",
      name: "billing",
      component: Billing
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/purchase-order",
      name: "PurchaseOrder",
      component: PurchaseOrder
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/setting",
      name: "setting",
      component: Setting
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/message",
      name: "message",
      component: resetPassword
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/notifications",
      name: "notifications",
      component: resetPassword
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/schedule",
      name: "schedule",
      component: resetPassword
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/access-level",
      name: "accesslevel",
      component: AccessLevel,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/create-access-level",
      name: "createaccesslevel",
      component: CreateAccessLevel,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/edit-access-level/:id",
      name: "editaccesslevel",
      component: EditAccessLevel,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/client",
      name: "client",
      component: Client,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/create-client",
      name: "createclient",
      component: CreateClient,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/efl-admin-management",
      name: "efladminmanagement",
      component: EflAdminManagement,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "*",
      name: "not-found",
      component: NotFound
    }
  ]
});

// const openRoutes = ["passwordReset", "forgot-password", "login"];

// router.beforeEach((to, from, next) => {
//   if (openRoutes.includes(to.name)) {
//     next();
//   } else if (window.token) {
//     next();
//   } else {
//     next("/login");
//   }
// });

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // console.log(record);
    // check if NOT loggedin
    if (localStorage.getItem("token") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath }
      });
    } else {
      // let tokens = localStorage.getItem("token");
      // let payload = $jwt.decode(tokens);

      // console.log(tokens);
      // if (to.matched.some(record => record.meta.is_admin)) {
      //   //   if (payload.role.roleCode == "SUPER_ADMIN") {
      //   //     next({
      //   //       path: "/login",
      //   //       params: { nextUrl: to.fullPath }
      //   //     });
      //   //   } else {
      //   //     next();
      //   //   }
      // } else {
      next();
      // }
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (localStorage.getItem("token")) {
      next({
        path: "/dashboard",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
