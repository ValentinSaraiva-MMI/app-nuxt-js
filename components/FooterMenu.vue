<template>

<div class="footer__menu">

    <h4 class="footer__menu__title" v-if="title">
        {{ title }}
    </h4>

    <ul>
        <li class="footer__menu__link" v-for="link in links">
{{ link.txt }}
        </li>
    </ul>



<img class="footer__menu__logo" v-if="hasLogo" src="/image/logo.png" alt="logo site">
<p class="footer__menu__description" v-if="description">
{{ description }}
</p>

<nav class="footer__menu__icons" v-if="Icons">
<MyIcon v-for="icon in Icons" :name="icon"  color="secondary"  />   
</nav>


<Mymail class="footer__menu__mail" v-if="mail" size="small" />
 
 

</div>



</template>

<style lang="scss">
.footer__menu {

max-width: 380px;

&__mail {
    margin-top: 30px;
}

&__title {
    margin-bottom: 69px;
}

&__description {
    margin: 30px 0 15px 0;
     color: $gray;
  
}

&__link {
    color: $gray;
   margin: 12px 0;

}


&__logo {
    width: 180px;
}

&__icons {
    display: flex;
    gap: 18px;
}

}


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