<template>
  <home />
      <about :title="titleabout" :text="textabout" />
  <gallery />
  <foter />
</template>

<script>
import { ref } from '@vue/reactivity'
import Gallery from './gallerypage/gallery.vue'
import home from './homepage/home.vue'
import about from './homepage/about.vue'
import foter from '../components/homepage/foter.vue'

export default {
components:{ home, Gallery, about , foter},
setup(){
  const titleabout = ref('گالری تصاویر')
  const textabout =ref('اینجا میتونی لحظه های قشنگتو ثبت کنی:)')
  return { titleabout , textabout }
}
}
</script>

<style>

</style>