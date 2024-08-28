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
        <div class="reveal">
          <div class="gallery-container desktop-view">
                <h2> Gallery</h2>
                <div class="image-container">
                  <div class="pic1 pic-border"></div>
                  <div class="pic2 pic-border"></div>
                  <div class="pic3 pic-border"></div>
                </div>
                <div class="image-container">
                  <div class="pic4 pic-border"></div>
                  <div class="pic5 pic-border"></div>
                  <div class="pic6 pic-border"></div>
                </div>
          </div>
          <div class="gallery-container mobile-view">
                <h2> Gallery</h2>
                <div class="image-container">
                <div class="pic1 pic-border"></div>
                <div class="pic2 pic-border"></div>
              </div>
                <div class="image-container">
                  <div class="pic3 pic-border"></div>
                  <div class="pic4 pic-border"></div>
              </div>
                <div class="image-container">
                  <div class="pic5 pic-border"></div>
                  <div class="pic6 pic-border"></div>
                </div>
          </div>
        </div>
</template>
  


  <style scoped>
@import url("../assets/css/general-styling.css");
@import url("../assets/css/general-animation.css");
.gallery-container{
  background-color: aqua;
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(180deg, rgba(2, 0, 36, 0) 0%, rgba(51, 51, 51, 0) 0%),
        url('../assets/img/theme1/weddingbg1.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
}
  /* REVEAL */
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
.pic-border{
  border-radius: 20px;
}
.image-container{
  display: flex;
  margin: 20px;
}
  /* MEDIA */

  @media (max-width: 575px) {
    .gallery-container .reveal .img{
        width: 900px;
        height: auto;
        display: grid;
        column-gap: 20px;
    }

    .gallery-container h1{
      font-size: 3rem;
      margin: 20px;
  }
    .gallery-container h2{
      font-size: 8rem;
      text-align: center;
      color: black;
      font-family: 'sacramento', cursive;
      margin-bottom: 50px;
      
  }

  .pic1{
    width: 48%; /* Lebar gambar 48% biar kolomnya kaga full */
    height: 40vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .pic2{
    width: 48%; /* Lebar gambar 48% biar kolomnya kaga full */
    height: 40vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .pic3{
    width: 48%; /* Lebar gambar 48% biar kolomnya kaga full */
    height: 40vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto3.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  
  .pic4{
    width: 48%; /* Lebar gambar 48% biar kolomnya kaga full */
    height: 40vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto4.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .pic5{
    width: 48%; /* Lebar gambar 48% biar kolomnya kaga full */
    height: 40vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto6.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .pic6{
    width: 48%; /* Lebar gambar 48% biar kolomnya kaga full */
    height: 40vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto9.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .image-container{
  display: flex;
  margin: 20px;
  justify-content: space-between;
}
.desktop-view{
    display: none;
   }
  }
  @media (min-width: 576px) and (max-width: 768px){
   
    .gallery-container .reveal .img{
        width: 900px;
        height: auto;
        display: grid;
        column-gap: 20px;
    }

    .gallery-container h1{
      font-size: 3rem;
      margin: 20px;
  }
    .gallery-container h2{
      font-size: 8rem;
      text-align: center;
      color: black;
      font-family: 'sacramento', cursive;
      margin-bottom: 50px;
    
  }

  .pic1{
    width: 48%; /* Lebar gambar 48% biar kolomnya kaga full */
    height: 70vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .pic2{
    width: 48%; /* Lebar gambar 48% biar kolomnya kaga full */
    height: 70vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .pic3{
    width: 48%; /* Lebar gambar 48% biar kolomnya kaga full */
    height: 70vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto3.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  
  .pic4{
    width: 48%; /* Lebar gambar 48% biar kolomnya kaga full */
    height: 70vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto4.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .pic5{
    width: 48%; /* Lebar gambar 48% biar kolomnya kaga full */
    height: 70vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto6.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .pic6{
    width: 48%; /* Lebar gambar 48% biar kolomnya kaga full */
    height: 70vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto9.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .image-container{
  display: flex;
  margin: 20px;
  justify-content: space-between;
}
.desktop-view{
    display: none;
   }
  }
  @media (min-width: 768px) and (max-width: 992px){
      .Gallery{
        min-height: 250vh;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: rgb(252, 210, 102);
        background-image: linear-gradient(180deg, rgba(2, 0, 36, 0) 0%, rgba(51, 51, 51, 0) 0%),
        url('../assets/img/theme1/weddingbg1.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin-bottom: -394px;
        rotate: 180deg;
      }
      .gallery-container .reveal .img{
          width: 900px;
          height: auto;
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(3,1fr);
          margin-bottom: 0%;
          margin-left:20px;
          align-items: center;
          justify-content: center;
      }

      .gallery-container h1{
        font-size: 3rem;
        margin: 20px;
    }
      .gallery-container h2{
        font-size: 6rem;
        text-align: center;
        color: black;
        font-family: 'sacramento', cursive;
        margin-bottom: 50px;
        
    }


    .pic1{
    width: 30vw;
    height: 80vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .pic2{
    width: 30vw;
    height: 80vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .pic3{
    width: 30vw;
    height: 80vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto3.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .pic4{
    width: 30vw;
    height: 80vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto4.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .pic5{
    width: 30vw;
    height: 80vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto9.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .pic6{
    width: 30vw;
    height: 80vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto6.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }

  .img{
    justify-content: center;
    align-items: center;
    size-adjust: auto;
  } 
  
  .image-container{
  display: flex;
  margin: 20px;
  justify-content: space-around;
}
.mobile-view{
    display: none;
   }
  }
  @media (min-width: 992px){

    .gallery-container .reveal .img{
        width: 900px;
        height: auto;
        display: grid;
        row-gap: 20px;
        grid-template-columns: repeat(3,1fr);
        margin-bottom: 50%;
    }

    .gallery-container h1{
      font-size: 3rem;
      margin: 20px;
  }
    .gallery-container h2{
      font-size: 8rem;
      text-align: center;
      color: black;
      font-family: 'sacramento', cursive;
      margin-bottom: 50px;
      margin-top: 350px;
  }

  .pic1{
    width: 30vw;
    height: 80vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .pic2{
    width: 30vw;
    height: 80vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .pic3{
    width: 30vw;
    height: 80vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto3.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .pic4{
    width: 30vw;
    height: 80vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto4.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .pic5{
    width: 30vw;
    height: 80vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto9.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .pic6{
    width: 30vw;
    height: 80vh;
    background-image: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(51, 51, 51, 0.4) 0%),
    url('../assets/img/theme1/foto6.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
  .image-container{
  display: flex;
  margin: 20px;
  justify-content: space-around;
}
.mobile-view{
    display: none;
   }
}

  </style>
  