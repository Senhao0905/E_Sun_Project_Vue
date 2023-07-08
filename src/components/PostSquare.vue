<script>
export default{
    data() {
        return {
            textValue : null 
        }
    },
}
</script>

<template>
    <div class=" mx-auto mt-2 bg-white rounded-lg w-3/4 h-52">
        <h2>使用者名稱</h2>
        <textarea name="" id="" class=" resize-none block" cols="80" rows="5" placeholder="在想甚麼 ?" v-model="textValue"></textarea>
        <div class=" w-full flex justify-end"> 
            <button type="button" class=" bg-slate-400 text-white text-xl mx-2 mt-2 px-2 rounded-lg hover:scale-105">發布</button>
        </div>
    </div>
</template>

<style>
</style>