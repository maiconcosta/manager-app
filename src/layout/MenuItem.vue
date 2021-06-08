<template>
  <div class="menu-item">
    <router-link :to="path">
      <a-icon :type="icon" />
      <span>
        {{ name }}
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: ["name", "path", "icon"],
};
</script>

<style scoped>
.menu-item {
  width: 100%;
}
.menu-item a {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 20px 5px;
}
.menu-item a:hover {
  background: rgba(255, 255, 255, 0.363);
  border-radius: 5px;
}

.menu-item >>> .anticon {
  font-size: 18px;
  padding-bottom: 5px;
}
</style>
