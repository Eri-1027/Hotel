<template>
  <div>
    <v-footer dark padless>
      <v-card
        width="100%"
        flat
        tile
        class="primary lighten-1 white--text text-center"
      >
        <h4 class="white--text py-5">
          進退房時間 : CHECK IN: 15:00-21:00 CHECK OUT: 05:00-11:00
        </h4>

        <h4 class="white--text py-1">櫃台服務時間24HRS</h4>

        <h4 class="white--text py-1">rainbowhotelservice@gmail.com</h4>

        <h4 class="white--text py-1">粉絲專頁:彩虹文旅</h4>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>佳期大飯店 2018© ALL RIGHTS RESERVED</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>