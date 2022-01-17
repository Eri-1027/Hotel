import Vue from "vue";
import VueRouter from "vue-router";

import TheHomePages from "../components/website/TheHomePages.vue";
import TheNews from "../components/website/TheNews.vue";
import _SingleRoom from "../components/website/_SingleRoom.vue";
import _DoubleRoom from "../components/website/_DoubleRoom.vue";
import _TripleRoom from "../components/website/_TripleRoom.vue";
import _QuadrupleRoom from "../components/website/_QuadrupleRoom.vue";

import EditPages from "../components/Backstage/EditPages.vue";
import EditHome from "../components/Backstage/EditHome.vue";
import EditNews from "../components/Backstage/EditNews.vue";
import EditSingle from "../components/Backstage/EditSingle.vue";
import EditDouble from "../components/Backstage/EditDouble.vue";
import EditTriple from "../components/Backstage/EditTriple.vue";
import EditQuadruple from "../components/Backstage/EditQuadruple.vue";

import errorPage from "@/views/404.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TheHomePages",
    component: TheHomePages,
  },
  {
    path: "/TheNews",
    name: "TheNews",
    component: TheNews,
  },
  {
    path: "/_SingleRoom",
    name: "_SingleRoom",
    component: _SingleRoom,
  },
  {
    path: "/_DoubleRoom",
    name: "_DoubleRoom",
    component: _DoubleRoom,
  },
  {
    path: "/_TripleRoom",
    name: "_TripleRoom",
    component: _TripleRoom,
  },
  {
    path: "/_QuadrupleRoom",
    name: "_QuadrupleRoom",
    component: _QuadrupleRoom,
  },

  {
    path: "/EditPages",
    name: "",
    component: EditPages,
    beforeEnter: (to, from, next) => {
      let token = sessionStorage.getItem("token");
      if (token) {
        next();
      }
    },
    children: [
      {
        path: "",
        name: "EditHome",
        component: EditHome,
      },
      {
        path: "EditNews",
        name: "EditNews",
        component: EditNews,
      },
      {
        path: "EditSingle",
        name: "EditSingle",
        component: EditSingle,
      },
      {
        path: "EditDouble",
        name: "EditDouble",
        component: EditDouble,
      },
      {
        path: "EditTriple",
        name: "EditTriple",
        component: EditTriple,
      },
      {
        path: "EditQuadruple",
        name: "EditQuadruple",
        component: EditQuadruple,
      },
    ],
  },

  {
    path: "/404",
    name: "/404",
    component: errorPage,
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
