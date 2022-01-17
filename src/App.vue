<template>
  <v-app>
    <div >
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

.move-enter-active,
.move-leave-active {
  transition: opacity 1s, transform 1s;
}

.move-enter,
.move-leave-to {
  opacity: 0;
  transform: translateY(-30%);
}
</style>