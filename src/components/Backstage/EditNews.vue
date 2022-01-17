<template>
  <div>
    <v-row class="mt-10">
      <v-btn @click="AddNews" elevation="11" color="primary"
        >新增消息欄位</v-btn
      >
    </v-row>

    <!-- <v-row
      class="my-16 justify-center flex-column"
      v-for="(item, index) in News_Data"
      :key="index"
    >
      <v-col>
        <v-img
          max-width="600"
          :lazy-src="
            'https://think-x-tech.synology.me/hotel_system/' + item.path
          "
          :src="'https://think-x-tech.synology.me/hotel_system/' + item.path"
        ></v-img>
      </v-col>

      <v-col>
        <h2
          style="letter-spacing: 2px"
          class="text-dark h4 font-weight-bold my-3"
        >
          {{ item.tips }}
        </h2>

        <p class="text-primary">{{ item.during }}</p>

        <p class="font-weight-black">
          {{ item.desc }}
        </p>
      </v-col>
    </v-row> -->

    <v-row
      class="my-16"
      v-for="(item, index) in NewsData"
      :key="index"
    >
      <v-col sm="12" md="5">
        <v-img
          :lazy-src="
            'https://think-x-tech.synology.me/hotel_system/' + item.path
          "
          :src="'https://think-x-tech.synology.me/hotel_system/' + item.path"
        ></v-img>
      </v-col>

      <v-col sm="12" md="7">
        <h2
          style="letter-spacing: 2px"
          class="text-dark h4 font-weight-bold my-3"
        >
          {{ item.tips }}
        </h2>

        <p class="text-primary">{{ item.during }}</p>

        <p class="font-weight-black">
          {{ item.desc }}
        </p>

        <v-col class="text-right">
          <v-dialog max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <button
                class="btn pa-2 white--text blue darken-2 purple rounded"
                v-bind="attrs"
                v-on="on"
                @click="AddNewsId"
                :id="item.id"
              >
                消息編輯
              </button>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">消息修改</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-file-input
                        ref="imgfile"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera"
                        label="上傳圖檔"
                      ></v-file-input>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        v-model="NewsDatadialog.tips"
                        clearable
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        v-model="NewsDatadialog.during"
                        clearable
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col>
                      <v-textarea
                        v-model="NewsDatadialog.desc"
                        clearable
                        outlined
                        name="input-7-4"
                        label="消息內容"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red lighten-1" text @click="Delete">
                  刪除此消息
                </v-btn>
                <v-btn color="blue darken-1" text @click="UpData"> 儲存 </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      dialog: false,
      Addid: "",
      NewsData: [],
      NewsDatadialog: {},
    };
  },
  created() {
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
        vm.NewsData = data;
      });
  },
  methods: {
    AddNewsId(e) {
      // 點擊取出id將不同的資料渲染在對話框
      let vm = this;
      let getadd = e.target.id;
      let filter = vm.NewsData.find((i) => {
        return i.id == getadd;
      });
      vm.NewsDatadialog = filter;
      vm.Addid = filter.id;
    },

    AddNews() {
      let vm = this;
      fetch(`${process.env.VUE_APP_images}public/api/news/insert`, {
        method: "POST",
        headers: {
          Authorization: "Bearer 267|2cEoJMpGw63gFpsaK8crj6sy6kxPPmdQCCgtWKFF",
        },
        body: vm.Addid,
      })
        .then((response) => {
          return response.json;
        })
        .then((data) => {
          if (data) {
            window.location.reload();
          }
        });
    },

    UpData() {
      let vm = this;
      let upFile = this.$refs.imgfile[0].$refs.input.files[0]; // 取得使用者上傳的檔案
      let formData = new FormData(); // 使用 API 上傳檔案需透過建立一個 FormData 物件來當作請求內容
      formData.append("tips", vm.NewsDatadialog.tips),
        formData.append("desc", vm.NewsDatadialog.desc),
        formData.append("during", vm.NewsDatadialog.during),
        formData.append("photo", upFile), // 設定上傳的檔案
        formData.append("id", vm.Addid), // vm.Addid 使用者點擊時取得的id用於分辨資料要更新在哪一筆
        fetch(`${process.env.VUE_APP_images}public/api/news/update`, {
          method: "POST",
          headers: {
            // 不需要設定 'Content-Type': 'multipart/form-data' ，已經用 FormData 物件作為請求內容
            Authorization:
              "Bearer 267|2cEoJMpGw63gFpsaK8crj6sy6kxPPmdQCCgtWKFF",
          },
          body: formData,
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

    Delete() {
      let vm = this;
      let formData = new FormData();
      formData.append("id", vm.Addid);

      fetch(`${process.env.VUE_APP_images}public/api/news/delete`, {
        method: "POST",
        headers: {
          Authorization: "Bearer 267|2cEoJMpGw63gFpsaK8crj6sy6kxPPmdQCCgtWKFF",
        },
        body: formData,
      })
        .then((response) => {
          return response.json;
        })
        .then((data) => {
          if (data) {
            window.location.reload();
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
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
.btn {
  transition: all 0.5s;
}
.btn:hover {
  transition: all 0.5s;
  transform: scale(1.2, 1.2);
}
</style>