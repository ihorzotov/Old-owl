<template>
  <div class="reviews-card ct33" >
    <div class="reviews-container">
      <div class="reviews-container__content">
        <p class="title">Name of patch:</p>
        <h2 class="name"> {{ item.title}} </h2>
        <p class="text"> {{ item.text }} </p>
        <span class="show-more" @click="$emit('change' , dataIndex)"></span>
      </div>
    </div>
    <div class="reviews-person">
      <div class="reviews-person__img" :style="{ backgroundImage: 'url( ' + item.img + ' )' }"></div>
      <p class="reviews-person__name"> {{ item.name }} </p>
    </div>
  </div>
</template>

<script>
  
  export default {
    name:"reviewcard",
    data: function(){
      return {
        isShow:null,
        item:this.dataReview,
      }
    },
    props: ['dataReview','dataIndex'],
    mounted: function(){
/*
      this.checkSize();
      this.$nextTick(function() {
        window.addEventListener('resize', this.checkSize);
      });
*/
    },
    methods: {
/*
      checkSize: function(){
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
*/
/*
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
*/
    },
  }
</script>

