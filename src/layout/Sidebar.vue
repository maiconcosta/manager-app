<template>
  <div class="sidebar">
    <div class="nav">
      <MenuItem name="Dashboard" path="/" icon="dashboard" />
      <MenuItem name="Pedidos" path="/pedidos" icon="shopping-cart" />
      <MenuItem name="Clientes" path="/clientes" icon="user" />
      <MenuItem name="Estoque" path="/estoque" icon="shop" />
      <MenuItem name="Configurações" path="/configuracoes" icon="setting" />
    </div>
  </div>
</template>

<script>
import MenuItem from "./MenuItem.vue";

export default {
  name: "Sidebar",
  components: {
    MenuItem,
  },
};
</script>

<style scoped>
.sidebar {
  width: 100px;
  height: 100vh;
  background: #27235e;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
