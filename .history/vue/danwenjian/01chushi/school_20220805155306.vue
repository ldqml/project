<template>
  <div id="bg">
    <h1>学校信息</h1>
    <h3>学校名称:{{name}}</h3>
    <h3>学校地址:{{adress}}</h3>
  </div>
</template>

<script>
export default Vue.extend({
    name:'school',
    data:{
        
    }
})
</script>

<style>
.bg{
    background-color: aqua;
}
</style>