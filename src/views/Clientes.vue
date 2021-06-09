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
          >
            <template slot="picture" slot-scope="picture">
              <a-avatar :src="picture.thumbnail" />
            </template>

            <template slot="name" slot-scope="name">
              {{ name.first }} {{ name.last }}
            </template>
          </a-table>
        </Card>
      </a-col>
      <a-col :md="8">
        <Card>
          <h3>Card</h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          ratione, quos incidunt id architecto, expedita nostrum ullam veritatis
          cum ex amet dolor delectus voluptas, necessitatibus illo fuga
          cupiditate tenetur error?
        </Card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import axios from "axios";

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
    title: "Id",
    dataIndex: "id.value",
    sorter: true,
    width: "15%",
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
    title: "Email",
    dataIndex: "email",
    width: "30%",
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
};
</script>
