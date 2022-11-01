<template>
  <section class="container">
    <p>
      Apresentação visual dos componentes utilizados pelos exercícios 8, 9 e 10
    </p>

    <div>
      <div class="component-container">
        <h3>
          Exerício Exemplo
          <span class="subtitle">(src/exercicios/exercicio-exemplo.vue)</span>
        </h3>

        <ExercicioExemplo />
      </div>

      <div class="component-container">
        <h3>
          Exerício 5
          <span class="subtitle">(src/exercicios/exercicio-5.vue)</span>
        </h3>

        <ExercicioCinco />
      </div>

      <div class="component-container">
        <h3>
          Exerício 8
          <span class="subtitle">(src/exercicios/exercicio-8.vue)</span>
        </h3>
        <ExercicioOito />
      </div>

      <div class="component-container">
        <h3>
          Exerício 9
          <span class="subtitle">(src/exercicios/exercicio-9.vue)</span>
        </h3>
        <ExercicioNove loading />
      </div>

      <div class="component-container">
        <h3>
          Exerício 10
          <span class="subtitle">(src/exercicios/exercicio-10.vue)</span>
        </h3>
        <ExercicioDez />
      </div>
    </div>
  </section>
</template>

<script>
import ExercicioExemplo from "../exercicios/exercicio-exemplo.vue";
import ExercicioCinco from "../exercicios/exercicio-5.vue";
import ExercicioOito from "../exercicios/exercicio-8.vue";
import ExercicioNove from "../exercicios/exercicio-9.vue";
import ExercicioDez from "../exercicios/exercicio-10.vue";

export default {
  name: "ExercisesView",
  components: {
    ExercicioExemplo,
    ExercicioCinco,
    ExercicioOito,
    ExercicioNove,
    ExercicioDez,
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

.subtitle {
  font-size: 14px;
  color: #777;
}
</style>
