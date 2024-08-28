<script>

export default {
    data() {
      return {
        countDownDate: new Date("April 17 , 2024 21:00:25").getTime(),
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
        this.countdown = `${days}d  ${hours}h ${minutes}m ${seconds}s`;
  
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
        <h3 class="ff-sacramento acara-pernikahan">Acara Pernikahan</h3>
        <b class="countdown-text">{{ countdown }}</b>
        <div class="sample ">

        <!-- <div style="margin: 20px; background-color: red;">
        </div> -->
        <!-- <div style="margin: 20px; display: flex; background-color: red;">
          Tahun
        </div> -->
        
        <div class="text-container align-center">
          <div class="text-box align-center">
            <h4 class="ff-playfair display text-1"> Wednesday, 17 April 2024</h4>
            <div class="text-box align-center border-top"></div>
            <h2 class="ff-sacramento text-2">Akad Nikah</h2>
            <h1 class="ff-playfair display text-time">09.00-10.00</h1>
            <h2 class="ff-sacramento text-2"> Resepsi</h2>
            <h1 class="ff-playfair display text-time"> 11.00-13.00</h1>
            <div class="align-center border-top"></div>
            <h6 class="ff-playfair display tempat"> Tempat <br> Kediaman Mempelai Putri</h6>
            <h5 class="ff-playfair display alamat"> Alamat : Gunung Putri, Bojong Kulur, Kec. Gn. Putri, Kabupaten Bogor, Jawa Barat 16969</h5>
            <div style="display: flex; justify-content: center; align-items: center;">
              <a href="https://maps.app.goo.gl/23kWpzfuGRsrqxqB7" 
                 target="_blank"
                 class="ff-playfair display outline-button ">Buka Peta</a>
            </div> 
          </div>
        </div>
      </div>
    </div>
    
    </section>
  </div>
</template>



<style scoped>

@import url("../assets/css/general-styling.css");
@import url("../assets/css/general-animation.css");

.border-bottom{
    border-bottom: rgb(102, 4, 4) solid 1px;
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

  section{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  section .container{
    margin: 100px ;
    justify-content: center;
    align-items: center;
    /* background-color: #00c2cb; */
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

  /* Reveal */
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

  


/* DARI FULLSCREEN KE TAB UDAH OKE */

  /* MEDIA */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  @media (max-width: 575px) {

    .background{
      min-height: 170vh;
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
  
    .decoration-image{
    width:90vw;
    height: auto;
    margin-top: -30px;
    margin-bottom: 20px;
    margin-left: 0px;
  }
    .acara-pernikahan{
      text-align: center;
      font-size: 3.5rem;
      margin-bottom: 50px;
    }

    .countdown-text {
    display: flex;
    width: fit-content;
    font-family: sans-serif;
    font-size: 1.3rem;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    font-family: 'worksans';
    color: black;
    font-weight: lighter;
    border-color: wheat;
    border-radius: 5%;
    padding: 8px 15px;
    border: solid;
  }

    .sample{
    display: flex;
    flex-direction: row;
    border-radius: 20%;
    background-color: white;
    /* width: 90vw;
    height: 80vh; */
    padding: 10px;
    justify-content: center; 
    align-items: center;
    margin-left: 0px;
    border: 3px solid wheat;
    margin-top: 70px;
    /* style="display: flex; flex-direction: left;  border-radius: 20%; 
             background-color:white ; width: 50vw; height: 135vh; 
             justify-content: space-between; align-items: left;
             border: 3px solid wheat;" */
  }

    .text-1{
      text-align: center;
      font-size: 1.4rem;
      margin-top: -30px;
    }

    .text-2{
      text-align: center;
      font-size: 2.3rem;
      margin-top: -20px;
    }
    .text-time{
      text-align: center;
      font-size: 1.3rem;
      margin-bottom: 30px;
    }
    .tempat{
      text-align: center;
      font-size: 0.9rem;
      margin-bottom: 10px;
      margin-top: 30px;
    }
    .alamat{
      text-align: center;
      font-size: 0.6rem;
      margin-bottom: 30px;
    }

    .outline-button{
      width: fit-content;
    padding: 8px 15px;
    border: 2px solid black;
    font-size: 0.8rem;
    color: black;
    outline-color: black;
  }

  .outline-button:hover{
    padding: auto;
    border: 2px solid darkgoldenrod;
    color: darkgoldenrod;
    background-color:0;
  }

  }
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  @media (min-width: 576px) and (max-width: 768px) {

    .background{
      min-height: 170vh;
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
  
  

    .decoration-image{
    width:80vw;
    height: auto;
    margin-top: -30px;
    margin-bottom: 50px;
    margin-left: 0px;
  }
    .acara-pernikahan{
      text-align: center;
      font-size: 4.6rem;
      margin-bottom: 50px;
    }

    .countdown-text {
    display: flex;
    width: fit-content;
    font-family: sans-serif;
    font-size: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    font-family: 'worksans';
    color: black;
    font-weight: lighter;
    border-color: wheat;
    border-radius: 5%;
    padding: 8px 15px;
    border: solid;
  }

    .sample{
    display: flex;
    flex-direction: row;
    border-radius: 20%;
    background-color: white;
    /* width: 80vw;
    height: 125vh; */
    padding: 10px;
    justify-content: center; 
    align-items: center;
    margin-left: 0px;
    border: 3px solid wheat;
    margin-top: 100px;
    /* style="display: flex; flex-direction: left;  border-radius: 20%; 
             background-color:white ; width: 50vw; height: 135vh; 
             justify-content: space-between; align-items: left;
             border: 3px solid wheat;" */
  }

    .text-1{
      text-align: center;
      font-size: 1.7rem;
    }

    .text-2{
      text-align: center;
      font-size: 3rem;
      margin-top: -20px;
    }
    .text-time{
      text-align: center;
      font-size: 1.8rem;
      margin-bottom: 70px;
    }
    .tempat{
      text-align: center;
      font-size: 1rem;
      margin-bottom: 20px;
      margin-top: 10px;
    }
    .alamat{
      text-align: center;
      font-size: 0.8rem;
      margin-bottom: 30px;
    }

    .outline-button{
      width: fit-content;
    padding: 8px 15px;
    border: 2px solid black;
    font-size: 1rem;
    color: black;
    outline-color: black;
  }

  .outline-button:hover{
    padding: auto;
    border: 2px solid darkgoldenrod;
    color: darkgoldenrod;
    background-color:0;
  }

  }
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  @media (min-width: 768px) and (max-width: 992px) {

    .background{
      min-height: 280vh;
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
  
    .decoration-image{
    width:70vw;
    height: auto;
    margin-top: -30px;
    margin-bottom: 50px;
    margin-left: 0px;
  }
    .acara-pernikahan{
      text-align: center;
      font-size: 5.5rem;
      margin-bottom: 50px;
    }

    .countdown-text {
    display: flex;
    width: fit-content;
    font-family: sans-serif;
    font-size: 2rem;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    font-family: 'worksans';
    color: black;
    font-weight: lighter;
    border-color: wheat;
    border-radius: 5%;
    padding: 15px 20px;
    border: solid;
  }

    .sample{
    display: flex;
    flex-direction: row;
    border-radius: 20%;
    background-color: white;
    /* width: 70vw;
    height: 140vh; */
    padding: 10px;
    justify-content: center; 
    align-items: center;
    margin-left: 0px;
    border: 3px solid wheat;
    margin-top: 100px;
    /* style="display: flex; flex-direction: left;  border-radius: 20%; 
             background-color:white ; width: 50vw; height: 135vh; 
             justify-content: space-between; align-items: left;
             border: 3px solid wheat;" */
  }

    .text-1{
      text-align: center;
      font-size: 2rem;
    }

    .text-2{
      text-align: center;
      font-size: 3rem;
      margin-top: 10px;
    }
    .text-time{
      text-align: center;
      font-size: 2rem;
      margin-bottom: 70px;
    }
    .tempat{
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 20px;
      margin-top: 50px;
    }
    .alamat{
      text-align: center;
      font-size: 0.8rem;
      margin-bottom: 30px;
    }

    .outline-button{
      width: fit-content;
    padding: 8px 15px;
    border: 2px solid black;
    font-size: 1.2rem;
    color: black;
    outline-color: black;
  }

  .outline-button:hover{
    padding: auto;
    border: 2px solid darkgoldenrod;
    color: darkgoldenrod;
    background-color:0;
  }

  }
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  /* DONE!!! */
  @media (min-width: 992px) {

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
      margin-bottom: -27.78%;
    }
  

    .decoration-image{
    width:55vw;
    height: auto;
    margin-top: -30px;
    margin-bottom: 50px;
    margin-left: 70px;
  }
    .acara-pernikahan{
      text-align: center;
      font-size: 6rem;
      margin-bottom: 50px;
    }

    .countdown-text {
    display: flex;
    width: fit-content;
    font-family: sans-serif;
    font-size: 2rem;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    font-family: 'worksans';
    color: black;
    font-weight: lighter;
    border-color: wheat;
    border-radius: 5%;
    padding: 15px 20px;
    border: solid;
  }

    .sample{
    display: flex;
    flex-direction: row;
    border-radius: 20%;
    background-color: white;
    /* width: 70vw;
    height: 140vh; */
    padding: 10px;
    justify-content: center; 
    align-items: center;
    border: 3px solid wheat;
    margin-top: 100px;
    /* style="display: flex; flex-direction: left;  border-radius: 20%; 
             background-color:white ; width: 50vw; height: 135vh; 
             justify-content: space-between; align-items: left;
             border: 3px solid wheat;" */
  }

    .text-1{
      text-align: center;
      font-size: 2.3rem;
    }

    .text-2{
      text-align: center;
      font-size: 4rem;
      margin-top: 10px;
    }
    .text-time{
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 70px;
    }
    .tempat{
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 20px;
      margin-top: 50px;
    }
    .alamat{
      text-align: center;
      font-size: 1rem;
      margin-bottom: 30px;
    }

    .outline-button{
    width: fit-content;
    padding: 8px 15px;
    border: 2px solid black;
    font-size: 1.5rem;
    color: black;
    outline-color: black;
  }

  .outline-button:hover{
    padding: auto;
    border: 2px solid darkgoldenrod;
    color: darkgoldenrod;
  }
   
  }
  /* END OF MEDIA */
  
</style>