<script>
export default {
  props: {
    popupTitle: {
      type: String,
      default: "Popup name",
    },
    rightBtnTitle: {
      type: String,
      default: "ok",
    },
  },

  methods: {
    rightBtnAction() {
      this.$emit("rightBtnAction");
    },
    closePopup() {
      this.$emit("closePopup");
    },
  },

  mounted() {
    document.addEventListener("click", (item) => {
      if (item.target === this.$refs["popup_wrapper"]) {
        this.closePopup();
      }
    });
  },
};
</script>

<template>
  <div class="popup-wrapper" ref="popup_wrapper">
    <div class="the-popup">
      <div class="the-popup__header">
        <span>{{ popupTitle.name }}</span>
        <span class="material-icons" @click="closePopup"> close </span>
      </div>
      <div class="the-popup__content">
        <slot></slot>
      </div>
      <div class="the-popup__footer">
        <button class="close-modal btn" @click="closePopup">Close</button>
        <button class="sabmit_btn btn" @click="rightBtnAction">
          {{ rightBtnTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.popup-wrapper {
  background: rgba(64, 64, 64, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.the-popup {
  padding: 16px;
  position: fixed;
  top: 100px;
  max-width: 600px;
  border-radius: 15px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 100;
  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 400px;
    @media (max-width: 768px) {
    flex-wrap: wrap;
    margin-bottom: 15px;
  }
  }
  .material-icons {
    cursor: pointer;
  }
  .sabmit_btn {
    display: inline-block;
    padding: 10px 45px;
    background-color: #f0d43a;
    color: #ffffff;
    font-size: 1rem;
    border-radius: 5px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: 1px solid #f0d43a;
  }
  .close-modal {
    display: inline-block;
    padding: 10px 45px;
    background-color: #f0d43a;
    color: #ffffff;
    font-size: 1rem;
    border-radius: 5px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: 1px solid #f0d43a;
  }
  .sabmit_btn:hover {
    background-color: #f8b22f;
    border: 1px solid #f8b22f;
    color: #ffffff;
  }
  .close-modal:hover {
    background-color: #f8b22f;
    border: 1px solid #f8b22f;
    color: #ffffff;
  }
}
</style>
