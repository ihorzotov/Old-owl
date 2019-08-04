<template>
    <div class="section-slider blk-margin">
      <div class="wrapper">
        <p class="wb-title">{{sliderName}}</p>
        <section class="slider"  :class="classList" @touchstart="handleTouchStart" @touchmove="handleTouchMove" ref="slider" :style="{ height: sliderHeight +'px' }">	    
          <slot name="slider-content">
          </slot>
        </section>
        <div class="section-slider__nav">
          <slot name="link"></slot>
          <div class="slider-control flex-c-c" v-if="pagesLength != 1">
            <button class="slider-button btn-prev" @click="slidePrev(), classBool = false">
              <i class="icon-uniE935"></i>
            </button>
            <div class="slider-control__steps">
              <span class="current">{{ currentPage }}</span>
              <span class="lenght">{{ pagesLength }}</span>
            </div>
            <button class="slider-button btn-next" @click="slideNext(), classBool = true">
              <i class="icon-uniE935"></i></button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      data: function () {
        return {
          perPage: this.dataPpage,
          currentPage: 1,
          xDown: null,
          sliderHeight: null,
          classBool:true,
          currentScreen:this.dataCurrentScreen
        }
      },
      props:['sliderName','dataPpage','dataCurrentScreen'],
      mounted: function(){
        this.sliderResize();
        this.$nextTick(function() {
          window.addEventListener('resize', this.sliderResize);
        });
      },
      created: function(){
      },
      methods: {
        slidePrev: function(){
          return this.currentPage >= 2? this.currentPage-- : null;
        },
        slideNext: function(event){
          return this.currentPage <= (this.pagesLength -1 )? this.currentPage++ : null;
        },
        handleTouchStart: function(evt) {
          this.xDown = evt.touches[0].clientX;
        },
        handleTouchMove: function(evt) {
          if ( ! this.xDown ) {
              return;
          }
          var xUp = evt.touches[0].clientX,
              xDiff = this.xDown - xUp;
  
          if(Math.abs( xDiff ) > 40){
  
            if ( Math.abs( xDiff )) {
                if ( xDiff > 0 ) {
                  (this.currentPage <= (this.pagesLength -1 ))? this.currentPage++ : null;
                  this.classBool = true;
                } else {
                  (this.currentPage >= 2)? this.currentPage-- : null;
                  this.classBool = false;
                }
            }
  
          this.xDown = null;
          }
        },
        sliderResize: function(){
        var slider = this.$refs.slider;
      
      
        this.sliderHeight = slider.getElementsByClassName('slide-list')[0].offsetHeight;
        this.$parent.sliderWidth = slider.offsetWidth;
      
      if(this.currentPage > this.pagesLength){
         this.currentPage = this.pagesLength;
      };
        },
      },
      watch:{
      currentPage:{
          handler:function(data){
          var slider = this.$refs.slider;
          
         slider.querySelector('.current').classList.remove('current');   
           slider.getElementsByClassName('slide-list')[data - 1].classList.add('current');
          
          },
        }  
      },
      computed: {
        pagesLength: function() {
          return this.$slots['slider-content'].length;
        },
        classList: function(){
        return{
           'nextSlide': this.classBool,
          'prevSlide': !this.classBool,
        }
        },
      },
    }
  </script>
  <style scoped>
    .slider{
    position: relative;
    -webkit-transform: translate3d(0,0,0);
    }
    .slide-list{
    position: absolute;
    top: 0;
    width: 0%;
    overflow: hidden;
    transition: .5s ;
    }
    .slide-list__content{
    flex-wrap: nowrap;
    justify-content: space-between;
    }
    .nextSlide .slide-list{
    left: 0;
    }
    .nextSlide .slide-list.current{
    right: 0; 
    left: auto;
    }
    .prevSlide .slide-list{
    right: 0; 
    }
    .prevSlide .slide-list.current{
    left: 0;
    right: auto;
    }
    .slide-list.current{
    width: 100%;
    }
    .collection-margin .slider {
      margin: 0 0 -35px 0;
    }
    .collection-margin .slide-list__content{
    flex-wrap: wrap;
    }
    .section-slider .product-card {
      width: calc(25% - 10px);
    }
  
    .section-slider__nav {
      position: relative;
      margin-top: 26px;
    }
  
    .section-slider__nav .link {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      transition: color .3s;
      cursor: pointer;
    }
    .section-slider__nav .link.arrow{
      padding-right: 17px;
    }
    .section-slider__nav .link.arrow:before {
      content: '\e935';
      font-family: 'icomoon';
      font-size: 8px;
      position: absolute;
      right: -3px;
      top: 2px;
      transform: rotate(90deg);
    }
    .slider-control .slider-button {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: #1f1f1f;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #cbcbcb;
      transition: color .3s, background .3s;
    }
  
    .slider-control .slider-button i {
      font-size: 8px;
    }
  
    .slider-control .slider-button.btn-prev i {
      transform: rotate(-90deg);
      margin-left: -4px;
    }
  
    .slider-control .slider-button.btn-next i {
      transform: rotate(90deg);
      margin-left: 4px;
    }
  
    .slider-control__steps {
      width: 100px;
      text-align: center;
      font-weight: 200;
    }
  
    .slider-control__steps .current {
      font-size: 24px;
      color: #fff;
      vertical-align: text-bottom;
    }
    .reviews-card{
    margin-left: 0;
    }
    .slider-control__steps .lenght {
      color: #838383;
      font-size: 16px;
      vertical-align: baseline;
    }
  
    .slider-control__steps .lenght:before {
      content: '/';
    }
    @media (max-width: 1139px){
      .section-slider .product-card{
        width: calc(50% - 15px);
      }
      .reviews-card{
      width: calc(50% - 15px); 
      }
    }
    @media (max-width: 719px){
      .section-slider .product-card{
        width: 100%;
      }
      .section-slider__nav .link + .slider-control{
        justify-content: flex-start;
      }
      .reviews-card{
      width: 100%; 
      }
    }
  </style>
  