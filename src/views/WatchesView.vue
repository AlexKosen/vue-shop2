<script setup>
import TheHeaderVue from '../components/headerSection/TheHeader.vue';
import TheFooter from '../components/footerSection/TheFooter.vue';
import TheShopSection from '../components/shopSection/TheShopSection.vue';

</script>

<template>

<body class="sub_page">

<div class="hero_area">

  <!-- header section strats -->
  <TheHeaderVue/>
  <!-- end header section -->
</div>

<!-- shop section -->

<TheShopSection/>

<!-- end shop section -->

<!-- footer section -->
<TheFooter/>
<!-- footer section -->
</body>

</template>