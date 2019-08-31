export default {
  namespaced: true, // 必须加它不然报错
  state: {
    list: [],
    idCount: 0,
    count: 0,
    todoCount: 0,
    completedCount: 0,
    filter: 'allList'
  },
  getters: {
  },
  mutations: {
    // 添加item
    addItem (state, item) {
      state.list.push(item)
      state.count++
      state.idCount++
      if (item.completed) {
        state.completedCount++
      } else {
        state.todoCount++
      }
    },
    // 删除item
    deleteItem (state, id) {
      for (let i in state.list) {
        if (state.list[i].id === id) {
          state.count--
          if (state.list[i].completed) {
            state.completedCount--
          } else {
            state.todoCount--
          }
          state.list.splice(i, 1)
          break
        }
      }
    },
    // 改变item状态
    changeStatus (state, id) {
      for (let i in state.list) {
        if (state.list[i].id === id) {
          if (state.list[i].completed) {
            state.list[i].completed = false
            state.completedCount--
            state.todoCount++
          } else {
            state.list[i].completed = true
            state.completedCount++
            state.todoCount--
          }
          break
        }
      }
    },
    // 改变所有item状态
    changeAll (state, status) {
      for (let i in state.list) {
        state.list[i].completed = status
      }
      if (status) {
        state.todoCount = 0
        state.completedCount = state.count
      } else {
        state.completedCount = 0
        state.todoCount = state.count
      }
    },
    // 改变过滤器
    changeFilter (state, filter) {
      state.filter = filter
    },
    // 清除已完成item
    deleteCompleteItem (state) {
      // 使用倒序方式解决splice删除不全问题
      for (let i = state.list.length - 1; i >= 0; i--) {
        if (state.list[i].completed) {
          state.count--
          if (state.list[i].completed) {
            state.completedCount--
          } else {
            state.todoCount--
          }
          state.list.splice(i, 1)
        }
      }
    },
    // 编辑item
    editText (state, obj) {
      for (let i in state.list) {
        if (state.list[i].id === obj.id) {
          state.list[i].name = obj.name
          break
        }
      }
    }
  },
  actions: {
  }
}
