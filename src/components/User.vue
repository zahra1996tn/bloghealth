<template>
    <home />
    <about :title="titleabout" :text="textabout" />
     <div class="bg-user">
  <div class="div-input">
    <buttonadd  @click="addtodo" textbtn="افزودن" />
    <textinput  v-model="content" />
    <myapp :removetodo="removetodo" :items="items" />
  </div>
    </div>
    <foter />
</template>

<script>
import home from './homepage/home.vue'
import Buttonadd from './userpage/buttonadd.vue'
import Textinput from './userpage/textinput.vue'
import myapp from './userpage/myapp.vue'
import about from '../components/homepage/about.vue'
import foter from '../components/homepage/foter.vue'
import {ref} from 'vue'
export default {
components :{ home, Buttonadd, Textinput  , myapp , about , foter},
setup(){
  const titleabout = ref('لیست کارهای روزمره')
  const textabout = ref('اینجا میتونی کارهاتو بنویسی :)')

  return { titleabout , textabout }
},
 data(){
    return{
      textin:'',
      content:'',
      text:'کارهاتو اینجا بنویس ...',
      items:[]
    }
  },
  methods:{

    addtodo :function(){
    if(this.content==""){
        console.log('enter value!')
    }
    else {
      console.log(this.content)
    this.items.push(this.content)
    this.content=''
    }
    
},
removetodo : function(index){
    this.items.splice(index,1)
},
add(UserDate){
  this.title=UserDate
}

  }
}
</script>

<style>

       /* @media(min-width:380px){
      .div-input{
        margin:-169px auto !important ;
      }
    }

    @media(min-width:1000px){
      .div-input{
            margin: -409px 551px !important;
      }
    } 
    @media(max-width:1000px){
      img{
        margin: -569px auto !important;
        position: relative;
      }
      .div-input{
        margin: -50px auto !important;
      }
    }
    @media(max-width:500px){
      .div-input{
        margin:-160px auto !important ;
        width:100% ;
        padding: 24px 0;
      }
      img{
        width: 100%;
      }
    }
    @media(max-width:470px){
      .div-input{
        margin:-150px auto !important ;
      }
    }
    @media(max-width:400px){
      .div-input{
        margin:-230px auto !important ;
        padding: 24px 0;
      }

    } */
</style>