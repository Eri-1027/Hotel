<template>
  <div class="Hom_Background">
    <Navigation></Navigation>
    <v-main>
      <v-container>
        <v-row
          class="my-16"
          v-for="(item, index) in News_Data"
          :key="index"
        >
          <v-col sm="12" md="5">
            <v-img
              :lazy-src="
                'https://think-x-tech.synology.me/hotel_system/' + item.path
              "
              :src="
                'https://think-x-tech.synology.me/hotel_system/' + item.path
              "
            ></v-img>
          </v-col>

          <v-col sm="12" md="7">
            <h2
              style="letter-spacing: 2px"
              class="text-dark h4 font-weight-bold"
            >
              {{ item.tips }}
            </h2>
            <p class="text-primary">{{ item.during }}</p>
            <p class="font-weight-black">
              {{ item.desc }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "@/components/website/TheNavigation_Bar.vue";
import Footer from "@/components/website/TheFooter.vue";
export default {
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      News_Data: [],
      show: false,
    };
  },
  created() {
    this.ShowAllNew();
  },
  methods: {
    ShowAllNew() {
      let vm = this;
      fetch(`${process.env.VUE_APP_images}public/api/news/show`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 267|2cEoJMpGw63gFpsaK8crj6sy6kxPPmdQCCgtWKFF",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          vm.News_Data = data;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.Hom_Background {
  background-image: url("~@/assets/img/background.png");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
}

.NewsStyle {
  margin: 10% 0;
  .titleText {
    border: 5px solid gray;
    width: 50%;
    margin: 10% auto;
    backdrop-filter: blur(5px);
    h1,
    h2 {
      color: #fff;
      line-height: 2;
    }
  }
}
</style>