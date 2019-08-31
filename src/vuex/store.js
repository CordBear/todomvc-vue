/* vuex的主目录 */
import Vue from 'vue'
import Vuex from 'vuex'
import list from './module/list'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    list
  }
})
