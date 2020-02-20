<template>
  <div>
    <detail-banner
    :sightName="sightName"
    :bannerImg="bannerImg"
    :bannerImgs="gallaryImgs"
    >
    </detail-banner>

    <detail-header>
    </detail-header>

    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
  export default {
    name: 'Detail',
    components:{
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data () {
      return {
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        list: []
      }
    },
    methods: {
      getDetailInfo:  function() {
        axios.get('/api/detail.json',{
          params: {
            id: this.$route.params.id
          }
        }).then(this.handleGetDatatSucc)
      },
      handleGetDatatSucc: function(res){
        res = res.data
        if(res.ret && res.data){
          const data = res.data
          console.log(data)
          this.list = data.categoryList
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
        }
      }
    },

     mounted () {
        this.getDetailInfo()
      }
  }
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
