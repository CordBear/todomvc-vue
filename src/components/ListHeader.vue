<template>
  <div class="list-header">
    <a-input placeholder="请输入待办事项" v-model="todoInput" @keyup.enter="addItem" ref="todoInput" size="large">
      <a-icon slot="prefix" :type="this.$store.state.list.todoCount > 0 ? 'check' : 'close'" @click="selectAll"/>
      <a-icon v-if="todoInput" slot="suffix" type="close-circle" @click="emitEmpty" />
    </a-input>
  </div>
</template>

<script>
export default {
  name: 'ListHeader',
  data () {
    return {
      todoInput: ''
    }
  },
  methods: {
    emitEmpty () {
      this.$refs.todoInput.focus()
      this.todoInput = ''
    },
    selectAll () {
      if (this.$store.state.list.todoCount > 0) {
        this.$store.commit('list/changeAll', true)
      } else {
        this.$store.commit('list/changeAll', false)
      }
    },
    // 添加item
    addItem () {
      if (this.todoInput === '') {
        return false
      }
      let item = {
        id: '' + this.$store.state.list.idCount,
        name: this.todoInput.trim(),
        completed: false
      }
      // console.log(item)
      this.$store.commit('list/addItem', item)
      this.todoInput = ''
    }
  }
}
</script>
<style>
.list-header .ant-input-affix-wrapper{
  height: 3vw;
  min-height: 40px;
  width: 100%;
}
.list-header .ant-input-affix-wrapper .ant-input-suffix {
    right: 22px;
}
.list-header .ant-input-lg {
  font-size: 13px;
  padding-left: 40px !important;
}
.list-header .anticon-close-circle {
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
  font-size: 16px;
}
.list-header .anticon-close-circle:hover {
  color: #999;
}
.list-header .anticon-close-circle:active {
  color: #666;
}
.list-header .ant-input-prefix{
  cursor: pointer;
  left: 15px;
}
input::-webkit-input-placeholder {
  color: #ccc;
}
input:-moz-placeholder {
  color: #ccc;
}
input::-moz-placeholder {
  color: #ccc;
}
input:-ms-input-placeholder {
  color: #ccc;
}

</style>
