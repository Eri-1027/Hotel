<template>
  <div class="Hom_Background">
    <Navigation></Navigation>
    <v-main>
      <v-container>
        <v-row
          data-aos="zoom-in"
          data-aos-duration="1500"
          class="Reserve_Block"
        >
          <v-img
            class="rounded"
            :lazy-src="FrontPage.photo"
            max-height="400"
            :src="FrontPage.photo"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>

            <div
              data-aos="flip-up"
              data-aos-delay="1000"
              data-aos-duration="2000"
              class="my-16 pa-5 rounded titleText"
            >
              <div>
                <h1 class="text-center">{{ FrontPage.title }}</h1>
                <h2 class="text-center">{{ FrontPage.desc }}</h2>
                <h2 class="text-center">{{ FrontPage.button }}</h2>
                <div class="text-center mt-5">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        class="text-center"
                        color="primary"
                        elevation="10"
                        large
                        rounded
                      >
                        {{ FrontPage.button }}
                      </v-btn>
                    </template>
                    <span>暫無連結</span>
                  </v-tooltip>
                </div>
              </div>
            </div>
          </v-img>
        </v-row>

        <div class="About_Block">
          <v-col data-aos="fade-down-right" data-aos-duration="1500">
            <div>
              <v-img
                class="About_img rounded"
                :lazy-src="About.photo"
                max-height="600"
                max-width="500"
                :src="About.photo"
              >
              </v-img>
            </div>
          </v-col>

          <v-col data-aos="fade-up-left" data-aos-duration="1500">
            <div class="AboutText">
              <h3 class="text-center">{{ About.title }}</h3>
              <h4>{{ About.desc }}</h4>
            </div>
          </v-col>
        </div>

        <v-row class="Traffic_Block">
          <v-col>
            <v-card
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <v-system-bar></v-system-bar>

              <v-container>
                <v-row>
                  <v-col>
                    <h2>交通資訊</h2>
                    <p class="pt-2 font-weight-black">
                      從馬公到飯店車程約20分鐘
                    </p>
                  </v-col>
                </v-row>

                <v-row class="mb-5">
                  <div class="mx-3 d-flex justify-center">
                    <v-icon class="" color="blue">
                      mdi-map-marker-radius
                    </v-icon>
                    <p class="mb-0 ma-2 font-weight-black">
                      澎湖縣馬公市民族路58之1號二樓
                    </p>
                  </div>

                  <div class="mx-3 d-flex justify-center">
                    <v-icon color="blue"> mdi-phone </v-icon>
                    <p class="mb-0 ma-2 font-weight-black">06-927-0606</p>
                  </div>
                </v-row>

                <div class="Traffic_item">
                  <a
                    target="_blank"
                    href="https://www.uniair.com.tw/rwd/index.aspx"
                  >
                    <v-btn color="primary" class="mx-10" elevation="5">
                      <v-icon left dark> mdi-airplane </v-icon>
                      立榮航空
                    </v-btn>
                  </a>

                  <a target="_blank" href="https://www.mandarin-airlines.com/">
                    <v-btn color="teal" dark class="mx-10" elevation="5">
                      <v-icon left dark> mdi-airplane </v-icon>
                      華信航空
                    </v-btn>
                  </a>

                  <a
                    target="_blank"
                    href="https://www.pescadoresferry.com.tw/ferrySchedule"
                  >
                    <v-btn color="cyan" dark class="mx-10" elevation="5">
                      <v-icon left dark> mdi-ferry </v-icon>
                      百麗航運
                    </v-btn>
                  </a>

                  <a
                    target="_blank"
                    href="http://www.tnc-kao.com.tw/shipdate_1.aspx"
                  >
                    <v-btn color="purple" dark class="mx-10" elevation="5">
                      <v-icon left dark> mdi-ferry </v-icon>
                      台華輪(高雄-馬公)
                    </v-btn>
                  </a>
                </div>
              </v-container>

              <v-card-text class="grey lighten-4">
                <v-sheet max-width="100%" class="mx-auto">
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.051369030686!2d119.56522221481154!3d23.56659848468028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346c5af292bd1aaf%3A0x2207c8b35087a01f!2z5L2z5pyf5aSn6aOv5bqX!5e0!3m2!1szh-TW!2stw!4v1626781089845!5m2!1szh-TW!2stw"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </v-sheet>
              </v-card-text>
            </v-card>
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
      FrontPage: {
        title: "",
        desc: "",
        button: "",
        photo: "",
      },
      About: {
        title: "",
        desc: "",
        photo: "",
      },
    };
  },
  methods: {
    Title() {
      let vm = this;
      fetch(`${process.env.VUE_APP_images}public/api/index/show`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 267|2cEoJMpGw63gFpsaK8crj6sy6kxPPmdQCCgtWKFF",
        },
        body: JSON.stringify({
          title: vm.FrontPage.title,
          desc: vm.FrontPage.desc,
          photo: vm.FrontPage.photo,
          button: vm.FrontPage.button,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.updated_at) {
            vm.FrontPage.title = data.title;
            vm.FrontPage.desc = data.desc;
            vm.FrontPage.photo = `${process.env.VUE_APP_images}${data.path}`;
            vm.FrontPage.button = data.button;
          }
        });
    },
    AboutData() {
      let vm = this;
      fetch(`${process.env.VUE_APP_images}public/api/about/show`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 267|2cEoJMpGw63gFpsaK8crj6sy6kxPPmdQCCgtWKFF",
        },
        body: JSON.stringify({
          title: vm.About.title,
          desc: vm.About.desc,
          photo: vm.About.photo,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.updated_at) {
            vm.About.title = data.title;
            vm.About.desc = data.desc;
            vm.About.photo = `${process.env.VUE_APP_images}${data.path}`;
          }
        });
    },
  },
  created() {
    this.Title();
    this.AboutData();
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

.Reserve_Block {
  margin: 10% 0;
  .titleText {
    border: 5px solid gray;
    width: 50%;
    margin: 0 auto;
    backdrop-filter: blur(5px);
    h1,
    h2 {
      color: #fff;
      line-height: 2;
    }
  }
}

.About_Block {
  display: flex;
  margin: 20% 0;
  .About_img {
    box-shadow: 20px 17px 0px 0px rgb(0 0 0 / 29%);
  }
  .AboutText {
    h4 {
      line-height: 2;
    }
    h3 {
      font-size: 2rem;
    }
  }
}

.Traffic_Block {
  margin: 10% 0;

  .Traffic_item {
    display: flex;
    justify-content: space-evenly;
  }
}

@media screen and (max-width: 600px) {
  .Reserve_Block {
    .titleText {
      width: 90%;
      h1,
      h2 {
        font-size: 16px;
      }
    }
  }

  .About_Block {
    flex-direction: column;
    .About_img {
      box-shadow: 0px 0px 8px 6px #10375d9c;
    }
  }

  .Traffic_Block {
    .Traffic_item {
      flex-direction: column;
      align-items: center;
      a {
        margin: 1rem 0;
      }
    }
  }
}
</style>
