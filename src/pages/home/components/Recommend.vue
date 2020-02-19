<template>
  <div>
      <div class="title">热销推荐</div>

      <ul>

          <!-- border-bottom 1像素边框 -->
          <router-link tag="li" :to="'/detail/'+item.id"
           class="item border-bottom "  v-for="item of list" :key="item.id">
            <img class="item-img" :src="item.imgUrl">
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
              <button class="item-button">查看详情</button>
            </div>
          </router-link>


      </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    props:{
      list: Array
    },
    data () {
      return {
        recommendList: [{
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1903/b0/b0a81289b537c934a3.water.jpg_200x200_816c0f59.jpg',
          title: '维多利亚海港',
          desc: '美轮美奂的世界夜景，港阔水深的天然良港'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1705/c2/c2249cf7d5ae5b71a3.img.jpg_200x200_a45459dc.jpg',
          title: '澳门巴黎人自助餐厅',
          desc: '旅客到港必游之地，和你的偶像合个影拍个照。'
        },
        {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1903/b0/b0a81289b537c934a3.water.jpg_200x200_816c0f59.jpg',
          title: '维多利亚海港',
          desc: '美轮美奂的世界夜景，港阔水深的天然良港'
        },
        // {
        //   id: '0004',
        //   imgUrl: 'https://imgs.qunarzz.com/sight/p0/1705/c2/c2249cf7d5ae5b71a3.img.jpg_200x200_a45459dc.jpg',
        //   title: '澳门巴黎人自助餐厅',
        //   desc: '旅客到港必游之地，和你的偶像合个影拍个照。'
        // },
        // {
        //   id: '0005',
        //   imgUrl: 'https://imgs.qunarzz.com/sight/p0/1903/b0/b0a81289b537c934a3.water.jpg_200x200_816c0f59.jpg',
        //   title: '维多利亚海港',
        //   desc: '美轮美奂的世界夜景，港阔水深的天然良港'
        // },
        // {
        //   id: '0006',
        //   imgUrl: 'https://imgs.qunarzz.com/sight/p0/1705/c2/c2249cf7d5ae5b71a3.img.jpg_200x200_a45459dc.jpg',
        //   title: '澳门巴黎人自助餐厅',
        //   desc: '旅客到港必游之地，和你的偶像合个影拍个照。'
        // },
        // {
        //   id: '0007',
        //   imgUrl: 'https://imgs.qunarzz.com/sight/p0/1903/b0/b0a81289b537c934a3.water.jpg_200x200_816c0f59.jpg',
        //   title: '维多利亚海港',
        //   desc: '美轮美奂的世界夜景，港阔水深的天然良港'
        // },
        // {
        //   id: '0008',
        //   imgUrl: 'https://imgs.qunarzz.com/sight/p0/1705/c2/c2249cf7d5ae5b71a3.img.jpg_200x200_a45459dc.jpg',
        //   title: '澳门巴黎人自助餐厅',
        //   desc: '旅客到港必游之地，和你的偶像合个影拍个照。'
        // }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent: .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width: 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #CCCCCC
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color white
</style>
