<template>
  <div class="bg">
    <button class="button" @click="onClickVoltar">Anterior</button>

    <h1>Página atual: {{ numeroPaginaAtual }}</h1>

    <button class="button" @click="onClickAvancar">Próxima</button>
  </div>
</template>

<script>
export default {
  name: "ExercicioOito",
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
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
}

.button {
  background-color: white;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 32px;
}
</style>
