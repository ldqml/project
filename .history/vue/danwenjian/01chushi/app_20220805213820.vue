<template>
  <div>
    <school-name></school-name>
    <student-name></student-name>
  </div>
</template>

<script>
import SchoolName from './SchoolName.vue'
import StudentName from './StudentName.vue'
export default {
    name:'app',
    components:{
        SchoolName,
        StudentName
    }
}
</script>

<style>

</style>