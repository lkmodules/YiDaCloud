<template>
  <div :id="name" :class="cls">
    <component :ref="layout.layoutType" v-for="(layout, index) in template" :key="layout.layoutType+index" :is="getLayoutType(layout.layoutType)" :config="layout.config" :data="data" :height="height"></component>
  </div>
</template>

<script>
import data from './data.js'
import template from './template.js'
import mainEmitter from './mainEmitter.js'
const cls = 'template-page'
export default {
  name: 'TemplatePage',
  mixins: [ mainEmitter ],
  data () {
    return {
      cls,
      data: {},
      template: {},
      name: '',
      height: 300
    }
  },
  created () {
    this.data = data.data
    this.template = template.data.page
    this.name = template.data.name
  },
  mounted () {
    this.getGridHeight()
  },
  methods: {
    getGridHeight () {
      this.$nextTick(() => {
        const winH = document.body.clientHeight
        const navbarH = 50
        const tabsH = 34
        const formH = this.$refs.QueryForm[0].$el.offsetHeight
        const toolbarH = this.$refs.Toolbar[0].$el.offsetHeight
        this.height = winH - navbarH - tabsH - formH - toolbarH - 10 - 42
      })
    },
  }
}
</script>
<style lang="scss" scoped>
  .template-page {
    background-color: #EBEBEB;
    padding: 0 6px;
  }
</style>