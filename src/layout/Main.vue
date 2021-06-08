<template>
  <div class="main">
    <div class="side">
      <Sidebar />
    </div>
    <div class="content">    
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
