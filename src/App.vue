<template>
  <div id="app">
    <nav>
      <router-link to="/">Início</router-link> |
      <router-link to="/about">Sobre</router-link> |
      <router-link to="/exercises">Exercícios</router-link> |
      <router-link to="/examples">Exemplos de sala</router-link> |
      <router-link to="/example-api">Exemplo com API</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
