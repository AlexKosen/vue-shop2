<script>
import ThePopupShopSection from "../popup/ThePopupShopSection.vue";
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  components: {
    ThePopupShopSection,
  },
  data() {
    return {
      isInfoPopupVisible: false,
    };
  },

  methods: {
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
    },
  },
};
</script>

<template>
  
  <div class="col-sm-6 col-xl-3">
    <div class="box">
      <ThePopupShopSection
      v-if="isInfoPopupVisible"
      :popupTitle="product.name"
      :rightBtnTitle="'To cart'"
      @closePopup="closeInfoPopup"
      >
      <div class="img-box">
          <img :src="'images/' + product.image" alt="img" />
        </div>
        <div class="detail-box">
          <h6>
            {{ product.name }}
          </h6>
          <h6>
            Price:
            <span> ${{ product.price }} </span>
          </h6>
        </div>
      </ThePopupShopSection>

      <a href="">
        <div class="img-box">
          <img :src="'images/' + product.image" alt="img" />
        </div>
        <div class="detail-box">
          <h6>
            {{ product.name }}
          </h6>
          <h6>
            Price:
            <span> ${{ product.price }} </span>
          </h6>
        </div>
        <div class="new">
          <span> New </span>
        </div>
      
      </a>
    
      <button class="the-btn_show-info" @click="showPopupInfo">
           Info
          </button>
    </div>
  </div>

</template>

<style>
.the-btn_show-info {
    display: inline-block;
    padding: 3px 25px;
    background-color:#F8B22F;
    color: #ffffff;
    font-size: 0.8rem;
    border-radius: 5px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: 1px solid #F8B22F;
}
.the-btn_show-info:hover {
  background-color:#f0d43a;
  border: 1px solid #f0d43a;
}
</style>
