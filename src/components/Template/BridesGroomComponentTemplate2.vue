<script setup>
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

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
    <h2>Bride and Groom</h2>
    <div class="photo-container">
      <div class="text-box align-left border-bottom">
        <h3 class="ff-sacramento text-small-rem  is-shown-small">Ilham Mufti Al-fachri</h3>
        <div class="groom-container">
        </div>
      </div>
    
      <div class="text-box align-right border-top">
        <div class="bride-container">
        </div>
        <h3 class="ff-sacramento text-small-rem  is-shown-small">Syafa'atul Linda Tri Anita</h3>
      </div>
    </div>
    <div class="bottom-container">
      <h3 class="ff-sacramento text-small-rem  is-shown-large">Ilham Mufti Al-fachri</h3>
      <h3 class="ff-sacramento text-small-rem  is-shown-large">Syafa'atul Linda Tri Anita</h3>
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
.align-left{
display: flex;
align-items: center;
}
.align-right{
display: flex;
align-items: center;
justify-content: flex-end;
}
@media (max-width: 575px) {
  .is-shown-small{
    color: black;
  }
  .photo-container{
    flex-direction: column;
   display: flex;
   margin: 20px;
  padding: 20px;
  margin-bottom: 0px;
  }
  .text-box{
   margin: 20px;
  padding: 20px;
  }
  .groom-container{
  width: 60vw;
  height: 90vw;
  border-radius: 10px;
  background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/groom.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
}
.bride-container{
  width: 60vw;
  height: 90vw;
  border-radius: 10px;
  margin-right: 10px;
  background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/bride.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
}
}
@media (min-width: 576px) {
  .is-shown-small{
    color: black;
  }
  .photo-container{
    flex-direction: column;
   display: flex;
   margin: 20px;
  padding: 20px;
  margin-bottom: 0px;
  }
  .groom-container{
    width: 60vw;
  height: 90vw;
  border-radius: 10px;

  background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/groom.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    margin-bottom: 20px;
}

.bride-container{
  width: 60vw;
  height: 90vw;
  border-radius: 10px;
  margin-right: 10px;

  margin-top: 20px;
  background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/bride.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
}
}

@media (min-width: 768px) {
  .is-shown-small{
    color: black;
    font-size: 2.5rem;
  }
  .groom-container{
    width: 60vw;
  height: 90vw;
  border-radius: 10px;

  background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/groom.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
}
.bride-container{
  width: 60vw;
  height: 90vw;
  border-radius: 10px;
  margin-right: 10px;

  background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/bride.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
}
}
@media (min-width: 992px) {
  .is-shown-small{
display: none;
  }
  .photo-container{
    flex-direction: row;
   display: flex;
   margin: 20px;
  padding: 20px;
  margin-bottom: 0px;
  justify-content: center;
  align-items: center;
  }
  .groom-container{
    width: 20vw;
    border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin: 0px;
  background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/groom.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
}
.bride-container{
  width: 20vw;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 0px;
  background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/bride.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
}
.bottom-container{
  width: 100%;
  height: 30vh;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.is-shown-large{
  font-size: 3rem;
  color: black;
}
}
.decoration-image{
  width: 50vw;
  height: auto;
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
section .text-container{
  flex-direction: column;
   display: flex;
}
@media (max-width: 900px){
  section h1{
    font-size: 2rem;
    text-align: center;
  }
  section .text-container{
    flex-direction: column;
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
