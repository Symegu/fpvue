<template>
  <div id="app">
    <header>
      <nav>
        <router-link :to="{name: 'Home', params: {page:'1'}}">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/notfound">NotFound</router-link>
      </nav>
    </header>
    <main>
      <router-view/>
      <ModalWindowAddPaymentForm :settings="settings" v-if="modalShow"/>
    </main>
  </div>
</template>

<script>
import ModalWindowAddPaymentForm from './components/ModalWindowAddPaymentForm.vue'
// import HomeView from './views/HomeView.vue'
// import AboutView from './views/AboutView.vue'
// import NotFound from './views/NotFound.vue'

export default {
  components: { ModalWindowAddPaymentForm },
  name: 'App',
  // components: { HomeView, AboutView, NotFound },
  data () {
    return {
      page: '',
      modalShow: false,
      settings: {}
    }
  },
  methods: {
    setPage () {
      this.page = location.pathname.slice(1)
    },
    onShow (data) {
      this.modalShow = true
      this.settings = data
      console.log(data)
    },
    onHide () {
      this.settings = {}
      this.modalShow = false
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
    this.$modal.EventBus.$on('show', this.onShow)
    this.$modal.EventBus.$on('hide', this.onHide)
  },
  beforeDestroy () {
    this.$modal.EventBus.$off('show', this.onShow)
    this.$modal.EventBus.$off('hide', this.onHide)
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
