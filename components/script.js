import slider from './slider.vue';
import reviewcard from './review-card.vue';
import {default as toggle} from '../vue-mixins/toggleClass.js';
import productcard from './product-card.vue';
import collectioncard from './collection-card.vue';
import selectmenu from './select-menu.vue';
import selectsearch from './select-search.vue';

var app = new Vue({
    el:'#app',
    components: { 
      slider,
      reviewcard,
      productcard,
      selectmenu,
      selectsearch,
      collectioncard,
    },
    data:{
      isScroll:false,
      url:null,
      typeChange: false,
      reviews: [
        {
          name: 'Maria Jane Smith',
          img: './img/reviews.png',
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
          title:'Patch Bloodbath Death Metal band',
        },{
          name: '1Maria Jane Smith',
          img: './img/reviews.png',
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          title:'Patch Bloodbath Death Metal band',
        },{
          name: '3Maria Jane Smith',
          img: './img/reviews.png',
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
          title:'Patch Bloodbath Death Metal band',
        }
      ],
      collections: [
        {
          name: 'Big Back Patches',
          img: './img/product.png',
          link:'/documents/shop.html',
          quantity:1,
        },
        {
          name: 'Big Back Patches',
          img: './img/product.png',
          link:'/documents/shop.html',
          quantity:2,
        },
        {
          name: 'Big Back Patches',
          img: './img/product.png',
          link:'/documents/shop.html',
          quantity:3,
        },
        {
          name: 'Big Back Patches',
          img: './img/product.png',
          link:'/documents/shop.html',
          quantity:4,
        },
        {
          name: 'Big Back Patches',
          img: './img/product.png',
          link:'/documents/shop.html',
          quantity:1,
        },
        {
          name: 'Big Back Patches',
          img: './img/product.png',
          link:'/documents/shop.html',
          quantity:2,
        },
        {
          name: 'Big Back Patches',
          img: './img/product.png',
          link:'/documents/shop.html',
          quantity:3,
        },
        {
          name: 'Big Back Patches',
          img: './img/product.png',
          link:'/documents/shop.html',
          quantity:4,
        },
      ],
      perPage: {
	    desktop: 4,
	    tablet: 2,
	    mobile: 1,
	  },
      products: [
        {
          name: "1Big Back patch Thor's Hammer & Ravens Viking Mjolnir",
          img: './img/photo.png',
          oldPrice:'US $40.91',
          price:'$32.91',
          action:'-40%',
          link: '/documents/product.html',
        },
        {
          name: "1Big Back patch Thor's Hammer & Ravens Viking Mjolnir",
          img: './img/footer-logo.png',
          oldPrice:'US $40.91',
          price:'$32.91',
          action:'-40%',
          link: '/documents/product.html',
        },
        {
          name: "Big Back patch Thor's Hammer & Ravens Viking Mjolnir",
          img: './img/product.png',
          price:'US $32.91',
          link: '/documents/product.html',
        },
        {
          name: "Big Back patch Thor's Hammer & Ravens Viking Mjolnir",
          img: './img/product.png',
          oldPrice:'US $40.91',
          price:'$32.91',
          action:'new',
          link: '/documents/product.html',
        },
        {
          name: "Big Back patch Thor's Hammer & Ravens Viking Mjolnir",
          img: './img/product.png',
          price:'US $32.91',
          link: '/documents/product.html',
        },{
          name: "Big Back patch Thor's Hammer & Ravens Viking Mjolnir",
          img: './img/product.png',
          oldPrice:'US $40.91',
          price:'$32.91',
          action:'-40%',
          link: '/documents/product.html',
        },
        {
          name: "Big Back patch Thor's Hammer & Ravens Viking Mjolnir",
          img: './img/product.png',
          price:'US $32.91',
          link: '/documents/product.html',
        },
        {
          name: "Big Back patch Thor's Hammer & Ravens Viking Mjolnir",
          img: './img/product.png',
          oldPrice:'US $40.91',
          price:'$32.91',
          action:'new',
          link: '/documents/product.html',
        },
        {
          name: "Big Back patch Thor's Hammer & Ravens Viking Mjolnir",
          img: './img/product.png',
          price:'US $32.91',
          link: '/documents/product.html',
        },
      ],
      currentImage: 0,
      images:[
        '../img/product-image.png',
        '../img/product.png',
        '../img/product.png',
        '../img/product.png',
        '../img/product.png',
        '../img/product.png',
      ],
      currentScreen: 'desktop',
      countries:{
        al:'Albania',
        al:'Aljir',
        au:'Austria',
        bo:'Bolguria',
        bi:'Bipbipbip',
        be:'Belgia',
        ua:'Ukraine',
        ya:'Yandex',
        za:'Zalypka',
        al1:'Albania',
        al2:'Aljir',
        au2:'Austria',
        bo2:'Bolguria',
        bi2:'Bipbipbip',
        be2:'Belgia',
        ua2:'Ukraine',
        ya2:'Yandex',
        za2:'Zalypka',
        al3:'Albania',
        al4:'Aljir',
        au4:'Austria',
        bo4:'Bolguria',
        bi4:'Bipbipbip',
        be4:'Belgia',
        ua4:'Ukraine',
        ya4:'Yandex',
        za4:'Zalypka',
      },
      mobileLang:false,
      mobileStages:false,
      cart:[
        {
          image:"../img/product.png",
          name:"Big Back patch Thor's Hammer & Ravens Viking Mjolnir",
          amount:1,
          price: 40.12,
        },
        {
          image:"../img/product.png",
          name:"2Big Back patch Thor's Hammer & Ravens Viking Mjolnir",
          amount:2,
          price: 20,
        },{
          image:"../img/product.png",
          name:"3Big Back patch Thor's Hammer & Ravens Viking Mjolnir",
          amount:1,
          price: 40.12,
        },
        {
          image:"../img/product.png",
          name:"4Big Back patch Thor's Hammer & Ravens Viking Mjolnir",
          amount:2,
          price: 20,
        },{
          image:"../img/product.png",
          name:"5Big Back patch Thor's Hammer & Ravens Viking Mjolnir",
          amount:1,
          price: 40.12,
        },
      ],
      colors:[
        '255, 255, 255',
        '128, 128, 128',
        '0,0,0',
        '232, 8, 8',
        '243, 249, 9',
      ],
      productQTY:1,
      cartRemoved:[],
      recepient: 'user',
      address:'user-address',
      productLenght:0,
      sliderWidth: null,
      fullReviev: null,
    },
    mixins: [toggle],
    mounted: function(){

         this.$nextTick(function() {
           window.addEventListener('resize', this.setResolution, this.cutGroup);
         });
    },
    methods: {
      hideScroll:function(index){
        var html = document.querySelector("html");

        this.isScroll = !this.isScroll;
        if(this.isScroll){
          html.classList.add('overflow');
        }else{
          html.classList.remove('overflow');
        }
        this.fullReviev = index;
      },
      onFileChange: function(e){
        var file = e.target.files[0];
        this.url = 'background-image: url(' + URL.createObjectURL(file) + ')';
      },
      removeImage: function(){
        var input = this.$refs.fileInput;

        this.url = null ;
        input.type = 'text';
        input.type = 'file';
      },
      remove:function (array, element) {
        return array.filter(el => el !== element);
      },
      removeFromCart: function(key){
        this.cartRemoved.push(this.cart[key])
        this.cart.splice(key,1);
      },
      restoreItem:function(key){
        this.cart.push(this.cartRemoved[key]);
        this.cartRemoved.splice(key,1);
      },
      valudation:function(item,event){
        if (event.target.value == '') {
          item.amount = 1;
        }
      },
      cutGroup: function(data){
	    var i,j,temparray = [],chunk = this.perPage[this.currentScreen];
	    
		for (i=0,j=data.length; i<j; i+=chunk) {
		    temparray.push(data.slice(i, i+chunk));
		}
		
		return temparray;
	  },
	  removeFromList: function(item){
	  },
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
      },
    },
    watch:{
      cart:{
        handler:function(){
          this.productLenght = this.cart.reduce(function(total, product){
            return total + parseInt(product.amount);
          }, 0);
        },
        deep:true,
      }
    },
    computed: {
      inputType: function(){
        return (this.typeChange == true)? 'text' : 'password';
      },
      totalPrice:function(){
        return this.cart.reduce(function(total, product){
          return total + (product.amount * product.price);
        }, 0);
      },
    },
    created:function(){
	  this.setResolution();
    }
});