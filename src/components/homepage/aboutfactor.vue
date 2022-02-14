<template>
  <div class="about-factor">

  <div class="card ">
  <div class="card-body">
      <img src="@/assets/img/71.png">
    <h4 class="card-title">{{ titleaboutfactor }}</h4>
    <h5 class="card-text">
        {{ textaboutfactor }}
   </h5>
  </div>
  <div class="card-footer">
     <p>
          <strong> مجله : </strong>
          سلامت روان
      </p>
  </div>
  </div>

  </div>
</template>

<script>
export default {
props:['titleaboutfactor' , 'textaboutfactor']
}
</script>

<style>

</style>