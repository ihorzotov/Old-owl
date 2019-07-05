<template>
  <div class="reviews-card ct33" :class="{active: (isActiveMenu == 'review')}" ref="card">
    <div class="reviews-container">
      <div class="reviews-container__content">
        <p class="title">Name of patch:</p>
        <h2 class="name"> {{ item.name}} </h2>
        <p class="text" ref="textElement"> {{ item.text }} </p>
        <span class="show-more" @click="toggleClass('review') , isOverflowCorrect() , $emit('change')" v-if="isShow"></span>
      </div>
    </div>
    <div class="reviews-person">
      <div class="reviews-person__img" :style="{ backgroundImage: 'url( ' + item.img + ' )' }"></div>
      <p class="reviews-person__name"> {{ item.name }} </p>
    </div>
    <div class="background"></div>
  </div>
</template>

<script>
  export default {
    name:"collectioncard",
    data: function(){
      return {
        isShow:null,
        item:this.dataReview,
      }
    },
    mixins: [toggle],
    props: ['dataCollection'],
    mounted: function(){
    },
    methods: {
    },
  }
</script>
<style scoped>
  
</style>
