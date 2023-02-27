<script>
    export default {
        props: {
            product: {
                type: Object,
                default() {
                    {}
                }
            }
        }
    }
</script>

<template>
    
    <div class="col-sm-6 col-xl-3">
    <div class="box">
      <a href="">
        <div class="img-box">
          <img :src="'images/' + product.image" alt="img">
        </div>
        <div class="detail-box">
          <h6>
            {{ product.name }}
          </h6>
          <h6>
            Price:
            <span>
              ${{ product.price }}
            </span>
          </h6>
        </div>
        <div class="new">
          <span>
            New
          </span>
        </div>
      </a>
    </div>
  </div>
</template>


