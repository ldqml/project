<template>
  <div class="bg">
    <h1>学校信息</h1>
    <h3>学校名称:{{name}}</h3>
    <h3>学校地址:{{adress}}</h3>
    <button @click="ti">点我提示学校名称</button>
  </div>
</template>

<script>
export default Vue.extend({
    name:'school',
    data(){
        return{
            name:'九江职业技术学院',
            adress:'九江濂溪区'
        }
    },
    methods: {
        ti(){
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