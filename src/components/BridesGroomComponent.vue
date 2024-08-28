<script setup>
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
</script>

<template>
<section>
  <div class="container reveal">
    <h2 style="color: black;">Bride and Groom</h2>
    <div class="bride-groom-container">
      <div class="text-box align-left ">
        <div class="groom-container">
          <div class="groom-container-border">    
            <div class="groom-container-border-2">
            </div>
          </div>
        </div>
        <div class="bride-groom-text-container">
          <h3  class="ff-sacramento text-bride-groom " style="color: black;">Ilham Mufti Al-fachri</h3>
          <h3  class=" text-medium ff-playfair" style="color: black;">Putra dari Alm. Bapak Sujito S.Pd.I dan Ibu Trin Afwah S.Pd</h3>
        </div>
      </div>
      <div class="text-box align-right">
      <div class="bride-groom-text-container">
        <h3 class="ff-sacramento text-bride-groom " style="color: black;">Syafa'atul Linda Tri Anita</h3>
        <h3 class="text-medium ff-playfair" style="color: black;">Putri dari Bapak Slamet Hartanta S.Pd.I dan Alm. Ibu Sri Suwarni</h3>
      </div>
        <div class="bride-container">
          <div class="bride-container-border">
            <div class="bride-container-border-2">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
@import url("../assets/css/general-styling.css");
@import url("../assets/css/general-animation.css");
.border-bottom{
  border-bottom: white solid 1px;
}
.border-top{
  border-top: white solid 1px;
}
section{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
section:nth-child(1){
  color: whitesmoke;
  border-bottom: white solid 1px;
  }
section:nth-child(2){
  color: #42455a;
  background: whitesmoke;
} 
section:nth-child(3){
  color: whitesmoke;
}
section:nth-child(4){
  color: #42455a;
  background: whitesmoke;
}
section .container{
  margin: 100px ;
  /* background-color: #00c2cb; */
}
section h1{
  font-size: 3rem;
  margin: 20px;
}
section h2{
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
}


.bride-groom-text-container{
  flex-direction: column;
   display: flex;
   margin-left: 25px;
   margin-right: 25px;
}

section .text-container .text-box h3{
  text-align: center;
  color: black;
}

@media (max-width: 575px) {
  .bride-groom-container{
   margin: 20px;
  padding: 20px;
  margin-bottom: 0px;
}

.text-bride-groom{
  font-size: 35px;
}
.align-left{
display: flex;
flex-direction: column;
align-items: center;
}
.align-right{
display: flex;
align-items: center;
flex-direction: column-reverse;
justify-content: flex-end;
}

.groom-container-border{
  width: 80vw;
  height: 70vh;
  border:3px black solid;
  rotate: -2deg;
}
.groom-container-border-2{
  width: 80vw;
  height: 70vh;
  border:3px black solid;
  rotate: -6deg;
}
.groom-container{
  width: 80vw;
  height: 70vh;
  border-radius: 10px;

  background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/groom2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    margin-bottom: 70px;
}

.bride-container{
  width: 80vw;
  height: 70vh;
  border-radius: 10px;

  background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/bride2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    margin-bottom: 70px;
    margin-top: 70px;
}
.bride-container-border{
  width: 80vw;
  height: 70vh;
  border:3px black solid;
  rotate: 2deg;
}
.bride-container-border-2{
  width: 80vw;
  height: 70vh;
  border:3px black solid;
  rotate: 6deg;
}
}

@media (min-width: 576px) and (max-width: 768px) {
  .bride-groom-container{
   margin: 20px;
  padding: 20px;
  margin-bottom: 0px;
}

.text-bride-groom{
  font-size: 50px;
}
.align-left{
display: flex;
flex-direction: column;
align-items: center;
}
.align-right{
display: flex;
align-items: center;
flex-direction: column-reverse;
justify-content: flex-end;
}

.groom-container-border{
  width: 60vw;
  height: 70vh;
  border:3px black solid;
  rotate: -2deg;
}
.groom-container-border-2{
  width: 60vw;
  height: 70vh;
  border:3px black solid;
  rotate: -6deg;
}
.groom-container{
  width: 60vw;
  height: 70vh;
  border-radius: 10px;

  background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/groom2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    margin-bottom: 70px;
}

.bride-container{
  width: 60vw;
  height: 70vh;
  border-radius: 10px;

  background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/bride2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    margin-bottom: 70px;
    margin-top: 70px;
}
.bride-container-border{
  width: 60vw;
  height: 70vh;
  border:3px black solid;
  rotate: 2deg;
}
.bride-container-border-2{
  width: 60vw;
  height: 70vh;
  border:3px black solid;
  rotate: 6deg;
}
}

@media (min-width: 768px ) and (max-width: 992px) {

  .bride-groom-container{
   margin: 20px;
  padding: 20px;
  margin-bottom: 0px;
  flex-direction: column;
   display: flex;
}

.text-bride-groom{
  font-size: 50px;
}
.align-left{
display: flex;
flex-direction: column;
align-items: center;
}
.align-right{
display: flex;
align-items: center;
flex-direction: column-reverse;
justify-content: flex-end;
}

.groom-container-border{
  width: 40vw;
  height: 90vh;
  border:3px black solid;
  rotate: -2deg;
}
.groom-container-border-2{
  width: 40vw;
  height: 90vh;
  border:3px black solid;
  rotate: -6deg;
}
.groom-container{
  width: 40vw;
  height: 90vh;
  border-radius: 10px;

  background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/groom2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    margin-bottom: 70px;
}

.bride-container{
  width: 40vw;
  height: 90vh;
  border-radius: 10px;

  background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/bride2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    margin-bottom: 70px;
    margin-top: 70px;
}
.bride-container-border{
  width: 40vw;
  height: 90vh;
  border:3px black solid;
  rotate: 2deg;
}
.bride-container-border-2{
  width: 40vw;
  height: 90vh;
  border:3px black solid;
  rotate: 6deg;
}

}

@media (min-width: 992px) {
  .bride-groom-container{
  flex-direction: column;
   display: flex;
   margin: 20px;
  padding: 20px;
  margin-bottom: 0px;
}
.text-bride-groom{
  font-size: 60px;
}
.align-left{
display: flex;
align-items: center;
}
.align-right{
display: flex;
align-items: center;
justify-content: flex-end;
}

.groom-container-border{
  width: 20vw;
  height: 60vh;
  border:3px black solid;
  rotate: -2deg;
}
.groom-container-border-2{
  width: 20vw;
  height: 60vh;
  border:3px black solid;
  rotate: -6deg;
}
.groom-container{
  width: 20vw;
  height: 60vh;
  border-radius: 10px;

  background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/groom2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
}

.bride-container{
  width: 20vw;
  height: 60vh;
  border-radius: 10px;

  background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/bride2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
}
.bride-container-border{
  width: 20vw;
  height: 60vh;
  border:3px black solid;
  rotate: 2deg;
}
.bride-container-border-2{
  width: 20vw;
  height: 60vh;
  border:3px black solid;
  rotate: 6deg;
}
}
.reveal{
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}

.reveal.active{
  transform: translateY(0);
  opacity: 1;
}
</style>
