<!--
 * @Description: 
-->
<template>
    <div class="container">
        <div class="left">
            左
        </div>
        <div class="center">
            中
        </div>
        <div class="right">
            右
        </div>
    </div>
    
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'Layout'
})
</script>

<style>
      * {
      margin: 0;
      padding: 0;
    }
.container{
    display: flex;
    height: 100%;
    text-align: center;
}
.left, .center, .right{
    border: 1px solid black;
}
.left {
    width: 200px;
    height: 100%;
}

.right {
    width: 220px;
    height: 100%;
}

.center {
    width: 100%;
    height: 100%;
}
</style>