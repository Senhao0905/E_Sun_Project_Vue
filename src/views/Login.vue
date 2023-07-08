<script>
import { mapStores, mapActions, mapState } from "pinia";
import indexStore from "../stores/indexStore.js";
export default {
    data() {
        return {
            isActive: false,
            phone: null,
            pwd: null,
            phoneCheck : false , 
            pwdCheck : false 
        }
    },
    computed:{
        ...mapState(indexStore,["isLogin"])
    },
    methods: {
        ...mapActions(indexStore,["updateIsLogin"]),
        login() {
            
            this.phoneCheck = false ;
            this.pwdCheck = false;
            if(this.phone === null || this.phone == ""){
                this.phoneCheck = true ;
            }

            if(this.pwd === "" || this.pwd == null){
                this.pwdCheck = true ;
            }

            if(this.pwdCheck || this.phoneCheck){
                alert("帳號或密碼必填")
                return;
            }
            let body = {
                userId: this.phone,
                userPwd: this.pwd
            }
            fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
                credentials: "include"
            })
            .then(res => res.json())
            .then(data => {
                
                if(data.message !== "Successful !"){
                    alert("帳號或密碼錯誤");
                    this.pwd = "";
                }
                else{
                    sessionStorage.setItem("isLogin",true)          
                    location.href = "/home"
                }
                
            })

        },
        register(){
            this.$router.push({
                name :'register'
            })
        }
    }
}
</script>

<template>
    <div class=" flex justify-center items-center h-full ">
        <div class=" bg-slate-500 w-2/3 h-1/2  rounded-md  flex flex-col justify-between items-center">
            <h1 class=" text-3xl text-white mt-12">登入</h1>
            <div>
                <div class="flex flex-col justify-center items-center ">
                    <div class=" w-full">
                        <label class=" text-white text-2xl" for="floatingInput">Phone Number</label>
                    </div>
                    <div class=" relative">
                        <i class="fa-solid fa-square-phone text-3xl absolute top-0 left-1"></i>
                        <input :class="{error : phoneCheck}" class=" text-xl px-12 py-1 rounded-lg" type="email" id="floatingInput"
                            placeholder="0912345678" v-model="phone">
                    </div>

                </div>
                <div class="flex flex-col justify-center items-center">
                    <div class=" w-full">
                        <label class="  text-white text-2xl" for="floatingPassword">Password</label>
                    </div>
                    <div class=" relative">
                        <i class="fa-solid text-3xl fa-lock absolute top-0 left-1"></i>
                        <input :class="{error : pwdCheck}" v-bind:type="isActive ? 'text' : 'password'" class="text-xl px-12 py-1 rounded-lg"
                            id="floatingPassword" placeholder="Password" v-model="pwd">
                        <i class=" text-xl absolute top-1 right-4 cursor-pointer"
                            v-bind:class="isActive ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'"
                            @click="isActive = !isActive"></i>
                    </div>
                </div>
            </div>

            <div class=" w-full flex justify-between items-center ">
                <button class=" mb-2 bg-slate-100 px-3 text-xl ml-5 duration-75 hover:scale-105  rounded-lg" type="button"
                    @click="login">登入</button>
                <button class="mb-2 bg-slate-100 px-3 text-xl mr-5 duration-75 hover:scale-105  rounded-lg"
                    type="button" @click="register">註冊</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .error{
        border: red solid 2px;
    }
</style>