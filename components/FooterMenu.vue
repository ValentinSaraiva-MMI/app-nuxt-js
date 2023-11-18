<template>




<div>

    <h4 v-if="title">
        {{ title }}
    </h4>

    <ul>
        <li v-for="link in links">
{{ link.txt }}
        </li>
    </ul>



<img v-if="hasLogo" src="/image/logo.png" alt="logo site">
<p v-if="description">
{{ description }}
</p>

<nav v-if="Icons">
<MyIcon v-for="icon in Icons" :name="icon"  color="secondary"  />   
</nav>


<Mymail v-if="mail" size="small" />
 
 

</div>



</template>

<style lang="scss">

</style>


<script setup>

defineProps({
    Icons:Array,
    hasLogo:Boolean,
    description:String,
    title:String,
    links:Array,
    mail:Boolean,


})


</script>