<template>
  <div>
    <v-app>
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>佳期後台管理</v-toolbar-title>
      </v-app-bar>

      <!-- Nav bar option -->
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list flat rounded>
          <v-subheader>Edit Menu</v-subheader>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Nav Bar 伸縮開關
      collapseOnScroll: true,
      drawer: false,
      selectedItem: 1,

      items: [
        { text: "Home", link: "/EditPages" },
        { text: "News", link: "/EditPages/EditNews" },
        { text: "Room", link: "/EditPages/EditSingle" },
        { text: "回官網", link: "/" },
      ],
    };
  },
};
</script>

