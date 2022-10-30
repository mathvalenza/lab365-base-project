<template>
  <section class="container">
    <p>
      Apresentação visual dos componentes utilizados pelos exercícios 7, 8, 9 e
      10
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
    </div>
  </section>
</template>

<script>
import ExercicioExemplo from "../exercicios/exercicio-exemplo.vue";
import ExercicioOito from "../exercicios/exercicio-oito.vue";

export default {
  name: "ExercisesView",
  components: {
    ExercicioExemplo,
    ExercicioOito,
  },
  props: {
    msg: String,
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
