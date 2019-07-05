var resizeMixin = {
  data: function () {
    return{
      currentScreen: 'desktop',
    }
  },
  created: function () {
    this.setResolution();
  }, 
  mounted: function(){
      this.$nextTick(function() {
        window.addEventListener('resize', this.setResolution);
      });
  },
  methods: {
      detectWidth:function(){
        window.addEventListener('resize', this.setResolution);
      },
      setResolution: function(){
        var screenWidth = document.documentElement.clientWidth;

        if(screenWidth < 720){
          this.currentScreen = 'mobile';
        }else if( screenWidth < 1140 ){
          this.currentScreen = 'tablet';
        }else{
          this.currentScreen = 'desktop';
        };

        if(this.currentPage > this.pagesLenght){
          this.currentPage = this.pagesLenght;
        }
      },
  }
}

export default resizeMixin;
