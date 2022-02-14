<template>
    <div class="img-container">
      <img :src="img" class="img">
      <like  @click="like" :a="a"/>
  </div>

</template>

<script>
import like from './like.vue'
export default {
    components:{ like },
    props:['img'],
    data(){
        return{
            a:0,
        }
    
    },
     methods:{
        like(){
            this.a ++;
        }
    }

}
</script>

<style>

</style>