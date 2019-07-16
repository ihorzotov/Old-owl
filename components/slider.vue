<template>
  <div class="section-slider blk-margin">
    <div class="wrapper">
      <p class="wb-title">{{sliderName}}</p>
      <section class="slider flex-c" @touchstart="handleTouchStart" @touchmove="handleTouchMove">
        <slot name="slider-content" :slideClasses="slideClasses">
        </slot>
      </section>
      <div class="section-slider__nav">
        <slot name="link"></slot>
        <div class="slider-control flex-c-c" v-if="pagesLength != 1">
          <button class="slider-button btn-prev" @click="slidePrev">
            <i class="icon-uniE935"></i>
          </button>
          <div class="slider-control__steps">
            <span class="current">{{ currentPage }}</span>
            <span class="lenght">{{ pagesLength }}</span>
          </div>
          <button class="slider-button btn-next" @click="slideNext">
            <i class="icon-uniE935"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {default as resizeMixin} from '../vue-mixins/resize.js';

  export default {
    mixins: [resizeMixin],
    data: function () {
      return {
        items:[
          {title: 'Slide 1'},
          {title: 'Slide 2'},
          {title: 'Slide 3'},
          {title: 'Slide 4'},
          {title: 'Slide 5'},
          {title: 'Slide 6'},
          {title: 'Slide 7'},
          {title: 'Slide 8'},
          {title: 'Slide 9'},
          {title: 'Slide 10'},
          {title: 'Slide 11'},
          {title: 'Slide 12'}
        ],
        perPage: {
          desktop: (this.dataDesktop != undefined)? this.dataDesktop : 4,
          tablet: 2,
          mobile: 1,
        },
        currentClass:'current',
        currentPage: 1,
        firstCurrentItem: 0,
        lastCurrentItem:0,
        xDown: null,
        //slideClasses: []
      }
    },
    props:['sliderName','dataDesktop'],
    mounted: function(){
      console.log(this.$slots);
    },
    created: function(){
    },
    methods: {
      slidePrev: function(){
        return currentPage >= 2? currentPage-- : null;
      },
      slideNext: function(){
        console.log(this.perPage.desktop);
        return this.currentPage <= (this.pagesLength -1 )? this.currentPage++ : null;
      },
      isBetween: function(index){
        this.lastCurrentItem = this.perPage[this.currentScreen] * this.currentPage;
        this.firstCurrentItem = this.lastCurrentItem - this.perPage[this.currentScreen] + 1;
        index++;
        
        return index >= this.firstCurrentItem && index <= this.lastCurrentItem? true: false;
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
                (this.currentPage <= (this.pagesLength -1 ))? this.currentPage++ : null
              } else {
                (this.currentPage >= 2)? this.currentPage-- : null;
              }
          }

        this.xDown = null;
        }
      },
      slideClassesInit: function() {
        // var perPage = this.perPage[this.currentScreen];

        for(var i = 0; i < this.pagesLength; i++){
          if(this.isBetween(i))
            this.slideClasses.push('current');
          // if(i < perPage){
          //   this.slideClasses.push('current');
          // }
          // else if(i < (perPage * 2)){
          //   this.slideClasses.push('next');
          // }else {
          //   this.slideClasses.push('');
          // }
        }
      }
    },
    computed: {
      pagesLength: function() {
        return this.items.length / this.perPage[this.currentScreen];
      },
      slideClasses: function() {
        var perPage = this.perPage[this.currentScreen];
        var array = [];
        
        for(var i = 0; i < this.pagesLength; i++){
          if(this.isBetween(i))
            array.push('current');
        }
        return array;
      }
      
    },
  }
</script>
<style scoped>
  .section-slider.product-margin .slider {
    margin-left: -10px;
  }
  .section-slider.collection-margin .slider {
    margin: 0 0 -35px -30px;
  }
  
  .section-slider.slider-reviews .slider{
    margin-left: -30px;
  }
  .section-slider .product-card {
    width: calc(25% - 10px);
    margin-left: 10px;
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
      margin-left: 30px;
      width: calc(50% - 30px);
    }
    .section-slider.product-margin .slider{
      margin-left: -30px;
    }
  }
  @media (max-width: 719px){
    .section-slider .product-card{
      margin-left: 30px;
      width: calc(100% - 30px);
    }
    .section-slider__nav .link + .slider-control{
      justify-content: flex-start;
    }
  }
</style>
