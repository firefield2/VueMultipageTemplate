<template>
  <div>
      <input v-model="newValue" @keyup.enter="$emit('addItem',newValue)">
  </div>
</template>

<script>
    export default {
        name: "ListInput",
      data: function(){
          return{
             newValue:""
          }
      }
    }
</script>

<style scoped>

</style>
