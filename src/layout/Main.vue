<template>
  <div class="main">
    <div class="side">
      <Sidebar />
    </div>
    <div class="content">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/layout/Sidebar";
export default {
  name: "Main",
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
.main {
  display: flex;
}
.content {
  padding: 20px;
}
</style>
