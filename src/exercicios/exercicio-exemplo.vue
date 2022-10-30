<template>
  <div class="bg">
    <h1 v-if="usuarioSaiu">Volte sempre</h1>

    <h1 v-else>Olá, {{ nomeOla }}. Seja bem-vindo(a) ao nosso site!</h1>

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
</style>
