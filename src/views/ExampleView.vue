<template>
  <div>
    <h1>Digite seus dados:</h1>

    <div class="input-container">
      <input
        data-test-id="input-nome"
        type="text"
        placeholder="Nome"
        v-model="nome"
      />

      <input
        data-test-id="input-sobrenome"
        type="text"
        placeholder="Sobrenome"
        v-model="sobrenome"
      />
    </div>

    <!-- <button @click="onClickGerarBoasVindas">Gerar boas-vindas</button> -->

    <h2>Seja bem-vindo(a), {{ nomeCompletoComputado }}</h2>
  </div>
</template>

<script>
export default {
  name: "ExampleView.vue",
  data() {
    return {
      nome: "",
      sobrenome: "",
      nomeCompleto: "",
    };
  },
  methods: {
    onClickGerarBoasVindas() {
      this.nomeCompleto = `${this.nome} ${this.sobrenome}`;
    },
  },
  computed: {
    nomeCompletoComputado() {
      return `${this.nome} ${this.sobrenome}`;
    },
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 32px;
}
</style>
