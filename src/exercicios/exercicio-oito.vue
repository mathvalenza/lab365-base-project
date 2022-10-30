<template>
  <div class="bg">
    <button @click="onClickVoltar">Voltar</button>

    <h1>Página atual: {{ numeroPaginaAtual }}</h1>

    <button @click="onClickAvancar">Avançar</button>
  </div>
</template>

<script>
export default {
  name: "ExercicioExemplo",
  props: {
    nome: String,
  },
  data() {
    return {
      numeroPaginaAtual: 1,
    };
  },
  methods: {
    onClickVoltar() {
      if (this.numeroPaginaAtual > 1) {
        this.numeroPaginaAtual = this.numeroPaginaAtual - 1;
      }
    },
    onClickAvancar() {
      this.numeroPaginaAtual = this.numeroPaginaAtual + 1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bg {
  background-color: #eee;
  padding: 64px 32px;
}
</style>
