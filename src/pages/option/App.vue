<template>
  <div id="app">
    <UserNameRemarkCmp></UserNameRemarkCmp>
  </div>
</template>

<script setup>
import { ref } from "vue";

import UserNameRemarkCmp from "./components/UserNameRemark/UserNameRemark.vue"


const msg = ref("");

</script>

<style  lang='less' scoped>
.chrome_container {
  width: 300px;
  background-color: white;
}
</style>