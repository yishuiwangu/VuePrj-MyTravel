<template>
   <div>
     <div class="banner" @click="handleBannerClick">
       <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1705/c2/c2249cf7d5ae5b71a3.img.jpg_600x330_2dd75e54.jpg" />
       <div class="banner-info">
         <div class="banner-title">澳门巴黎人自助餐厅</div>
         <div class="banner-number">
            <span class="iconfont banner-icon">&#xe692;</span>
            55
         </div>
       </div>
     </div>
     <common-gallary :imgs="imgs" v-show="showGallary"
     @close="handleGallaryClick"
     ></common-gallary>
   </div>
</template>

<script>
import CommonGallary from '../../../common/gallary/Gallary.vue'
export default{
    name: 'DetailBanner',
    data () {
      return {
        showGallary: false,
        imgs: [ 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
            'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png']
      }
    },
    methods: {
      handleBannerClick: function(){
        this.showGallary = true
      },
      handleGallaryClick: function(){
        this.showGallary = false
      }
    },
    components:{
      CommonGallary
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #FFFFFF
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        margin-top .14rem
        padding 0 .4rem
        line-height .32rem
        height .32rem
        border-radius .2rem
        background rgb(0,0,0,.8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
