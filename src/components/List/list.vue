<template>
  <div>
      <list-input @addItem="addItem"></list-input>
      <ul >
        <li v-for="element in items">{{element}}</li>
      </ul>
  </div>
</template>

<script>
  import ListInput from "@/components/List/listInput.vue"
    export default {
        name: "ItemsList",
      components:{
        "list-input": ListInput
      },
      data: function () {
        return{
          items:[
            "a",
            "b"
          ]
        }
      },
      methods:{
          addItem(value){
            console.log(value);
            this.items.push(value);
            console.log(this.items);
          }
      }
    }
</script>

<style scoped>

</style>
