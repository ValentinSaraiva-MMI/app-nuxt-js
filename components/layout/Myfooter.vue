<template>

<div> 


<FooterMenu v-for="menu in menus" v-bind="menu"/>





      
    </div>
</template>

<style lang="scss" scoped>
.topnav {
  overflow: hidden;


.header__liste{
    @include h5;
    display: flex;
  
    justify-content: center;
    gap: 5%;
    text-transform: capitalize;
    align-items: center;
    text-transform: none;

    
}





}



.topnav a {
  color: black;
  text-decoration: none;
}

.topnav img {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav .search-container {
  float: right;
}

.topnav input[type="text"] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.topnav .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .search-container button:hover {
  background: #ccc;
}

@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a,
  .topnav input[type="text"],
  .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type="text"] {
    border: 1px solid #ccc;
  }
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
