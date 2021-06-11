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
.content {
  padding: 80px 50px;
  margin-left: 100px;
}
.content >>> h2 {
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .content {
    padding: 20px;
    margin-left: 60px;
  }
}
</style>
