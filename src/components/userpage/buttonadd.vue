<template>
     <button type="submit" v-on="$Listeners" id="send"> {{textbtn}} </button>
</template>

<script>
export default {
    props:['textbtn']
}
</script>

<style>

</style>