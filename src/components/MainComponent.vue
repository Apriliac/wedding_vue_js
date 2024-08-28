<template >
<div style="overflow: hidden;" id="section1">
   <div class="container-banner" >
      <img class="image-decoration absolute-top-right elementToFadeIn" src="../assets/img/theme1/cover-floral-kanan.png"/>
      <img class="image-decoration absolute-bottom-left elementToFadeIn" src="../assets/img/theme1/cover-floral-kiri.png"/>
      <div class="absolute-container">
         <div class="text-small-rem mb-m">Undangan Pernikahan</div>
         <div class="custom-text-container mb-m">
            <div class="text-background absolute ff-sacramento">&</div>
            <div class="text-medium-rem bold ff-sacramento">Ilham</div>
            <div class="text-medium-rem bold ff-sacramento">Linda</div>
         </div>
         <div class="text-small mb-s ff-playfair">Yth Bapak/Ibu/Saudara/i</div>
         <div class="text-medium mb-s ">Alexander Gracetantiono</div>
         <div class="text-medium mb-s ">Anda diundang dengan hormat ke pernikahan kami</div>
         <a href="/src/components" target="_blank">
         <button class="outline-button text-medium mt-1">Buka Undangan</button>
         </a>
         <!-- <a href="" 
               target="_blank" 
               class="outline-button text-medium  mt-l">Buka Undangan</a> -->
</div>
   </div>
</div>
</template>

<script setup>
</script>

<style scoped>
@import url("../assets/css/general-styling.css");
@import url("../assets/css/general-animation.css");



.scrollable{
   overflow: scroll;
}
.absolute-container{
   position: absolute;
   top: 0;
   left: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100vw;
   height: 100vh;
   flex-direction: column;
}

.outline-button{
   padding: 20px 40px;
   border: 2px solid rgb(252, 210, 102);
   color:rgb(252, 210, 102) ;
}
.outline-button:hover{
   padding: 20px px;
   background-color: rgb(252, 210, 102);
   border: 2px solid rgb(252, 210, 102);
   color:white ;
   font-weight: 600;
}
@media (max-width: 575px) {
.container-people{
   white-space: nowrap;
   width: 100vw;
   height: 1000px;
   background-color: red;
   padding: 0px;
   /* background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/BG2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; */
}
.container-banner{
   white-space: nowrap;
   width: 100vw;
   height: 100vh;
   background-color: rgb(252, 210, 102);
   padding: 0px;
   background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/BG2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.image-banner{
   width: auto;
   height: 100%;
   margin-left: -50%;
   zoom: 300%;
}
.custom-text-container{
   width: 200px;
   height: 150px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
}
.image-decoration{
   width: 45vw;
   height: auto;
}

}

@media (min-width: 576px) {
   .container-banner{
   white-space: nowrap;
   width: 100vw;
   height: 100vh;
   background-color: rgb(252, 210, 102);
   padding: 0px;
   background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/BG2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.image-banner{
   width: auto;
   height: 100%;
   margin-left: -50%;
   zoom: 300%;
}
.custom-text-container{
   width: 200px;
   height: 150px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
}
.image-decoration{
   width: 40vw;
   height: auto;
}
}  

@media (min-width: 768px) {
   .container-banner{
   white-space: nowrap;
   width: 100vw;
   height: 100vh;
   background-color: rgb(252, 210, 102);
   padding: 0px;
   background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/BG2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.image-banner{
   width: auto;
   height: 100%;
   margin-left: -50%;
   zoom: 300%;
}
.custom-text-container{
   width: 200px;
   height: 150px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
}
.image-decoration{
   width: 35vw;
   height: auto;
}
}

@media (min-width: 992px) {
   .container-banner{
   white-space: nowrap;
   width: 100vw;
   height: 100vh;
   background-color: rgb(252, 210, 102);
   padding: 0px;
   background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/BG2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.image-banner{
   width: auto;
   height: 100%;
   margin-left: -50%;
   zoom: 300%;
}
.custom-text-container{
   width: 200px;
   height: 150px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
}
.image-decoration{
   width: 25vw;
   height: auto;
}
}

</style>
