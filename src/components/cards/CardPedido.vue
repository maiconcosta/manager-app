<template>
  <a-card hoverable>
    <div class="nome-valor">
      <h3>{{ nome }}</h3>
      <span>
        <b>{{
          valor
            | currency("R$", 2, {
              decimalSeparator: ",",
              spaceBetweenAmountAndSymbol: true,
            })
        }}</b>
      </span>
    </div>
    <div class="status-pedido-id">
      <a-tag color="#87d068">
        {{ status }}
      </a-tag>
      <span>{{ pedidoId }}</span>
    </div>
  </a-card>
</template>
<script>
export default {
  props: ["nome", "valor", "status", "pedidoId"],
};
</script>
<style scoped>
.ant-card {
  border-radius: 10px;
}
.nome-valor {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  line-height: 18px;
}
.status-pedido-id {
  display: flex;
  align-content: center;
  justify-content: space-between;
}
</style>
