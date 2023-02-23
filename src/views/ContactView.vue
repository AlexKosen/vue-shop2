<script setup>
import TheHeaderVue from '../components/headerSection/TheHeader.vue';
import TheContactSectionVue from '../components/contactSection/TheContactSection.vue';
import TheFooterVue from '../components/footerSection/TheFooter.vue';
</script>

<template>
<body class="sub_page">

<div class="hero_area">

  <!-- header section strats -->
    <TheHeaderVue/>
  <!-- end header section -->
</div>

<!-- contact section -->

    <TheContactSectionVue/>

<!-- end contact section -->

<!-- footer section -->
    <TheFooterVue/>
<!-- footer section -->

</body>
</template>