var toggle = {
  data: function () {
    return{
      isActiveMenu: false,
    }
  },
  methods: {
    toggleClass: function(value){
      this.isActiveMenu = (this.isActiveMenu == value)? false: value;
    },
  }
}

export default toggle;
