<template>
    <div class="product-card">
      <a :href="item.link" class="link">
        <div class="product-card__img" :style="{backgroundImage: 'url(' + item.img + ')'}">
          <p class="action-label flex-c-c" v-if="item.action && item.action !=''">{{item.action}}</p>
        </div>
        <p class="text">{{item.name}}</p>
      </a>
      <div class="product-card__order flex-c">
        <div class="price flex-c">
          <p class="old-price" v-if="item.oldPrice && item.oldPrice !=''">{{item.oldPrice}}</p>
          <p class="current-price sb24">{{item.price}}</p>
        </div>
        <button @click="buy" class="buy-btn"><i class="icon-bag"></i></button>
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
        buy:function(){
          this.$parent.$parent.productLenght++
          console.log(this.item)
        },
      },
    }
  </script>
  <style scoped>
  
  </style>
  