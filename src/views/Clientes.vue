<template>
  <div class="clientes">
    <h2>Clientes</h2>

    <a-row :gutter="[16, 8]">
      <a-col :md="18">
        <Card>
          <a-table
            :columns="columns"
            :row-key="(record) => record.login.uuid"
            :data-source="data"
            :pagination="pagination"
            :loading="loading"
            :customRow="customRow"
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
      <a-col :md="6" v-if="usuarioSelecionado">
        <Card>
          <div class="card-header">
            <a-avatar :src="usuarioSelecionado.avatar" :size="128" />
            <h3>{{ nomeCompleto }}</h3>
          </div>
          <a-divider></a-divider>
          <div class="card-content">
            <div class="card-content-row">
              <span><b>Telefone:</b></span>
              <span>{{ usuarioSelecionado.telefone }}</span>
            </div>
            <div class="card-content-row">
              <span><b>Data Cadastro:</b></span>
              <span>{{
                usuarioSelecionado.dataCadastro | dataBrasileira
              }}</span>
            </div>
            <div class="card-content-row">
              <span><b>Endereço:</b></span>
              <span>{{ endereco }}</span>
            </div>
          </div>
        </Card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Card from "@/components/cards/Card";
import axios from "axios";
import { format } from "date-fns";

const queryData = (params) => {
  return axios.get("https://randomuser.me/api?nat=br", { params: params });
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
      usuarioSelecionado: null,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
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
    customRow(record) {
      return {
        on: {
          click: () => {
            const { cell, name, picture, registered, location } = record;

            this.usuarioSelecionado = {
              nome: name,
              telefone: cell,
              dataCadastro: registered.date,
              endereco: location,
              avatar: picture.large,
            };
          },
        },
      };
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
  computed: {
    nomeCompleto: function() {
      return `${this.usuarioSelecionado.nome.first} ${this.usuarioSelecionado.nome.last}`;
    },

    endereco: function() {
      return `${this.usuarioSelecionado.endereco.street.name}, ${this.usuarioSelecionado.endereco.street.number} - ${this.usuarioSelecionado.endereco.city}`;
    },
  },
};
</script>
<style scoped>
.ant-card >>> .ant-table-row {
  cursor: pointer;
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
