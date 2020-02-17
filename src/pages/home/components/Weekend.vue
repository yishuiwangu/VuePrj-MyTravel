<template>
  <div>
      <div class="title">周末去哪儿</div>

      <ul>
        <!-- border-bottom 1像素边框 -->
        <li class="item border-bottom "  v-for="item of list" :key="item.id">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl">
          </div>

          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>

          </div>

        </li>

      </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    props:{
      list: Array
    },
    data () {
      return {
        recommendList: [{
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/92/a17d7152f839e5.jpg_r_640x214_7fcfd5bb.jpg',
          title: '维多利亚海港',
          desc: '美轮美奂的世界夜景，港阔水深的天然良港'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/70/a6196946cf72.jpg_r_640x214_6482dda7.jpg',
          title: '澳门巴黎人自助餐厅',
          desc: '旅客到港必游之地，和你的偶像合个影拍个照。'
        },
        {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1602/7d/423a187b1303e.jpg_r_640x214_ba078703.jpg',
          title: '维多利亚海港',
          desc: '美轮美奂的世界夜景，港阔水深的天然良港'
        }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height .8rem
    background #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.5%
    background-color #00BCD4
  .item-img
    width 100%
  .item-info
    padding .1rem
  .item-title
    line-height .54rem
    font-size .32rem
    ellipsis()
  .item-desc
    line-height .4rem
    color #CCCCCC
    ellipsis()
</style>
