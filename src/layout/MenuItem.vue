<template>
  <div class="menu-item">
    <router-link :to="path" exact active-class="menu-item-active">
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
  margin: 5px 0;
}
.menu-item a:hover {
  background: rgba(255, 255, 255, 0.363);
  border-radius: 5px;
  transition: 0.3s;
}

.menu-item .menu-item-active {
  background: rgba(255, 255, 255, 0.363);
  border-radius: 5px;
}

.menu-item >>> .anticon {
  font-size: 18px;
  padding-bottom: 5px;
}

@media (max-width: 768px) {
  .menu-item a {
    font-size: 8px;
  }

  .menu-item >>> .anticon {
    font-size: 13px;
    padding-bottom: 5px;
  }
}
</style>
