<script setup>
import MainComponent1 from './component/MainComponent1.vue'
import LandingPage from './components/LandingPage.vue'
import MainComponent from './components/MainComponent.vue'
import HeaderComponent from './components/shared/Header.vue'
import FooterComponent from './components/shared/Footer.vue'
import BridesGroomComponent from './components/BridesGroomComponent.vue'
import WeddingQuoteComponent from './components/WeddingQuote.vue'
import AcaraPernikahan from './components/AcaraPernikahan.vue'
import Gallery from './components/Gallery.vue'

</script>

<template>
  <div style="overflow: hidden !important;">
    <MainComponent1/>
  </div>
  
  <!-- <HeaderComponent/> -->
  <div style="overflow: hidden !important;">
    <!-- <LandingPage/> -->
    <!-- <MainComponent/> -->
    <BridesGroomComponent/>
    <AcaraPernikahan/>
    <Gallery/>
    <WeddingQuoteComponent/>
  </div>
 
  <!-- <FooterComponent/> -->
</template>



<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
