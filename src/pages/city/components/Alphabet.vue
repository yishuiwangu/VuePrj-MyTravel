<template>


    <ul class="list">
      <li class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="hhandleTouchEnd"
      @click="handleLetterClick"
      >{{item}}</li>
    </ul>



</template>

<script>
export default {
  name: 'CityAlphabet',
  props:{
    cities: Object
  },
  computed: {
    letters() {
      const letters = []

      for(let i in this.cities){

        letters.push(i)
      }
      return letters
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated (){
    /* A距离顶部的距离*/

    this.startY = this.$refs['A'][0].offsetTop
  },
  methods:{
    handleLetterClick: function(e){
      /* 向外出发事件 传递e.target.innerText的值*/
      this.$emit('change',e.target.innerText)

    },
    handleTouchStart: function(){
        this.touchStatus = true
    },
    handleTouchMove: function(e){
        if(this.touchStatus){

          if(this.timer){
            clearTimeout(this.timer)
          }
          /* 函数截流 提升性能*/
          this.timer = setTimeout(()=>{
            const touchY = e.touches[0].clientY -79
            const index = Math.floor((touchY - this.startY )/20)
            if(index >= 0 && index < this.letters.length){
              this.$emit('change',this.letters[index])
            }
          },16)
        }
    },
    hhandleTouchEnd: function(){
        this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
