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
      <a-col :md="18">
        <a-row>
          <Card>
            <a-row>
              <a-col :md="18">
                <a-row class="card-header-pedido">
                  <h2>Pedido</h2>
                  <p>OS-1405</p>
                  <a-tag color="#87d068">
                    Aprovado
                  </a-tag>
                </a-row>
              </a-col>
              <a-col :md="6">
                <a-row>
                  <p><b>Cliente</b></p>
                  <span class="nome-cliente">Maicon Costa</span>
                  <p>Rua Ugo Abílio Rigo, 31 - Andorinhas</p>
                </a-row>
              </a-col>
            </a-row>
          </Card>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Card from "@/components/cards/Card.vue";
import CardPedido from "@/components/cards/CardPedido.vue";

export default {
  name: "Pedidos",
  components: {
    Card,
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
.card-header-pedido >>> h2 {
  margin-bottom: 0;
}
.nome-cliente {
  font-weight: 600;
  color: #211996;
}
</style>
