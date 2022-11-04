<template>
  <div>
    <h2 v-if="error" class="error">Ops, algo deu errado ao chamar a API</h2>

    <h2 v-else-if="isLoading">
      Carregando dados da api...
      <div class="loading" />
    </h2>

    <section v-else>
      <ul class="items-list">
        <li v-for="item in items" :key="item.id">
          <a :href="`example-api/${item.id}`" class="link">{{ item.name }}</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import api from "../api";

export default {
  name: "ExampleApiVuex",
  data() {
    return {
      isLoading: true,
      error: false,
      items: [],
    };
  },
  async mounted() {
    try {
      const response = await api.get("/items");

      this.items = response.data;
    } catch {
      this.error = true;
    }

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.error {
  color: red;
}

.loading {
  background: green;
  width: 60px;
  height: 60px;
  margin: 32px auto;
  border-radius: 4px;
  /* Here we declare our inline animation */
  animation: rotate 3s linear infinite;
}

/* Here we define our animation with the name "rotate" */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}

.items-list {
  list-style: none;

  li {
    margin-top: 32px;
    font-size: 22px;
  }
}

.link {
  color: blue;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
}
</style>
