<script>
import { mapStores, mapActions, mapState } from "pinia";
import indexStore from "../stores/indexStore.js";
export default{
    data() {
        return {
            isLogin : !!sessionStorage.getItem("isLogin")
        }
    },
    methods:{
        logout(){
            sessionStorage.setItem("isLogin","")
            this.isLogin = !this.isLogin;
            this.$router.push({
                name :'Login'
            })
        }
    },
    mounted(){
        console.log(this.isLogin)
    }
}
</script>


<template>
    <header class=" bg-slate-400 h-28 w-full flex items-center justify-between">
        <div class=" w-96 h-28">
            <img class=" w-full h-full rounded-xl" src="../../pic//玉山銀行－logo.jpg" alt="">
        </div>
        <RouterLink v-if="!isLogin" class="link text-3xl mx-5 hover:text-white" to="/">登入</RouterLink>
        <h2 v-else class="link text-3xl mx-5 hover:text-white" @click="logout">登出</h2>

    </header>
</template>

<style></style>