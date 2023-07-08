<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from "./components/Header.vue"
</script>

<template>
 <HeaderView />
    <div class=" h-1000 w-1/2 mx-auto my-0 ">
        <RouterView />
    </div>
</template>

<style>

</style>
