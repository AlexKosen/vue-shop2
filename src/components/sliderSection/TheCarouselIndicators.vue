<script>
export default {
    methods: {
       slideTo() {
      this.$emit("slideTo")
    },
 }
}

</script>



<template>
  <li data-target="#customCarousel1"
  @click="slideTo"
  ></li>
</template>
<style lang="scss" scoped>

</style>