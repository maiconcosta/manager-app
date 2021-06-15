<template>
  <div class="home">
    <h2>Pedidos</h2>
    <a-row :gutter="[32, 8]">
      <a-col :md="6" class="lista-pedidos">
        <a-row :gutter="[16, 16]">
          <a-col>
            <CardPedido
              nome="Maicon Costa"
              valor="43.79"
              status="Aprovado"
              pedidoId="OS-1405"
            />
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import CardPedido from "@/components/cards/CardPedido.vue";

export default {
  name: "Pedidos",
  components: {
    CardPedido,
  },
};
</script>

<style scoped>
.home .lista-pedidos {
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
}
.lista-pedidos::-webkit-scrollbar-track {
  background-color: transparent;
}
.lista-pedidos::-webkit-scrollbar {
  width: 3px;
  background: transparent;
}
.lista-pedidos::-webkit-scrollbar-thumb {
  background: #27235e;
  border-radius: 10px;
}
</style>
