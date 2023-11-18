<template>

<div class="footer"> 


<FooterMenu v-for="menu in menus" v-bind="menu"/>





      
    </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  background-color: #FAFAFF;
  padding: 57px 0;
}

</style>

<script setup>
import { useGlobalStore } from "@/stores/global";

const store = useGlobalStore();
console.log(store);


const menus = 
  
[


{
hasLogo: true,
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio sit malesuada in quis. Arcu tristique elementum viverra integer id.",

Icons: [
  "twitter", "facebook", "linkedin", "instagram"
],

},

  {
    title:"Opening Restaurant",
    links: [
      {
       txt: "Sat-Wet: 09:00am-10:00PM"
      },

        {
       txt: "Thursdayt: 09:00am-11:00PM"
      },

           {
       txt: "Friday: 09:00am-8:00PM"
      },


    ]



  },


  {
    title:"User Link",
    links:[
      {
        txt:"About Us", href:"#",
        
      },

      {
        txt:"Contact Us", href:"#",

      },
      {
        txt:"Order Delivery", href:"#",

      },
      {
        txt:"Payment & Tex", href:"#",

      },
      {
        txt:"term of services", href:"#",

      },
    ]
  },


  {
    title:"Contact us",
       links:[
      {
        txt:"1234 Country Club Ave", 
      },
      {
        txt:"NC 123456, London, UK", 
      },
      {
        txt:"+0123 456 7891", 
      },
    ],

    mail:true

  }

]


 


</script>
