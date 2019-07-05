<template>
  <div class="reviews-card ct33" :class="{active: (isActiveMenu == 'review')}" ref="card">
    <div class="reviews-container">
      <div class="reviews-container__content">
        <p class="title">Name of patch: {{ dataClass }} {{dataIndex}}</p>
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
  import {default as resizeMixin} from '../vue-mixins/resize.js';
  import {default as toggle} from '../vue-mixins/toggleClass.js';
  
  export default {
    name:"reviewcard",
    data: function(){
      return {
        isShow:null,
        item:this.dataReview,
      }
    },
    mixins: [toggle],
    props: ['dataReview', 'dataClass','dataIndex'],
    mounted: function(){
      this.checkSice();
      this.$nextTick(function() {
        window.addEventListener('resize', this.checkSice);
      });
    },
    methods: {
      checkSice: function(){
        var element = this.$refs.textElement,
            height = element.offsetHeight,
            realHeight = element.scrollHeight;

        if(this.isActiveMenu != 'review' ){
          if(realHeight <= height){
             this.isShow = false;
          }else{
            this.isShow = true;
          }
        }
      },
      isOverflowCorrect: function(){
        var card = this.$refs.card,
            height = card.offsetHeight,
            cY1 = card.offsetTop - 80,
            cY2 = cY1 + height + 80,
            wY1 = window.scrollY,
            wY2 = wY1 + window.innerHeight;
        if(cY1 < wY1){
          this.scrollTo(cY1, 700);
        }else if(cY2 > wY2){
          this.scrollTo(cY1 - height , 700);
        }
      },
      scrollTo: function(to, duration) {
        var element = document.scrollingElement || document.documentElement,
            start = element.scrollTop,
            change = to - start,
            startDate = +new Date(),
            easeInOutQuad = function(t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t + b;
                t--;
                return -c/2 * (t*(t-2) - 1) + b;
            },
            animateScroll = function() {
                var currentDate = +new Date();
                var currentTime = currentDate - startDate;
                element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
                if(currentTime < duration) {
                    requestAnimationFrame(animateScroll);
                }
                else {
                    element.scrollTop = to;
                }
            };
        animateScroll();
      },
    },
  }
</script>
<style scoped>

.reviews-card .reviews-container {
  position: relative;
  height: 230px;
  margin-bottom: 30px;
}

.reviews-card .reviews-container:before, .reviews-card .reviews-container:after {
  content: '';
  display: block;
  width: 40px;
  height: 40px;
  background: #1b1b1b;
  position: absolute;
  left: 50%;
  bottom: -12px;
  transform: translateX(-50%) rotate(45deg);
  transition: background .3s;
}

.reviews-card .reviews-container:before {
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.3);
}

.reviews-card .reviews-container:after {
  z-index: 2;
  border-radius: 100% 0 0 0;
}

.reviews-card .reviews-container__content {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 100%;
  background: #1b1b1b;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.3);
  min-height: 230px;
  max-height: 230px;
  padding: 23px 30px 20px 55px;
  z-index: 1;
  transition: width .4s, max-height 1s , background .3s;
}

.reviews-card .reviews-container .title {
  font-size: 14px;
  font-weight: 200;
  position: relative;
}

.reviews-card .reviews-container .title:before {
  content: '“';
  color: #fff;
  font-size: 60px;
  position: absolute;
  top: -6px;
  left: -30px;
  line-height: 1;
}

.reviews-card .reviews-container .name {
  color: #fff;
  overflow: hidden;
  height: 24px;
  margin-bottom: 13px;
}

.reviews-card .reviews-container .text {
  font-size: 14px;
  font-weight: 200;
  height: 100%;
  max-height: 96px;
  overflow: hidden;
}

.reviews-card .reviews-container .show-more {
  font-size: 14px;
  font-weight: 200;
  color: #fff;
  line-height: 1;
  border-bottom: 1px solid #fff;
  position: absolute;
  bottom: 29px;
  cursor: pointer;
  transition: color .3s , border .3s;
}

.reviews-card .reviews-container .show-more:before {
  content: 'Read all';
}

.reviews-card .reviews-person__img {
  margin: 0px auto 6px;
  width: 50px;
  height: 50px;
  background: 50% 50% no-repeat;
  background-size: cover;
}

.reviews-card .reviews-person__name {
  color: #fff;
  font-weight: 200;
  text-align: center;
}

.reviews-card.active {
  z-index: 99;
}

.reviews-card.active .reviews-container__content {
  width: 450px;
  max-height: 1000px;
}

.reviews-card.active .reviews-container__content .text {
  max-height: 970px;
  transition: max-height 1s;
  transition-delay: .3s;
}

.reviews-card.active .reviews-container__content .show-more {
  border: none;
  right: -25px;
  bottom: calc(100% + 10px);
  transition: 0s;
}

.reviews-card.active .reviews-container__content .show-more:before {
  content: '\e10a';
  font-family: 'icomoon';
  font-size: 18px;
}

.reviews-card.active .background{
  display: block;
  animation-name: zoom;
  animation-duration: 0.6s;
}
.background{
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: -1;
}
@keyframes zoom {
  from {opacity: 0} 
  to {opacity:1}
}
@media (min-width: 1025px){
  .reviews-card:not(.active) .reviews-container:hover:before, .reviews-card:not(.active) .reviews-container:hover:after, .reviews-card:not(.active) .reviews-container:hover .reviews-container__content {
    background: #282828;
  }
  .reviews-card:not(.active) .show-more:hover {
    color: #ffa700;
    border-bottom: 1px solid #ffa700;
  }
}
@media (max-width: 1280px){
  .reviews-card.active .reviews-container__content{
    width: 300px;
  }
}
</style>
