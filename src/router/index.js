import Vue from 'vue'
import Router from 'vue-router'
import '../../config/ant-design-vue.config'
import TodoList from '@/components/TodoList'
import 'ant-design-vue/dist/antd.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todolist',
      component: TodoList
    }
  ]
})
