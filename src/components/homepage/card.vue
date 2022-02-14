<template>
    <div class="cus-card">
      <div class="bg-card"></div>
      <div class="txt-card">
          <h5> {{title}}</h5>
          <p> {{text}} </p>
      </div>
  </div>

</template>

<script>
export default {
    props:['title' , 'text']

}
</script>

<style>

</style>