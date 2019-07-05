<template>
  <div class="product-card">
    <a href="#" class="link">
      <div class="product-card__img" style="background-image: url(img/product.png);">
        <p class="action-label flex-c-c">new</p>
      </div>
      <p class="text">Big Back patch Thor's Hammer & Ravens Viking Mjolnir Big Back patch Thor's Hammer & Ravens Viking Mjolnir </p>
    </a>
    <div class="product-card__order flex-c">
      <div class="price flex-c">
        <p class="current-price sb24">US $32.91</p>
      </div>
      <button class="buy-btn"><i class="icon-bag"></i></button>
    </div>
  </div>
</template>

<script>

  export default {
    name:"productcard",
    data: function(){
      return {
        isShow:null,
        item:this.dataProduct,
      }
    },
    props: ['dataProduct'],
    mounted: function(){
    },
    methods: {
    },
  }
</script>
<style scoped>

</style>
