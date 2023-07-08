<script>
export default {
    data() {
        return {
            phone: null,
            pwd: null,
            email: null,
            name: null,
            isActive: false,
            phoneCheck: false,
            pwdCheck: false,
            emailCheck: false,
            nameCheck: false
        }
    },
    methods: {
        register() {
            this.phoneCheck = false;
            this.pwdCheck = false;
            this.emailCheck = false;
            this.nameCheck = false;

            if (this.pwd == null || this.pwd === "") {
                this.pwdCheck = true
            }

            if (this.pwd == null || this.pwd === "") {
                this.pwdCheck = true
            }

            if (this.email == null || this.email === "") {
                this.emailCheck = true
            }

            if (this.name == null || this.name === "") {
                this.nameCheck = true
            }

            if (this.nameCheck || this.phoneCheck || this.pwdCheck || this.emailCheck) {
                alert("尚有資訊未填寫");
                return;
            }

            let body = {
                userId: this.phone,
                userPwd: this.pwd,
                userEmail: this.email,
                userName: this.name
            }

            console.log(body);

            fetch("http://localhost:8080/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.message ==="User id was exists "){
                    alert("帳號已存在");
                    this.phoneCheck = true;
                    return;
                }
                if(data.message !== "Successful !"){
                    alert("個人資料有誤");
                    return;

                }

                alert("註冊成功 前往登入 !");
                this.$router.push({
                    name : "Login"
                })
            })
        },
        back() {
            this.$router.back();
        }

    }
}
</script>

<template>
    <div class=" flex justify-center items-center h-full ">
        <div class=" bg-slate-500 w-2/3 h-1/2  rounded-md  flex flex-col justify-between items-center">
            <h1 class=" text-3xl text-white mt-8">註冊</h1>
            <div>
                <div class="flex flex-col justify-center items-center ">
                    <div class=" w-full">
                        <label class=" text-white text-2xl" for="floatingInput">Phone Number</label>
                    </div>
                    <div class=" relative">
                        <i class="fa-solid fa-square-phone text-3xl absolute top-0 left-1"></i>
                        <input :class="{ error: phoneCheck }" class=" text-xl px-12 py-1 rounded-lg" type="email"
                            id="floatingInput" placeholder="0912345678" v-model="phone">
                    </div>

                </div>
                <div class="flex flex-col justify-center items-center">
                    <div class=" w-full">
                        <label class="  text-white text-2xl" for="floatingPassword">Password</label>
                    </div>
                    <div class=" relative">
                        <i class="fa-solid text-3xl fa-lock absolute top-0 left-1"></i>
                        <input :class="{ error: pwdCheck }" v-bind:type="isActive ? 'text' : 'password'"
                            class="text-xl px-12 py-1 rounded-lg" id="floatingPassword" placeholder="Password"
                            v-model="pwd">
                        <i class=" text-xl absolute top-1 right-4 cursor-pointer"
                            v-bind:class="isActive ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'"
                            @click="isActive = !isActive"></i>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <div class=" w-full">
                        <label class="  text-white text-2xl" for="floatingEmail">Email</label>
                    </div>
                    <div class=" relative">
                        <i class="fa-regular fa-envelope absolute top-0 left-1 text-3xl"></i>
                        <input :class="{ error: emailCheck }" type="text" class="text-xl px-12 py-1 rounded-lg"
                            id="floatingEmail" placeholder="xxxx@xxxx" v-model="email">
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center mb-2">
                    <div class=" w-full">
                        <label class="  text-white text-2xl" for="floatingName">Name</label>
                    </div>
                    <div class=" relative">
                        <i class="fa-solid fa-signature absolute top-0 left-1 text-3xl"></i>
                        <input :class="{ error: nameCheck }" class="text-xl px-12 py-1 rounded-lg" type="text"
                            id="floatingName" placeholder="name" v-model="name">
                    </div>
                </div>
            </div>
            <div>
                <button class="mb-5 bg-slate-100 px-3 text-xl mr-5 duration-75 hover:scale-105  rounded-lg" type="button"
                    @click="back">返回登入</button>
                <button class="mb-5 bg-slate-100 px-3 text-xl mr-5 duration-75 hover:scale-105  rounded-lg" type="button"
                    @click="register">註冊</button>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.error {
    border: red solid 2px;
}
</style>