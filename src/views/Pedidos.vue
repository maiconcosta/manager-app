<template>
  <div class="home">
    <h2>Pedidos</h2>
    <a-row :gutter="16">
      <a-col :span="12">
        <Card
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          commodi accusantium repellendus laudantium itaque, odio veritatis
          ducimus ipsum, numquam quis quos porro dolorem nostrum magni delectus
          dolor blanditiis. Esse, eligendi.</Card
        >
      </a-col>
      <a-col :span="12">
        <Card
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          commodi accusantium repellendus laudantium itaque, odio veritatis
          ducimus ipsum, numquam quis quos porro dolorem nostrum magni delectus
          dolor blanditiis. Esse, eligendi.</Card
        ></a-col
      >
    </a-row>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Pedidos",
  components: {
    Card,
  },
};
</script>
