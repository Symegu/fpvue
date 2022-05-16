<template>
  <div id="app">
    <header>
    <!-- <a href="dashboard">Dashboard</a> /
         <a href="about">about</a> /
         <a href="notfound">notfound</a> -->
      <nav>
        <router-link :to="{name: 'Home', params: {page:'1'}}">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/notfound">NotFound</router-link>
      </nav>
    </header>
    <main>
      <!-- <HomeView v-if="page=== 'dashboard'" />
      <AboutView v-if="page=== 'about'" />
      <NotFound v-if="page=== 'notfound'" /> -->
      <router-view/>
    </main>
  </div>
</template>

<script>
// import HomeView from './views/HomeView.vue'
// import AboutView from './views/AboutView.vue'
// import NotFound from './views/NotFound.vue'

export default {
  name: 'App',
  // components: { HomeView, AboutView, NotFound },
  data () {
    return {
      page: ''
    }
  },
  methods: {
    setPage () {
      this.page = location.pathname.slice(1)
    }
  },
  mounted () {
    this.setPage()
    const links = this.$el.querySelectorAll('a')
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault()
        history.pushState({}, '', link.href)
        this.setPage()
      })
    })
    window.addEventListener('popstate', () => {
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
