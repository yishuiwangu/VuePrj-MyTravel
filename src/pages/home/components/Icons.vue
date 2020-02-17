<template>
  <div class="icons">

    <swiper :options="swiperOption">
       <swiper-slide v-for="(page,index) of pages" :key="index">
         <div class="icon"
          v-for="item of page"
          :key="item.id"
         >
           <div class="icon-img">
              <img  class="icon-img-content" :src="item.imgUrl" />
           </div>
           <p class="icon-desc">{{item.desc}}</p>
         </div>
       </swiper-slide>

    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props:{
    list: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
      // iconList: [
      //   {
      //    id: '0001',
      //    imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
      //    desc: '热门景点'
      //   },
      //   {
      //    id: '0002',
      //    imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
      //    desc: '自然风光'
      //   },
      //   {
      //    id: '0003',
      //    imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
      //    desc: '热门景点'
      //   },
      //   {
      //    id: '0004',
      //    imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
      //    desc: '自然风光'
      //   },
      //   {
      //    id: '0005',
      //    imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
      //    desc: '热门景点'
      //   },
      //   {
      //    id: '0006',
      //    imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
      //    desc: '自然风光'
      //   },
      //   {
      //    id: '0007',
      //    imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
      //    desc: '热门景点'
      //   },
      //   {
      //    id: '0008',
      //    imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
      //    desc: '自然风光'
      //   },
      //   {
      //    id: '0009',
      //    imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
      //    desc: '泡温泉'
      //   }
      // ]
    }
  },
  computed: {
    pages() {
      const pages= []
      this.list.forEach((item,index)=>{
        const page = Math.floor(index/8)
        if(!pages[page]){
          pages[page]=[]
        }
        pages[page].push(item)

      })
      return pages
    }
  }

}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    overflow hidden
    height 0
    padding-bottom 50%
  .icons
    margin-top .1rem
    .icon
      position relative
      float left
      width 25%
      height 0
      padding-bottom 25%
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        .icon-img-content
          height 100%
          display block
          margin 0 auto
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        text-align center
        color $darkTextColor
        ellipsis()



</style>
