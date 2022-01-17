<template>
  <div>
    <img
      width="500"
      style="display: block; margin: auto"
      src="~@/assets/img/404.gif"
    />
    <v-btn @click="back" class="but" rounded color="primary" dark>
      點擊回首頁
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    back: function () {
      let vm = this;
      vm.$router.push("/");
    },
  },
};
</script>

<style  lang="scss" scoped>
.text {
  letter-spacing: 5px;
}
.but {
  display: block;
  margin: auto;
}
.but:hover {
  box-shadow: 0px 0px 20px 6px rgb(0 0 0 / 38%);
}
</style>