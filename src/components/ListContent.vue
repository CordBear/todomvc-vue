<template>
  <div class="list-content">
    <div class="list-item" v-for="(item, i) in this.$store.state.list.list"
    :style="{display: (listfilter === 'allList') ||
    (listfilter === 'todoList'&& !item.completed) ||
    (listfilter === 'completedList' && item.completed)
     ? '' : 'none'}"
    :key="i" >
      <a-checkbox class="box" @click="onClick" @change="onChange" :checked="item.completed" :value="item.id">&nbsp;</a-checkbox>
      <label class="text" v-if="item.completed"><a-input  style="text-decoration:line-through" disabled :defaultValue="item.name"/></label>
      <label class="text" v-else  @dblclick="editText"><a-input disabled :defaultValue="item.name"/></label>
      <a-button class="destory" shape="circle" icon="close-circle" :itemindex="item.id" @click="deleteItem" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListContent',
  props: ['listfilter'],
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    onClick (e) {
      // console.log('修改：' + e.target.value)
      this.$store.commit('list/changeStatus', e.target.getAttribute('value'))
    },
    onChange () {
    },
    deleteItem (e) {
      // console.log('删除：' + e.target.getAttribute('itemindex'))
      this.$store.commit('list/deleteItem', e.target.getAttribute('itemindex'))
    },
    editText (e) {
      // e.target.removeAttribute('disabled')
      // e.target.focus()
      console.log('双击编辑')
    }
  }
}
</script>

<style>
.list-content{
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
}
.list-content .ant-radio-group{
  text-align: left;
  width: 100%;
  padding-left: 10px;
  background: #ffffff;
}
.list-content .ant-radio-wrapper{
  border-bottom: 1px solid #e6e6e6;
}
.list-item{
  height: 3vw;
  min-height: 40px;
  width: 100%;
  position: relative;
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
}
.list-item .box{
  position: absolute;
  top: 24%;
}
.list-item .text{
  word-break: break-all;
  padding-left: 26px;
  display: inline-block;
  line-height: 3;
  transition: color 0.4s;
  text-align: left;
  width: calc(100% - 60px);
}
.list-item .destory{
  border: none;
  top: 7%;
  -webkit-box-shadow: inherit;
  box-shadow: inherit;
}
.list-item .anticon-close-circle {
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
}
.list-item .anticon-close-circle:hover {
  color: #999;
}
.list-item .anticon-close-circle:active {
  color: #666;
}
.list-item .ant-input-disabled {
    background-color: inherit;
    opacity: inherit;
    cursor: inherit;
    color: inherit;
    border: none;
}
</style>
