<template>
  <div :class="cls">
    <div :class="cls+'-left'">
      <el-button size="small" v-for="item in config.left" :key="item.label" :type="item.type" :icon="item.icon">{{item.label}}</el-button>
    </div>
    <div :class="cls+'-right'">
      <el-button size="small" v-for="item in config.right" :key="item.label" :type="item.type" :icon="item.icon">{{item.label}}</el-button>
    </div>
  </div>
</template>

<script>
const cls = 'toolbar'

export default {
  name: 'Toolbar',
  props: {
    config: {
      type: Object,
      default: () => {}
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      cls
    }
  },
  methods: {
    
  },
  created () {
    
  },
}
</script>
<style lang="scss" scoped>
  .toolbar {
    height: 40px;
    width: 100%;
    padding: 4px 10px;
    margin-top: 10px;
    background-color: #fff;
  }
  .toolbar-left {
    float: left;
  }
  .toolbar-right {
    float: right;
  }
  .toolbar::after{
    clear: both;
    content: '';
    display: block;
    width: 0;
    height: 0;
    visibility: hidden;
  }
</style>