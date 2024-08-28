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
    <div class="text-container">
      <div class="text-box align-left border-bottom">
        <div class="groom-container">
        </div>
        <h3>Ilham Mufti Al-fachri</h3>
      </div>
      <div>
          <img class="decoration-image" src="../assets/img/theme1/floral-quotes.png"/>
      </div>
      <div class="text-box align-right border-top">
        <h3>Syafa'atul Linda Tri Anita</h3>
        <div class="bride-container">
        </div>
      </div>
      <div class="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eius molestiae perferendis eos provident vitae iste.
        </p>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
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
.groom-container{
  width: 20vw;
  height: 20vw;
  border-radius: 20vw;

  background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/groom.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
}
.bride-container{
  width: 20vw;
  height: 20vw;
  border-radius: 20vw;

  background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
   url('../assets/img/wedding/bride.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
}
.bridengroom-image{
  width: 20vw;
  height: auto;
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
  color: wheat;
  border-bottom: white solid 1px;
  }
section:nth-child(2){
  color: #42455a;
  background: wheat;
} 
section:nth-child(3){
  color: wheat;
}
section:nth-child(4){
  color: #42455a;
  background: wheat;
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
section .text-container .text-box{
  margin: 20px;
  padding: 20px;
  margin-bottom: 0px;
  /* border-bottom: white solid 1px; */
}
section .text-container .text-box h3{
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
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
