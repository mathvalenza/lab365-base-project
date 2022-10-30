<template>
  <div class="bg">
    <button @click="$emit('button-clicked', 'save')" :disabled="loading">
      {{ loading ? "Carregando..." : "Salvar" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ExercicioNove",
  props: {
    loading: {
      type: Boolean,
      default: false,
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
