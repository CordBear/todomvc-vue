<template>
  <div class="list-footer">
      <div class="count"><span style="left: 4%;">{{this.$store.state.list.count}} 条</span></div>
        <div class="condition">
            <div><span :class="{'active':isActiveAll}" @click="changeBtn">全部</span></div>
            <div><span :class="{'active':isActiveTodo}" @click="changeBtn">待办</span></div>
            <div><span :class="{'active':isActiveComplete}" @click="changeBtn">已完成</span></div>
        </div>
      <div class="clear"><span  v-show="this.$store.state.list.completedCount > 0" @click="deleteCompleteItem">清除已完成</span></div>
  </div>
</template>

<script>
export default {
  name: 'ListFooter',
  data () {
    return {
      isActiveAll: true,
      isActiveTodo: false,
      isActiveComplete: false
    }
  },
  methods: {
    changeBtn (e) {
      if (e.target.innerText === '全部') {
        this.isActiveAll = true
        this.isActiveTodo = false
        this.isActiveComplete = false
        this.$store.commit('list/changeFilter', 'allList')
      } else if (e.target.innerText === '待办') {
        this.isActiveAll = false
        this.isActiveTodo = true
        this.isActiveComplete = false
        this.$store.commit('list/changeFilter', 'todoList')
      } else {
        this.isActiveAll = false
        this.isActiveTodo = false
        this.isActiveComplete = true
        this.$store.commit('list/changeFilter', 'completedList')
      }
    },
    deleteCompleteItem () {
      this.$store.commit('list/deleteCompleteItem')
    }
  }
}
</script>

<style>
.list-footer{
  height: 3vw;
  min-height: 40px;
  width: 100%;
  background: #fff;
  position: relative;
  border-radius: 4px;
}
.list-footer:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
.list-footer span{
  padding: 3px 5px;
  border-radius: 3px;
  position: absolute;
  display: block;
  font-size: 13px;
  top: 15%;
}
.list-footer .count{
  width: 20%;
  height: 100%;
  float: left;
}
.list-footer .condition{
  width: 50%;
  height: 100%;
  float: left;
  position: relative;
}
.list-footer .clear{
  width: 30%;
  height: 100%;
  float: left;
  cursor: pointer;
}

.list-footer .condition div{
  width: 30%;
  height: 100%;
  float: left;
  cursor: pointer;
}
.list-footer .clear span:hover{
  text-decoration: underline;
}
.active{
  border: 1px solid #bbb7b7;
}
</style>
