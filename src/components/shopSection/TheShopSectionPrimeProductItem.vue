<script>
export default {
    props: {
    product_prime_info_item: {
    type: Object,
    default() {
      {}
    }
  }
}
}
</script>



<template>
  <div class="col-md-6">
    <div class="box">
      <a href="">
        <div class="img-box">
          <img src="images/w1.png" alt="" />
        </div>
        <div class="detail-box">
          <h6>
            {{ product_prime_info_item.name }}
          </h6>
          <h6>
            Price:
            <span> ${{ product_prime_info_item.price  }} </span>
          </h6>
        </div>
        <div class="new">
          <span> Featured </span>
        </div>
      </a>
    </div>
  </div>
</template>
