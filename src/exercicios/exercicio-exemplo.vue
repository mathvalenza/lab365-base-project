<template>
  <div class="bg">
    <h1 v-if="usuarioSaiu && nota">
      Volte sempre! Obrigado pela nota {{ nota }}
    </h1>

    <h1 v-else-if="usuarioSaiu && !nota">
      Volte sempre! Quando puder, nos deixe uma avaliação
    </h1>

    <div v-else>
      <h1>Olá, {{ nomeOla }}. Seja bem-vindo(a) ao nosso site!</h1>

      <input
        v-model="nota"
        class="input"
        placeholder="Qual nota você nos dá?"
        type="number"
        min="0"
        max="10"
      />
    </div>

    <button @click="usuarioSaiu = true">Sair</button>
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
      usuarioSaiu: false,
      nota: null,
    };
  },
  computed: {
    nomeOla() {
      return this.nome || "visitante";
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
.input {
  width: 200px;
  margin-bottom: 32px;
}
</style>
