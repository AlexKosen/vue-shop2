<script setup>
import TheHeader from '../components/headerSection/TheHeader.vue';
import TheAboutSection from '../components/aboutSection/TheAboutSection.vue';
import TheFooter from '../components/footerSection/TheFooter.vue';

</script>

<template>
    <body class="sub_page">

<div class="hero_area">
  <!-- header section strats -->
    <TheHeader/>
  <!-- end header section -->
</div>

<!-- about section -->

    <TheAboutSection/>

<!-- end about section -->

<!-- footer section -->
    <TheFooter/>
<!-- footer section -->

</body>
</template>