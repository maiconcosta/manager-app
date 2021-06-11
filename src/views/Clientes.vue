<template>
  <div class="clientes">
    <h2>Clientes</h2>

    <a-row :gutter="[16, 8]">
      <a-col :md="16">
        <Card>
          <a-table
            :columns="columns"
            :row-key="(record) => record.login.uuid"
            :data-source="data"
            :pagination="pagination"
            :loading="loading"
            @change="handleTableChange"
            size="small"
          >
            <template #picture="picture">
              <a-avatar :src="picture.thumbnail" />
            </template>

            <template #name="name"> {{ name.first }} {{ name.last }} </template>

            <template #date="registered">
              {{ registered.date | dataBrasileira }}
            </template>
          </a-table>
        </Card>
      </a-col>
      <a-col :md="8">
        <Card>
          <div class="card-header">
            <a-avatar
              src="https://randomuser.me/api/portraits/women/84.jpg"
              :size="128"
            />
            <h3>Megan Hansen</h3>
          </div>
          <a-divider></a-divider>
          <div class="card-content">
            <div class="card-content-row">
              <span><b>Telefone:</b></span>
              <span>(27) 99722-7489</span>
            </div>
            <div class="card-content-row">
              <span><b>Data Cadastro:</b></span>
              <span>11/02/2019</span>
            </div>
            <div class="card-content-row">
              <span><b>Endereço:</b></span>
              <span
                >Rua Almirante Barroso, 109 - Praia do Suá - Vitória ES
              </span>
            </div>
          </div>
        </Card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import axios from "axios";
import { format } from "date-fns";

const queryData = (params) => {
  return axios.get("https://randomuser.me/api", { params: params });
};

const columns = [
  {
    title: "",
    dataIndex: "picture",
    width: "5%",
    scopedSlots: { customRender: "picture" },
  },
  {
    title: "Nome",
    dataIndex: "name",
    sorter: true,
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Telefone",
    dataIndex: "cell",
    width: "20%",
  },
  {
    title: "Data Cadastro",
    dataIndex: "registered",
    width: "25%",
    scopedSlots: { customRender: "date" },
  },
];

export default {
  name: "Clientes",
  components: {
    Card,
  },
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    },
    fetch(params = {}) {
      this.loading = true;
      queryData({
        results: 10,
        ...params,
      }).then(({ data }) => {
        const pagination = { ...this.pagination };
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = 200;
        this.loading = false;
        this.data = data.results;
        this.pagination = pagination;
      });
    },
  },
  filters: {
    dataBrasileira: (date) => date && format(new Date(date), "dd/MM/yyyy"),
  },
};
</script>
<style scoped>
.ant-card {
  width: 100%;
}
.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-content-row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0;
}
</style>
