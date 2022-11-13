<template>
  <div>
    <h1>学生信息</h1>
    <h3>学生名称:{{name}}</h3>
    <h3>年龄:{{age}}</h3>
  </div>
</template>

<script>
export default {
    name:'student',
    data(){
        return{
            name:'战三',
            age:'28'
        }
    }
}
</script>

<style>
</style>