<template>
  <div class="todolist">
    <!-- 头部区域 -->
  <list-header/>
  <!-- 内容区域 -->
  <list-content :listfilter="this.$store.state.list.filter"></list-content>
  <!-- 脚部区域 -->
  <list-footer/>
  </div>
</template>

<script>
import ListHeader from './ListHeader.vue'
import ListContent from './ListContent.vue'
import ListFooter from './ListFooter.vue'
export default {
  name: 'TodoList',
  components: {
    ListHeader,
    ListContent,
    ListFooter
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    addItem (item) {
      this.$store.commit('list/addItem', item)
    }
  }
}
</script>

<style>
.todolist{
  width: 35vw;
  min-width: 350px;
  margin: 0 auto;
}
</style>
