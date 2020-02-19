import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  //   city: localStorage.city || '北京'
  // },
  //直接调用mutations,不经过actions
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //     //  console.log(city)
  //   }
  // },
  state,
  mutations
})
