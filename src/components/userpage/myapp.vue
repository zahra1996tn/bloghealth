<template>
    <div class="box-todo">
        <table>
            <tbody>
                <tr v-for='(item,index) in items' :key="item">
                    <counter :index="index"/>
                    <listitem :item="item" />
                    <deletebtn @click="removetodo(index)" />
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
import counter from './counter.vue'
import deletebtn from './deletebtn.vue'
import listitem from './listitem.vue'

export default {
components :{ counter , deletebtn , listitem},
    props:{
        items:Array,
        removetodo:Function,
    },
    data(){
        return{
        }
    }
}
</script>

<style scoped>


</style>