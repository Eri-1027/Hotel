<template>
  <div class="Hom_Background">
    <Navigation></Navigation>
    <v-main>
      <v-container class="my-16">
        <div class="rowStyle">
          <div class="carousel">
            <img ref="GetTag" :src="changeimg" alt="" />
          </div>
          <div class="side_bar">
            <div class="side_bar_nav">
              <router-link to="_SingleRoom"> <p>單人房</p> </router-link>
              <router-link to="_TripleRoom"> <p>三人房</p> </router-link>
              <router-link to="_QuadrupleRoom"> <p>四人房</p> </router-link>
            </div>

            <div>
              <ul>
                <li>
                  <h2>雙人房</h2>
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
        </div>
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
      TextAndImg: {
        title: "",
        desc: "",
        photo1: "",
        photo2: "",
        photo3: "",
        photo4: "",
        photo5: "",
        photo6: "",
        id: 2,
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
.Hom_Background {
  background-image: url("~@/assets/img/background.png");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
}

.rowStyle {
  display: flex;
}

.carousel {
  width: 100%;
  height: 350px;
  border-radius: 5px;
  img {
    transition: all 0.5s;
    border-radius: 5px;
    display: block;
    width: 80%;
    height: 100%;
    object-fit: contain;
  }
}
.Background_Animation1 {
  animation-name: Animation1;
  animation-duration: 1s;
  animation-direction: alternate;
  @keyframes Animation1 {
    from {
      opacity: 0.3;
      transform: scale(1.2);
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
  animation-direction: alternate;
  animation-duration: 1s;
  @keyframes Animation2 {
    from {
      opacity: 0.3;
      transform: scale(1.2);
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
  border-radius: 5px;
  padding: 0 1rem;
  width: 100%;

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

@media screen and (max-width: 600px) {
  .rowStyle {
    flex-direction: column;
  }

  .carousel {
    border-radius: 5px;
    img {
      width: 100%;
    }
  }

  .side_bar {
    padding: 1rem;
  }
}
</style>