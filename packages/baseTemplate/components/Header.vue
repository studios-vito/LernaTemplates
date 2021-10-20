<template>
  <v-container id="background" class="px-12 py-0">
    <v-app-bar :height="$vuetify.breakpoint.xs ? '50px' : '100px'" flat color="transparent">
      <a @click.prevent="$router.back()">
        <nuxt-img src="/Minilogo.png" />
      </a>
      <v-spacer></v-spacer>
      <v-btn-toggle v-show="$vuetify.breakpoint.smAndUp" group tile>
        <v-btn
          v-for="item in $strapi.user ? menus : menusLogin"
          :key="item"
          :to="`/${item}`"
          text
          :aria-label="item"
          exact
          plain
          retain-focus-on-click
          class="text-capitalize text-h6"
          color="white"
        >{{ item }}</v-btn>
      </v-btn-toggle>

      <LoginDialog />
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      dialog: false,
      menus: [],
      menusLogin: ["save", "preview", "publish"],
      expanded: true,
    };
  },
};
</script>

<style lang="scss" scoped>
#background {
  background: rgb(7, 5, 7);
  background: linear-gradient(
    180deg,
    rgba(7, 5, 7, 1) 0%,
    rgba(46, 76, 124, 1) 50%,
    rgba(49, 130, 140, 1) 100%
  );
  border-radius: 50px;
  height: auto;
  transition: max-height 0.5s;
}
.expand-enter-active,
.expand-leave-active {
  transition-property: opacity, height;
}
.expand-enter,
.expand-leave-to {
  opacity: 0;
}
.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover)::v-deep
  .v-btn__content {
  color: white;
  transition: color 0.3s ease;
  opacity: 1;
}
.v-btn--plain::v-deep .v-btn__content {
  color: #e7580f;
  transition: color 0.3s ease;
  opacity: 1;
}
</style>
