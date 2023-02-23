<script>
export default {
    props: {
            item_data: {
                type: Object,
                default() {
                    return {}
                }
            },
            imageSlide: {
                type: Boolean,
                default: true
            },
            width: {
                type: Number,
                default: 600
            }
        }

}
</script>

<template>
  <div class="col-md-6">
    <div class="img-box" :style="{'min-width': width + 'px'}">
      <img :src="'images/' + item_data.img" alt="img" v-if="imageSlide" />
    </div>
  </div>
</template>
