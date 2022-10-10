<template>
  <el-select v-model="selected" @change="syncValue()" clearable placeholder="请选择">
    <el-option v-for="item in options" :key="item.value" :value="item.value">
    </el-option>
  </el-select>
</template>
<script>
export default {
  name: "pageFullScreen",
  components: {},
   props: {
      value: {
        type: String,
        default: "",
      },
    },
  data() {
    return {
      selected: "",
      options: [
        {
          value: "黄金糕1",
        },
        {
          value: "双皮奶1",
        },
      ],
    };
  },
  methods: {
    syncValue() {
      this.$emit("input", this.selected);
    },
  },
};
</script>

<style>
</style>