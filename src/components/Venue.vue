<script>

export default {
    data() {
      return {
        countDownDate: new Date("Feb 24 , 2024 09:00:25").getTime(),
        countdownInterval: null,
        countdown: ''
      };
    },
    mounted() {
      // Update the count down every 1 second
      this.countdownInterval = setInterval(() => {
        // Get today's date and time
        const now = new Date().getTime();
          
        // Find the distance between now and the count down date
        const distance = this.countDownDate - now;
          
        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
        // Format the countdown
        this.countdown = `${days}d \t ${hours}h ${minutes}m ${seconds}s`;
  
        // If the count down is over, clear the interval and display "EXPIRED"
        if (distance < 0) {
          clearInterval(this.countdownInterval);
          this.countdown = "EXPIRED";
        }
      }, 1000);
    },
    beforeDestroy() {
      // Clear the interval when the component is destroyed
      clearInterval(this.countdownInterval);
    }
  };
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
  <div class="background">
    <section>
      <div class="container reveal">
        <img class="decoration-image" src="../assets/img/theme1/floral-quotes.png"/>
        <h3>Acara pernikahan</h3>
        <b id="demo" class="countdown-text">{{ countdown }}</b>
        <div class="sample">

        <!-- <div style="margin: 20px; background-color: red;">
        </div> -->
        <!-- <div style="margin: 20px; display: flex; background-color: red;">
          Tahun
        </div> -->
        
        <div class="text-container">
          <div class="text-box align-center">
            <h4> Saturday, 24 February 2024</h4>
            <div class="text-box align-center border-top"></div>
            <h5>Akad Nikah</h5>
            <h1>09.00-10.00</h1>
            <h2> <br> Resepsi</h2>
            <h1> <br>11.00-13.00</h1>
            <div class="align-center border-top"></div>
            <h6> Tempat <br> Kediaman Mempelai Putri</h6>
            <p> Alamat : Jl. Jangli Tlawah 11 No 19 Rt.02/09 Jatingaleh, Semarang</p> 
          </div>
          <div class="text-box">
            <a href="https://maps.app.goo.gl/rEmr8UhaiyN19haP9" 
              variant="outline-secondary" target="_blank"
              class="outline-button mt-1"
              >Buka Peta</a>
          </div>
        </div>
      </div>
    </div>
    <div href="index.html"
         src="countdown/simplyCountdown.min.js"
         rel="stylesheet"
         class="simply-countdown"></div>
    </section>
  </div>
</template>



  <style scoped>

  .border-bottom{
    border-bottom: rgb(102, 4, 4) solid 1px;
    justify-self: center;
  }
  .border-top{
    border-top: rgb(102, 4, 4) solid 1px;
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

  .outline-button{
    padding: 15px 25px;
    border: 2px solid black;
    font-size: 1.5rem;
    color: black;
    margin-left: 1px;
    outline: 10;
    outline-color: black;
  }

  .outline-button:hover{
    padding: auto;
    border: 2px solid darkgoldenrod;
    font-weight: 300;
    color: darkgoldenrod;
    background-color:0;
  }

  section .text-container{
    flex-direction: column;
     display: flex;
     margin-left: 40px;
  }
  section .text-container .text-box{
    margin: 20px;
    padding: 20px;
    margin-bottom: 0px;
    /* border-bottom: white solid 1px; */
  }
  
  .sample{
    display: flex;
    flex-direction: row;
    border-radius: 20%;
    background-color: white;
    width: 50vw;
    height: 165vh;
    justify-content: space-between; 
    align-items: center;
    margin-left: 50px;
    border: 3px solid wheat;
    margin-top: 100px;
    /* style="display: flex; flex-direction: left;  border-radius: 20%; 
             background-color:white ; width: 50vw; height: 135vh; 
             justify-content: space-between; align-items: left;
             border: 3px solid wheat;" */
  }
  .background{
      min-height: 300vh;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background-color: rgb(252, 210, 102);
      padding: 0px;
      background-image: linear-gradient(180deg, rgba(2, 0, 36, 0) 0%, rgba(51, 51, 51, 0) 0%),
      url('../assets/img/theme1/weddingbg1.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }


  section h3{
    font-size: 6rem;
    text-align: center;
    /* text-transform: uppercase; */
    margin-bottom: 50px;
    font-family: 'sacramento', cursive;
    color: black;
    font-weight: bold;
    left: 100px;
  }
  
  section .text-container .text-box h4{
    font-size: 2rem;
    text-align: center;
    margin-bottom: 10px;
    margin-top: -100px;
    margin-left: -15px;
    font-family: 'playfair display', cursive;
    color: black;
  }
  section .text-container .text-box h5{
    font-size: 4rem;
    text-align: center;
    margin-left: 0%;
    right: 0%;
    margin-bottom: -30px;
    margin-top: -10px;
    font-family: 'Sacramento', cursive;
    color: black;

  }

  section .text-container .text-box h2{
    font-size: 4rem;
    text-align: center;
    margin-left: 0%;
    right: 0%;
    margin-bottom: -50px;
    margin-top: -60px;
    font-family: 'Sacramento', cursive;
    color: black;
  }
  section .text-container .text-box h1{
    font-size: 2rem;
    text-align: center;
    margin-left: 0%;
    margin-top: 10px;
    margin-bottom: 30px;
    font-family: 'playfair display', cursive;
    color: black;
  }

  section .text-container .text-box h6{
    font-size: 1.7rem;
    text-align: center;
    margin-left: 0%;
    right: 0%;
    margin-top:  0px;
    margin-bottom: 10px;
    font-family: 'playfair display', cursive;
    color: black;
  } 

  section .text-container .text-box p{
    font-size: 1rem;
    text-align: center;
    margin-bottom: 10px;
    font-family: 'playfair display', cursive;
    color: black;
  }
  section .text-container .text-box a{
    margin-top: 900px;
  }

  .decoration-image{
    width:55vw;
    height: auto;
    margin-bottom: 50px;
    align-items: center;
  }

  .countdown-text {
    font-family: sans-serif;
    font-size: 2.5rem;
    margin-left: 150px;
    text-align: center;
    font-family: 'worksans';
    color: black;
    font-weight: lighter;
    border-color: wheat;
    border-radius: 5%;
    padding: 20px;
    border: solid;
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
  

  @media (max-width: 575px){
   
  .sample{
    display: flex;
    flex-direction: row;
    border-radius: 20%;
    background-color: white;
    width: 90vw;
    height: 100vh;
    justify-content: space-between; 
    align-items: center;
    margin-left: -10px;
    border: 3px solid wheat;
    margin-top: 100px;
    /* style="display: flex; flex-direction: left;  border-radius: 20%; 
             background-color:white ; width: 50vw; height: 135vh; 
             justify-content: space-between; align-items: left;
             border: 3px solid wheat;" */
  }
  .background{
      min-height: 300vh;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background-color: rgb(252, 210, 102);
      padding: 0px;
      background-image: linear-gradient(180deg, rgba(2, 0, 36, 0) 0%, rgba(51, 51, 51, 0) 0%),
      url('../assets/img/theme1/weddingbg1.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

/* Acara pernikahan */
  section h3{
    font-size: 3rem;
    text-align: center;
    /* text-transform: uppercase; */
    margin-bottom: 50px;
    font-family: 'sacramento', cursive;
    color: black;
    font-weight: bold;
    left: 100px;
  }
  
  /* saturday */
  section .text-container .text-box h4{
    font-size: 2rem;
    text-align: center;
    margin-bottom: -500px;
    margin-top: --100px;
    margin-left: -15px;
    font-family: 'playfair display', cursive;
    color: black;
  }
  /*Akad nikah */
  section .text-container .text-box h5{
    font-size: 3rem;
    text-align: center;
    margin-left: 0%;
    right: 0%;
    margin-bottom: -3000px;
    font-family: 'Sacramento', cursive;
    color: black;

  }

  section .text-container .text-box h2{
    font-size: 4rem;
    text-align: center;
    margin-left: 0%;
    right: 0%;
    margin-bottom: -50px;
    margin-top: -60px;
    font-family: 'Sacramento', cursive;
    color: black;
  }
  section .text-container .text-box h1{
    font-size: 2rem;
    text-align: center;
    margin-left: 0%;
    margin-top: 10px;
    margin-bottom: 30px;
    font-family: 'playfair display', cursive;
    color: black;
  }

  section .text-container .text-box h9{
    font-size: 1.7rem;
    text-align: center;
    margin-left: 0%;
    right: 0%;
    margin-bottom: 100px;
    margin-top: 30px;
    font-family: 'playfair display', cursive;
    color: black;
  }

  section .text-container .text-box h6{
    font-size: 1.7rem;
    text-align: center;
    margin-left: 0%;
    right: 0%;
    margin-top:  0px;
    margin-bottom: 10px;
    font-family: 'playfair display', cursive;
    color: black;
  } 

  section .text-container .text-box p{
    font-size: 1rem;
    text-align: center;
    margin-bottom: 10px;
    font-family: 'playfair display', cursive;
    color: black;
  }
  section .text-container .text-box a{
    margin-top: 900px;
  }

  .decoration-image{
    width:55vw;
    height: auto;
    margin-bottom: 50px;
    align-items: center;
  }

  .countdown-text {
    font-family: sans-serif;
    font-size: 2.5rem;
    margin-left: 150px;
    text-align: center;
    font-family: 'worksans';
    color: black;
    font-weight: lighter;
    border-color: wheat;
    border-radius: 5%;
    padding: 20px;
    border: solid;
  }
  }
  @media (min-width: 575px){
  }

  @media (min-width: 992px){
  }
  </style>
  