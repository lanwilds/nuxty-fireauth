<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxty-firebase
      </h1>
      <h2 class="subtitle">
       Logged In as {{user.displayName}}
      </h2>
      <div class="links">
        <b-button variant="primary" @click="logout">Sign Out</b-button>

      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Logo
  },
  computed:{
    ...mapGetters({
      user:'auth/user'
    })
  },
  methods:{
    logout(){
      this.$store.dispatch('auth/signOut').then((res)=>{
        this.$router.go('/login')
      })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
