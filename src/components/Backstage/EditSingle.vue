<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <div class="carousel">
            <img ref="GetTag" :src="changeimg" alt="" />
          </div>
        </v-col>

        <v-col>
          <div class="side_bar">
            <div class="side_bar_nav">
              <router-link to="/EditPages/EditDouble">
                <p>雙人房</p>
              </router-link>
              <router-link to="/EditPages/EditTriple">
                <p>三人房</p>
              </router-link>
              <router-link to="/EditPages/EditQuadruple">
                <p>四人房</p>
              </router-link>
            </div>

            <div>
              <div class="mb-10">
                <v-dialog v-model="dialog" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                      房型編輯
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">編輯單人房</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col>
                            <v-textarea
                              v-model="TextAndImg.title"
                              clearable
                              outlined
                              name="input-7-4"
                              label="消息內容"
                            ></v-textarea>

                            <v-textarea
                              v-model="TextAndImg.desc"
                              clearable
                              outlined
                              name="input-7-4"
                              label="消息內容"
                            ></v-textarea>

                            <v-file-input
                              ref="imgfile1"
                              accept="image/png, image/jpeg, image/bmp"
                              prepend-icon="mdi-camera"
                              label="上傳圖檔1"
                            ></v-file-input>

                            <v-file-input
                              ref="imgfile2"
                              accept="image/png, image/jpeg, image/bmp"
                              prepend-icon="mdi-camera"
                              label="上傳圖檔2"
                            ></v-file-input>

                            <v-file-input
                              ref="imgfile3"
                              accept="image/png, image/jpeg, image/bmp"
                              prepend-icon="mdi-camera"
                              label="上傳圖檔3"
                            ></v-file-input>

                            <v-file-input
                              ref="imgfile4"
                              accept="image/png, image/jpeg, image/bmp"
                              prepend-icon="mdi-camera"
                              label="上傳圖檔4"
                            ></v-file-input>

                            <v-file-input
                              ref="imgfile5"
                              accept="image/png, image/jpeg, image/bmp"
                              prepend-icon="mdi-camera"
                              label="上傳圖檔5"
                            ></v-file-input>

                            <v-file-input
                              ref="imgfile6"
                              accept="image/png, image/jpeg, image/bmp"
                              prepend-icon="mdi-camera"
                              label="上傳圖檔6"
                            ></v-file-input>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="updata">
                        儲存
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>

              <ul>
                <li>
                  <h2>單人房</h2>
                </li>
                <hr />
                <li class="my-3">
                  <p>{{ TextAndImg.title }}</p>
                  <p>
                    {{ TextAndImg.desc }}
                  </p>
                  <ul class="img_item">
                    <li>
                      <a href="#" @click.prevent="SwitchPicture">
                        <img
                          class="clickStyle"
                          ref="item1"
                          data-Num="1"
                          :src="TextAndImg.photo1"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#" @click.prevent="SwitchPicture">
                        <img data-Num="2" :src="TextAndImg.photo2" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#" @click.prevent="SwitchPicture">
                        <img data-Num="3" :src="TextAndImg.photo3" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#" @click.prevent="SwitchPicture">
                        <img data-Num="4" :src="TextAndImg.photo4" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#" @click.prevent="SwitchPicture">
                        <img data-Num="5" :src="TextAndImg.photo5" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#" @click.prevent="SwitchPicture">
                        <img data-Num="6" :src="TextAndImg.photo6" alt="" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,

      TextAndImg: {
        title: "",
        desc: "",
        photo1: "",
        photo2: "",
        photo3: "",
        photo4: "",
        photo5: "",
        photo6: "",
        id: 1,
      },
      changeimg: "",
    };
  },
  created() {
    this.showRoom();
  },

  methods: {
    showRoom() {
      let vm = this;
      fetch(process.env.VUE_APP_room_style, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 267|2cEoJMpGw63gFpsaK8crj6sy6kxPPmdQCCgtWKFF",
        },
        body: JSON.stringify({
          title: vm.TextAndImg.title,
          desc: vm.TextAndImg.desc,
          photo1: vm.TextAndImg.photo1,
          photo2: vm.TextAndImg.photo2,
          photo3: vm.TextAndImg.photo3,
          photo4: vm.TextAndImg.photo4,
          photo5: vm.TextAndImg.photo5,
          photo6: vm.TextAndImg.photo6,
          id: vm.TextAndImg.id,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          vm.changeimg =
            vm.TextAndImg.photo1 = `${process.env.VUE_APP_images}${data[0].path1}`;
          vm.TextAndImg.title = data[0].title;
          vm.TextAndImg.desc = data[0].desc;
          vm.TextAndImg.photo1 = `${process.env.VUE_APP_images}${data[0].path1}`;
          vm.TextAndImg.photo2 = `${process.env.VUE_APP_images}${data[0].path2}`;
          vm.TextAndImg.photo3 = `${process.env.VUE_APP_images}${data[0].path3}`;
          vm.TextAndImg.photo4 = `${process.env.VUE_APP_images}${data[0].path4}`;
          vm.TextAndImg.photo5 = `${process.env.VUE_APP_images}${data[0].path5}`;
          vm.TextAndImg.photo6 = `${process.env.VUE_APP_images}${data[0].path6}`;
        });
    },

    SwitchPicture(e) {
      let list = document.querySelectorAll(".img_item img");
      list.forEach((n) => {
        n.classList.remove("clickStyle");
        if (e.target.dataset.num == n.dataset.num) {
          e.target.classList.add("clickStyle");
        }
      });
      let GetTarget = e.target;
      let Get_src = GetTarget.getAttribute("src");
      this.changeimg = Get_src;
    },

    updata() {
      let vm = this;

      let upFile1 = this.$refs.imgfile1.$refs.input.files[0];
      let upFile2 = this.$refs.imgfile2.$refs.input.files[0];
      let upFile3 = this.$refs.imgfile3.$refs.input.files[0];
      let upFile4 = this.$refs.imgfile4.$refs.input.files[0];
      let upFile5 = this.$refs.imgfile5.$refs.input.files[0];
      let upFile6 = this.$refs.imgfile6.$refs.input.files[0];

      let fromData = new FormData();
      fromData.append("title", vm.TextAndImg.title);
      fromData.append("desc", vm.TextAndImg.desc);
      fromData.append("photo1", upFile1);
      fromData.append("photo2", upFile2);
      fromData.append("photo3", upFile3);
      fromData.append("photo4", upFile4);
      fromData.append("photo5", upFile5);
      fromData.append("photo6", upFile6);
      fromData.append("id", "1");

      fetch(`${process.env.VUE_APP_images}public/api/roomtype/update`, {
        method: "POST",
        headers: {
          Authorization: "Bearer 267|2cEoJMpGw63gFpsaK8crj6sy6kxPPmdQCCgtWKFF",
        },
        body: fromData,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data) {
            window.location.reload();
          }
        });
    },
  },

  watch: {
    changeimg() {
      let display_image = this.$refs.GetTag;
      let AnimationClass = this.$refs.GetTag.classList.contains(
        "Background_Animation1"
      );
      if (AnimationClass === false) {
        display_image.classList.add("Background_Animation1");
        display_image.classList.remove("Background_Animation2");
      } else if (AnimationClass === true) {
        display_image.classList.remove("Background_Animation1");
        display_image.classList.add("Background_Animation2");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  border-radius: 5px;
  img {
    border-radius: 5px;
    object-fit: cover;
    display: block;
    max-width: 100%;
  }
}
.Background_Animation1 {
  animation-name: Animation1;
  animation-duration: 1s;
  @keyframes Animation1 {
    from {
      opacity: 0.3;
      transition: all 1s;
    }
    to {
      opacity: 1;
      top: 0;
      transform: scale(1);
      transition: all 1s;
    }
  }
}
.Background_Animation2 {
  animation-name: Animation2;
  animation-duration: 1s;
  @keyframes Animation2 {
    from {
      opacity: 0.3;
      transition: all 1s;
    }
    to {
      opacity: 1;
      transform: scale(1);
      transition: all 1s;
    }
  }
}
.side_bar {
  overflow: auto;
  height: 100vh;
  border-radius: 5px;
  padding: 0 1rem;

  .side_bar_nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    a {
      text-decoration: none;
      margin: 0 2%;
      display: block;
      transition: all 0.5s;
    }
    a:hover {
      transition: all 0.5s;
      transform: translateY(10px);
    }
    p {
      color: #007bff;
      font-weight: bold;
    }
  }

  ul {
    padding: 0% 3% 0 3%;
    hr {
      margin: 0px 60% 0 0;
    }
    h2 {
      font-size: 2.25em;
      font-weight: 700;
      color: #555;
    }
    p {
      white-space: pre-wrap;
      color: rgb(0 0 0 / 50%);
      line-height: 1.8;
      font-weight: 600;
    }
  }
  .img_item {
    display: flex;
    // flex-wrap: wrap;
    li {
      width: 50%;
      padding: 0.5%;
      transition: all 0.6s;
    }
    img:hover {
      transition: all 0.6s;
      box-shadow: 0px 0px 6px 6px #2125299e;
    }
    img {
      width: 100%;
      margin: 0 auto;
      // height: 20vh;
      border-radius: 5px;
      transition: all 0.6s;
      background-color: rgb(0 0 0 / 60%);
    }
    // 新增click效果
    .clickStyle {
      transform: scale(0.7);
      transition: all 0.6s;
    }
  }
  .SpinnerStyle {
    position: relative;
    top: 40%;
    bottom: 0;
    right: 0;
    left: 0;
  }
}
</style>