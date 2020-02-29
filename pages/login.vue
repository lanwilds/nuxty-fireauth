<template>
    <div>
        <b-button @click="loginWithGoogle" variant="info">Login with Google</b-button>
    </div>
</template>
<script>
export default {
    methods:{
        loginWithGoogle(){
            this.$store.dispatch('auth/signInWithGoogle')
                .then((res) => {
                   this.$router.go('/')
                    
                },err => {
                    console.log(err)
                })
        }
    }
}
</script>