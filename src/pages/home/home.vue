<template>

  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  

  </div>
</template>
<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper.vue'
  import HomeIcons from './components/Icons.vue'
  import HomeRecommend from './components/Recommend.vue'
  import HomeWeekend from './components/Weekend.vue'
  import axios from 'axios'
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    data() {
      return {
        city: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    methods:{
      getHomeInfo: function(){
        /* axios.get('http://127.0.0.1:9090/test/getHome') */
        /* 通告config/index.js配置 转发到/static/mock/index.json*/
        axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc: function(res){
        console.log(res)
        res = res.data
        console.log(res)
        if(res.ret && res.data){
          const data = res.data
          this.city = data.city
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      }
    },
    mounted() {
      this.getHomeInfo()
    }

  }
</script>

<style>

</style>
