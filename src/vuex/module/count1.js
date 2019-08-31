export default {
  namespaced: true, // 必须加它不然报错
  state: {
    count: 0,
    idCount: 0,
    hasComplete: false
  },
  getters: {
  },
  mutations: {
    add (state) {
      state.count++
    },
    sub (state) {
      state.count--
    },
    setCount (state, count) {
      state.count = count
    },
    addIdCount (state) {
      state.idCount++
    },
    changeComplete (state) {
      if (state.hasComplete) {
        state.hasComplete = false
      } else {
        state.hasComplete = true
      }
    }
  }
}
