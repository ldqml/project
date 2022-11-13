<template>
  <div class="bg">
    <h1>学校信息</h1>
    <h3>学校名称:{{name}}</h3>
    <h3>学校地址:{{address}}</h3>
    <button @click="ShowName">点我提示学校名称</button>
  </div>
</template>

<script>
export default Vue.extend({
    name:'SchoolName',
    data(){
        return{
            name:'九江职业技术学院',
            address:'九江濂溪区'
        }
    },
    methods: {
        ShowName(){
            alert(this.name)
        }
    },
})
</script>

<style>
.bg{
    background-color: aqua;
}
</style>