<template>
  <div>
    <school></school>
    <student></student>
  </div>
</template>

<script>
import school from './school.vue'
import student from './student'
import Student from './student.vue'
export default {
    name:'app',
    components:{
        school,
        student,
        Student
    }
}
</script>

<style>

</style>