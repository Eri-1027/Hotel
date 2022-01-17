<template>
  <div>
    <v-app-bar
      elevation="10"
      rounded
      :collapse="!collapseOnScroll"
      color="blue-grey"
      dark
      app
    >
      <v-menu
        v-model="menu"
        :nudge-width="200"
        offset-x
        transition="slide-x-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon v-bind="attrs" v-on="on"> </v-app-bar-nav-icon>
        </template>

        <v-list dense>
          <v-subheader>Menu</v-subheader>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item to="/">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item to="/TheNews">
              <v-list-item-title>News</v-list-item-title>
            </v-list-item>

            <v-list-item to="/_SingleRoom">
              <v-list-item-title>Room</v-list-item-title>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-title v-bind="attrs" v-on="on">
                    Edit Web Content
                  </v-list-item-title>
                </template>

                <v-card>
                  <v-card-title class="text-h5 grey lighten-2">
                    Go to edit page
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-col cols="12">
                        <v-text-field
                          v-model="user.email"
                          :rules="[rules.required, rules.email]"
                          label="E-mail"
                          hint="輸入E-mail"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="user.password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Password"
                          hint="輸入密碼"
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>
                    </v-container>
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="primary"
                      text
                      @keyup.enter="login"
                      @click="login"
                    >
                      login
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>

      <v-toolbar-title>佳期大飯店</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-checkbox
        v-model="collapseOnScroll"
        color="white"
        hide-details
      ></v-checkbox>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapseOnScroll: true,
      menu: false,
      selectedItem: 0,
      dialog: false,
      show1: false,

      rules: {
        required: (value) => !!value || "Required.",
        counter: (value) => value.length <= 20 || "Max 20 characters",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },

      user: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      let vm = this;
      fetch(`${process.env.VUE_APP_images}public/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: vm.user.email,
          password: vm.user.password,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let token = data.token;
          if (token) {
            sessionStorage.setItem("token", token);
            vm.$router.push("/EditPages");
          }
        })
        .catch((error) => {
          if (error) {
            console.log("輸入錯誤");
          }
        });
    },
  },
  watch: {
    dialog() {
      (this.user.email = ""), (this.user.password = "");
    },
  },
};
</script>

<style lang="scss" scoped>
.bar {
  position: fixed;
  z-index: 10;
}
.logo {
  display: flex;
  align-items: center;
  img {
    width: 50%;
  }
}
h3 {
  letter-spacing: 5px;
}
</style>