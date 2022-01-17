<template>
  <div>
    <v-row class="my-16">
      <v-card>
        <v-toolbar flat color="primary" dark>
          <v-toolbar-title>首頁</v-toolbar-title>
        </v-toolbar>

        <v-tabs vertical>
          <v-tab> 區塊一 </v-tab>
          <v-tab> 區塊二 </v-tab>

          <!-- title item -->
          <v-tab-item>
            <v-card flat class="pa-10">
              <v-row class="Reserve_Block">
                <v-img
                  class="rounded"
                  :lazy-src="FrontPage.photo"
                  max-height="400"
                  :src="FrontPage.photo"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
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

              <!-- 文字 -->
              <v-row class="ma-5">
                <v-col>
                  <v-sheet rounded class="pa-5" color="white" elevation="10">
                    <v-textarea
                      clearable
                      v-model="FrontPage.title"
                      filled
                    ></v-textarea>
                  </v-sheet>
                </v-col>

                <v-col>
                  <v-sheet rounded class="pa-5" color="white" elevation="10">
                    <v-textarea
                      clearable
                      v-model="FrontPage.desc"
                      filled
                    ></v-textarea>
                  </v-sheet>
                </v-col>

                <v-col>
                  <v-sheet rounded class="pa-5" color="white" elevation="10">
                    <v-textarea
                      clearable
                      v-model="FrontPage.button"
                      filled
                    ></v-textarea>
                  </v-sheet>
                </v-col>
              </v-row>

              <!-- 圖片與上傳 -->
              <v-row class="align-center justify-end">
                <v-sheet
                  class="px-5"
                  rounded
                  color="white"
                  elevation="8"
                  height="63"
                  width="300"
                >
                  <v-file-input
                    name="file"
                    ref="imgfiles"
                    type="file"
                    accept="image/png, image/jpeg, image/bmp"
                    prepend-icon="mdi-camera"
                    label="Avatar"
                  ></v-file-input>
                </v-sheet>

                <div class="mx-10">
                  <v-btn dark color="primary" @click="TitleUpData">
                    上傳
                  </v-btn>

                  <v-snackbar v-model="snackbar" :multi-line="multiLine">
                    {{ text }}

                    <template v-slot:action="{ attrs }">
                      <v-btn
                        color="red"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                      >
                        關閉
                      </v-btn>
                    </template>
                  </v-snackbar>
                </div>
              </v-row>
            </v-card>
          </v-tab-item>

          <!-- About item -->
          <v-tab-item class="pa-10">
            <v-card flat>
              <v-row class="About_Block">
                <v-col class="mx-5">
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

                <v-col>
                  <div class="AboutText">
                    <h3 class="text-center">{{ About.title }}</h3>
                    <h4>{{ About.desc }}</h4>
                  </div>
                </v-col>
              </v-row>

              <!-- 文字 -->
              <v-row class="ma-5">
                <v-col>
                  <v-sheet rounded class="pa-5" color="white" elevation="10">
                    <v-textarea
                      clearable
                      v-model="About.title"
                      filled
                    ></v-textarea>
                  </v-sheet>
                </v-col>

                <v-col>
                  <v-sheet rounded class="pa-5" color="white" elevation="10">
                    <v-textarea
                      clearable
                      v-model="About.desc"
                      filled
                    ></v-textarea>
                  </v-sheet>
                </v-col>
              </v-row>

              <!-- 圖片與上傳 -->
              <v-row class="align-center justify-end">
                <v-sheet
                  class="px-5"
                  rounded
                  color="white"
                  elevation="8"
                  height="63"
                  width="300"
                >
                  <v-file-input
                    name="Aboutfile"
                    ref="Aboutimgfile"
                    type="file"
                    accept="image/png, image/jpeg, image/bmp"
                    prepend-icon="mdi-camera"
                    label="Avatar"
                  ></v-file-input>
                </v-sheet>

                <div class="mx-10">
                  <v-btn dark color="primary" @click="AboutUpData">
                    上傳
                  </v-btn>

                  <v-snackbar
                    v-model="Aboutsnackbar"
                    :multi-line="AboutmultiLine"
                  >
                    {{ text }}

                    <template v-slot:action="{ attrs }">
                      <v-btn
                        color="red"
                        text
                        v-bind="attrs"
                        @click="Aboutsnackbar = false"
                      >
                        關閉
                      </v-btn>
                    </template>
                  </v-snackbar>
                </div>
              </v-row>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   消息條
      multiLine: true,
      AboutmultiLine: true,
      Aboutsnackbar: false,
      snackbar: false,
      text: `編 輯 成 功`,


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
    TitleUpData() {
      let vm = this;
      let uploadedFile = this.$refs.imgfiles.$refs.input.files[0]; // 取得使用者上傳的檔案
      let formData = new FormData(); // 使用 API 上傳檔案需透過建立一個 FormData 物件來當作請求內容
      formData.append("photo", uploadedFile); // 設定上傳的檔案
      formData.append("title", vm.FrontPage.title);
      formData.append("desc", vm.FrontPage.desc);
      formData.append("button", vm.FrontPage.button);
      fetch(`https://think-x-tech.synology.me/hotel_system/public/api/index/update`, {
        method: "POST",
        headers: {
          // 不需要設定 'Content-Type': 'multipart/form-data' ，已經用 FormData 物件作為請求內容
          Authorization: "Bearer 267|2cEoJMpGw63gFpsaK8crj6sy6kxPPmdQCCgtWKFF",
        },
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data) {
            vm.snackbar = true;
            setTimeout(() => {
              window.location.reload(); // 1秒後重新整理瀏覽器渲染新資料
            }, 2000);
          }
        })
        .catch((error) => {
          if (error) {
            vm.snackbar = true;
            vm.text = `編 輯  失 敗`;
          }
        });
    },

    AboutUpData() {
      let vm = this;
      let uploadedFile = this.$refs.Aboutimgfile.$refs.input.files[0]; // 取得使用者上傳的檔案
      let formData = new FormData(); // 使用 API 上傳檔案需透過建立一個 FormData 物件來當作請求內容
      formData.append("photo", uploadedFile); // 設定上傳的檔案
      formData.append("title", vm.About.title);
      formData.append("desc", vm.About.desc);
      fetch(`${process.env.VUE_APP_images}public/api/about/update`, {
        method: "POST",
        headers: {
          // 不需要設定 'Content-Type':'multipart/form-data'已經用 FormData 物件作為請求內容
          Authorization: "Bearer 267|2cEoJMpGw63gFpsaK8crj6sy6kxPPmdQCCgtWKFF",
        },
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data) {
            vm.Aboutsnackbar = true;
            vm.text = `編 輯 成 功`;

            setTimeout(() => {
              window.location.reload(); // 2秒後重新整理瀏覽器渲染新資料
            }, 2000);
          }
        })
        .catch((error) => {
          if (error) {
            vm.Aboutsnackbar = true;
            vm.text = `編 輯 失 敗`;
          }
        });
    },
  },

  created() {
    let vm = this;

    // Title block data connect
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

    // about data connect
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

    // News data connect
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
  .titleText {
    border: 5px solid gray;
    width: 50%;
    margin: 0% auto;
    backdrop-filter: blur(5px);
    h1,
    h2 {
      color: #fff;
      line-height: 2;
    }
  }
}

.About_Block {
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
</style>
