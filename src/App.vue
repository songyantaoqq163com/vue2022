<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
/* .el-table td, .el-table th{
  padding:0 !important;
} */

 .headerName .has-gutter th{
        background:#5d86ed!important;
        color:#ffffff!important
    }
</style>
