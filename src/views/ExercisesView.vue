<template>
  <section class="container">
    <p>
      Apresentação visual dos componentes utilizados pelos exercícios 8, 9 e 10
    </p>

    <div>
      <div class="component-container">
        <h3>Exerício Exemplo</h3>
        <ExercicioExemplo />
      </div>

      <div class="component-container">
        <h3>Exerício 8</h3>
        <ExercicioOito />
      </div>

      <div class="component-container">
        <h3>Exerício 9</h3>
        <ExercicioNove />
      </div>
    </div>
  </section>
</template>

<script>
import ExercicioExemplo from "../exercicios/exercicio-exemplo.vue";
import ExercicioOito from "../exercicios/exercicio-8.vue";
import ExercicioNove from "../exercicios/exercicio-9.vue";

export default {
  name: "ExercisesView",
  components: {
    ExercicioExemplo,
    ExercicioOito,
    ExercicioNove,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p {
  margin-bottom: 64px;
}
.component-container {
  padding: 0 64px 32px;
  border: 1px solid #ccc;
  margin-bottom: 64px;
}
</style>
