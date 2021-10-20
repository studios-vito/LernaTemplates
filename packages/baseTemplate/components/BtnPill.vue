<template>
  <v-btn
    class="OrangeGradientBtn"
    :style="btnStyle"
    :width="width"
    height="42px"
    v-bind="attrs"
    v-on="on"
  >{{ input }}</v-btn>
</template>
<script>
export default {
  props: {
    input: String,
    width: { Number, default: "142px" },
    bgColor: {
      Array,
      default: function () {
        return ["rgb(231, 86, 14)", "rgba(255, 190, 75, 1)"];
      },
    },
    attrs: Object,
    on: Object,
  },
  computed: {
    btnStyle() {
      return {
        "--left-color": this.bgColor[0],
        "--right-color": this.bgColor[1],
      };
    },
  },
};
</script>
<style lang="scss" scoped>
$left-color: rgb(231, 86, 14);
$right-color: rgba(255, 190, 75, 1);
.OrangeGradientBtn {
  color: white;
  border-radius: 20px;
  background: var(--left-color);
  background: -moz-linear-gradient(
    90deg,
    var(--left-color) 0%,
    var(--right-color) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    var(--left-color) 0%,
    var(--right-color) 100%
  );
  background: linear-gradient(
    90deg,
    var(--left-color) 0%,
    var(--right-color) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr= var(--left-color),endColorstr= var(--right-color) ,GradientType=1);
}
</style>
