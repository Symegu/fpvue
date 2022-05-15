<template>
  <div id="app">
    <header>
        <a href="#dashboard">Dashboard</a> /
        <a href="#about">about</a> /
        <a href="#notfound">notfound</a>
    </header>
    <main>
      <HomeView v-if="page=== 'dashboard'" />
      <AboutView v-if="page=== 'about'" />
      <NotFound v-if="page=== 'notfound'" />
    </main>
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import NotFound from './views/NotFound.vue'

export default {
  name: 'App',
  components: { HomeView, AboutView, NotFound },
  data () {
    return {
      page: ''
    }
  },
  methods: {
    setPage () {
      this.page = location.hash.slice(1)
    }
  },
  mounted () {
    this.setPage()
    window.addEventListener('hashchange', () => {
      this.setPage()
    })
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1{
  font-size: 50px;
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
