<template>
  <div class="wrap-drop">
    <div class="selected-el el-c"><span>{{ currentIndex }}</span></div>
    <ul class="drop">
      <li v-bind:class="{ selected: currentIndex == data['' + key + ''] }" @click="(currentIndex = data[''+ key +''])" v-for='(item, key) in data'>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"selectmenu",
    data: function () {
      return {
        data: this.dataContent,
        currentIndex: Object.values(this.dataContent)[0],
      }
    },
    props: ['dataContent', 'dataTarget'],
    methods: {
    },
    created:function(){
    }
  }
</script>
<style scoped>
.wrap-drop {
  position: relative;
  cursor: pointer;
  z-index: 1;
  line-height: 1;
  cursor: default;
}

.wrap-drop .selected-el {
  position: relative;
  z-index: 2;
  color: #fff;
  cursor:pointer;
}

.wrap-drop .selected-el span {
  position: relative;
  padding-right: 20px;
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
.wrap-drop.active {
  z-index:2;
}
.wrap-drop.active .selected-el span:before {
  transform: translateY(-50%) rotate(0deg);
}

.wrap-drop.active .drop {
  padding: 100px 48px 52px 48px;
  max-height: 600px;
  opacity: 1;
}

.wrap-drop.active .drop li {
  opacity: 1;
  transition: color .3s, opacity .3s;
  transition-delay: 0s, .2s;
}

.wrap-drop .drop {
  position: absolute;
  left: -50px;
  top: -46px;
  background: #1f1f1f;
  padding: 0px 48px 0px 48px;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.7);
  transition: max-height .4s , padding .4s,opacity .3s;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  white-space: nowrap;
}

.wrap-drop .drop li {
  color: #fff;
  opacity: 0;
  transition: color .3s, opacity .15s;
  transition-delay: 0;
  cursor:pointer;
}

.wrap-drop .drop li:first-child {
  position: relative;
}

.wrap-drop .drop li:first-child:before {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  top: -18px;
  background: #2c2c2c;
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
