<template>
  <div>
    <school></school>
    <student></student>
  </div>
</template>

<script>
import school from './school.vue'
import Student from './student.vue'
export default {
    name:'app',
    components:{
        school,
        Student
    }
}
</script>

<style>

</style>