<template>
    <div
      v-if="isExternal"
      :style="styleExternalIcon"
      class="svg-external-icon svg-icon"
      v-on="$listeners"
    />
    <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
      <use :xlink:href="iconName" />
    </svg>
    <!-- <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg> -->
  </template>
  
  <script>
  import { isExternal } from "../store/validate";
  
  export default {
    name: "svg-icon",
    props: {
      iconClass: {
        type: String,
        required: true,
      },
      className: {
        type: String,
        default: "",
      },
    },
    computed: {
      isExternal() {
        return isExternal(this.iconClass);
      },
      iconName() {
        return `#icon-${this.iconClass}`;
        // return `${this.iconClass}`
      },
      svgClass() {
        if (this.className) {
          return "svg-icon " + this.className;
        } else {
          return "svg-icon";
        }
      },
      styleExternalIcon() {
        return {
          mask: `url(${this.iconClass}) no-repeat 50% 50%`,
          "-webkit-mask": `url(${this.iconClass}) no-repeat 50% 50%`,
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .svg-icon {
    width: 2em;
    height: 2em;
    fill: currentColor;
    overflow: hidden;
    font-size: 16px;
  }
  /* .svg-icon {
  width: 12px;
  height: 12px;
  fill: currentColor;
  overflow: hidden;
} */
  
  
  .svg-external-icon {
    background-color: currentColor;
    mask-size: cover !important;
    display: inline-block;
  }
  </style>