<template>
  <div class="bg">
    <input
      v-model="mediaFinal"
      type="number"
      step="0.5"
      min="0"
      max="10"
      placeholder="Digite sua média final e descubra se você foi aprovado"
    />

    <div class="feedback-container">
      <h1
        v-if="mediaFinal"
        :class="{
          verde: foiAprovado,
          amarelo: estaEmExame,
          vermelho: foiReprovado,
        }"
      >
        Média final: {{ mediaFinal }}
      </h1>

      <h3 v-if="foiAprovado">Parabéns! Você foi aprovado</h3>
      <h3 v-else-if="estaEmExame">
        Quase! Você está em exame mas ainda tem chaneces
      </h3>
      <h3 v-else-if="foiReprovado">Poxa, infelizmente você reprovou</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExercicioDez",
  data() {
    return {
      mediaFinal: null,
    };
  },
  computed: {
    foiAprovado() {
      return this.mediaFinal >= 7;
    },
    estaEmExame() {
      return this.mediaFinal >= 5 && this.mediaFinal < 7;
    },
    foiReprovado() {
      return this.mediaFinal && this.mediaFinal < 5;
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

input {
  width: 400px;
}

.verde {
  color: green;
}

.amarelo {
  color: rgb(172, 169, 2);
}

.vermelho {
  color: red;
}
</style>
