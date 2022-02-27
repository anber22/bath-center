<!-- // App.vue -->
<template>
    <div>
        <Layout />
    </div>
</template>
<script>
import Layout from '../src/layout/layout.vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: {
        Layout
    },
    setup() {
        const name = ref('txm')
        return {
            name,
            showLogin(){
                console.log("点击跳转登录")
                this.$router.push('/login')
            }
        }
    },
   
})
</script>