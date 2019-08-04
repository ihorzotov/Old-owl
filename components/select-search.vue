<template>
  <div class="wrap-drop" @click="toggleClass(), search = ''" :class="{active: isActive}">
    <label class="form-label">
      <input type="hidden" class="form-input" v-model="currentKey">
      <input type="text" class="form-input" v-model="search" @click="toggleClass()" :name="name">
      <div class="selected-el el-c" v-if="!isActive"><span>{{ currentIndex }}</span></div>
    </label>
    <div class="wrap-drop__container">
      <ul class="drop">
        <li v-bind:class="{ selected: currentIndex == data['' + key + ''] }" @click="makeSelection(key)" v-for='(item, key) in result'>{{ item }}</li>
        <li class="notfound">Not found</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name:"selectmenu",
    data: function () {
      return {
        data: this.dataContent,
        currentIndex: Object.values(this.dataContent)[0],
        currentKey: Object.values(this.dataContent)[0],
        search: '',
        name: this.dataName,
        isActive: false,
      }
    },
    props: ['dataContent', 'dataName'],
    methods: {
        makeSelection: function(key){
            this.currentIndex = this.data[''+ key +''];
            this.currentKey = key;
        },
      toggleClass: function(){
        this.isActive = !this.isActive;
      },
    },
      created: function(){
        console.log('contri', this.dataContent);
      },
    computed:{
      result:function(){
        var result = {},
            rgxp = new RegExp(this.search, 'i');

        if(this.search == ''){
            //console.log('no', this.dataContent);
          return this.data;
        }

        for (var index in this.data){
          if(this.data[index].search(rgxp) != -1){
            result[index] = this.data[index];
          }
        }

        return result;
      },
    }
  }
</script>
<style scoped>

.form-label{
  z-index: 20;
  width: 100%;

}
.wrap-drop {
  position: relative;
  cursor: pointer;
  z-index: 1;
  line-height: 1;
  cursor: default;
}

.wrap-drop .selected-el {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  z-index: 2;
  color: #fff;
  cursor:pointer;
  border-radius: 25px;
}
.wrap-drop.active {
  z-index:2;
}
.wrap-drop .selected-el span {
  position: relative;
  padding-right: 20px;
  width: 100%;
  line-height: 50px;
}

.wrap-drop .selected-el span:before {
  content: '\e935';
  font-family: 'icomoon';
  position: absolute;
  top: 50%;
  right: 0px;
  font-size: 8px;
  height: 4px;
  line-height: 4px;
  transform: translateY(-50%) rotate(180deg);
  transform-origin: bottom;
  transition: transform .3s;
}

.wrap-drop.active .selected-el span:before {
  transform: translateY(-50%) rotate(0deg);
}

.wrap-drop.active .wrap-drop__container {
  padding: 92px 48px 52px 48px;
  max-height: 520px;
  opacity: 1;
}

.wrap-drop.active .drop li {
  opacity: 1;
  transition: color .3s, opacity .3s;
  transition-delay: 0s, .2s;
}

.notfound{
  pointer-events: none;
  color: #979797!important;
}
.wrap-drop.active .drop li+.notfound{
  display: none;
}
.wrap-drop.active .form-label::before{
  content: '';
  display: block;
  width: calc(100% - 100px);
  height: 1px;
  position: absolute;
  left: 50px;
  bottom: 9px;
  background: #2c2c2c;
}

.form-input{
  padding: 0 50px;
  background: #1f1f1f;
}
.wrap-drop .wrap-drop__container {
  position: absolute;
  left: 0px;
  top: -32px;
  background: #1f1f1f;
  padding: 0px 48px 0px 48px;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.7);
  transition: max-height .4s , padding .4s,opacity .3s;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  width: 100%;
}
.wrap-drop .drop{
  overflow-x:hidden;
  max-height: 380px;
}
.wrap-drop .drop::-webkit-scrollbar {
  width: 2px;
}
.wrap-drop .drop::-webkit-scrollbar-track {
  background: #0f0f0f; 
}
.wrap-drop .drop::-webkit-scrollbar-thumb {
  background: #323232; 
}

.wrap-drop .drop li {
  color: #fff;
  opacity: 0;
  transition: color .3s, opacity .15s;
  transition-delay: 0;
  cursor:pointer;
}

.wrap-drop .drop li.selected {
  color: #979797;
  pointer-events: none;
}

.wrap-drop .drop li + li {
  margin-top: 24px;
}

@media (min-width: 1025px) {
  .drop li:hover {
    color: #ffa700;
  }
}
</style>
