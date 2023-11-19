<template>
 

<div class="avis__section">

    <div class="avis__section__card">
        <div class="avis__section__card__profil">
    <PrismicImage class="avis__section__card__profil__picture" :field="photoProfil"/>
<div class="avis__section__card__comm" >
   <PrismicText class="prenom"  :field="prenom"/>
     <PrismicRichText class="job" :field="job"/>
</div>

        </div>

         <PrismicRichText  class="avis__section__card__commentaire" :field="commentaire"/>
<MyIcon name="fleche" color="primary"  direction="reverse"  class="avis__section__card__icon1"/>
<MyIcon name="fleche" color="primary"  class="avis__section__card__icon2"/>

    </div>

 
  <PrismicImage class="avis__section__img" :field="imageavis"/>

</div>
</template>

<style lang="scss"> 


.prenom {
 font-weight: $font_weight-semibold;
 text-align: left;
}


.job {
   font-size: $small-font-size;
  text-align:left;
  margin-top: 2px;

}


.avis__section {
   display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 46px;
    margin:  57px 180px;



&__card {
 flex: none;
 display: grid;
 place-items: center;
 gap: 45px;
 width: 45%;
 padding: 100px 50px;
text-align: center;
box-shadow: 0px 0px 30px 0px rgba($gray, 30%);
border-radius: 35px;
position: relative;



&__profil {
    display: flex;
    align-items: center;
    gap: 17px;
    margin: auto;
    width: fit-content;
   

&__picture {
    width: 76px;
    border-radius: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
}

&__comm {
    display: block;



 
}


 


}

&__icon1 {
    position: absolute;
    top: 50%;
    left: -21px;
}



&__icon2 {
    position: absolute;
    top: 50%;
    right: -21px;
}


}   

&__img{
    width: 45%;
}


}


</style>


<script setup>

const props = defineProps ({
    prenom:String,
    job:String,
    commentaire:String,
    imageavis:String,
    photoProfil:String,


})


</script>