<template>
  <a :href="item.link" class="collections-card flex-c">
    <div class="collections-card__img" :style="{ backgroundImage: 'url( ' + item.img + ' )' }"></div>
    <div class="collections-card__content">
      <h2 class="title sb24">{{item.name}}</h2>
      <p class="quantity">{{item.quantity}} items</p>
      <span class="link flex-c">View collection <i class="icon-uniE935"></i></span>
    </div>
  </a>
</template>

<script>
  export default {
    name:"collectioncard",
    data: function(){
      return {
        isShow:null,
        item:this.dataCollection,
      }
    },
    props: ['dataCollection'],
    mounted: function(){
    },
    methods: {
    },
  }
</script>
<style scoped>
  .collections-card{
    width: calc(50% - 30px);
    margin: 0 0 35px 30px;
  }
  .collections-card__img {
    width: 255px;
    height: 275px;
    margin-right: 30px;
    background: 50% 50% no-repeat;
    background-size: cover;
    box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.4);
    transition: box-shadow .3s;
  }

  .collections-card__content {
    width: calc(100% - 285px);
  }

  .title {
    transition: color .3s;
    text-transform: uppercase;
    margin-bottom: 7px;
    position: relative;
  }

  .title:before {
    content: '';
    display: block;
    background: #4f4f4f;
    width: 64px;
    height: 1px;
    position: absolute;
    left: -50px;
    top: -20px;
  }

  .quantity {
    font-weight: 300;
    color: #838383;
    transition: color .3s;
    margin-bottom: 26px;
  }

  .link {
    position: relative;
    transition: color .3s;
    width: 100%;
  }

  .link:before {
    content: '';
    display: block;
    background: #4f4f4f;
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    top: -15px;
  }

  i {
    margin: 4px 0 0 9px;
    font-size: 8px;
    transform: rotate(90deg);
  }

  @media (min-width: 1025px){
    .collections-card:hover .collections-card__img {
      box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.6);
    }
    .collections-card:hover .title {
      color: #ffa700;
    }
    .collections-card:hover .link {
      color: #fff;
    }
  }
  @media (max-width: 1139px){
    .collections-card{
      width: calc(100% - 30px);
    }
    .collections-card__content {
      width: calc(100% - 300px);
    }
  }
  @media (max-width: 719px){
    .collections-card__img {
      width: 100%;
      margin: 0 0 25px 0;
      height: auto;
      padding-top: 83.33%;
    }
    .collections-card__content {
      width: 100%;
    }
    .title:before {
      display: none;
    }
  }
</style>
