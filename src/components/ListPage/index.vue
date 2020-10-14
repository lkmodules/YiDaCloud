<template>
  <div :class="cls">
    <div ref="form" :class="cls+'-form'">
      <el-form :label-width="template.form.labelWidth" :label-position="template.form.labelPosition" >
        <el-row :gutter="template.form.gutter">
          <el-col v-for="(field, index) in template.form.formItems" :key="index" :span="template.form.colspan*field.span">
            <el-form-item :label="field.label" :required="field.required">
              <component :is="getFieldComponent(field.renderType)" :value="data[field.fieldKey]" :field="field" :size="template.form.size"></component>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div ref="toolbar" :class="cls+'-toolbar'">
      <div :class="cls+'-toolbar-left'">
        <el-button size="small" v-for="item in template.toolbar.left" :key="item.label" :type="item.type" :icon="item.icon">{{item.label}}</el-button>
      </div>
      <div :class="cls+'-toolbar-right'">
        <el-button size="small" v-for="item in template.toolbar.right" :key="item.label" :type="item.type" :icon="item.icon">{{item.label}}</el-button>
      </div>
    </div>
    <div ref="grid" :class="cls+'-grid'">
      <el-table :data="data.details" border show-summary :height="height" style="width: 100%">
        <el-table-column v-for="item in template.grid.columns" :key="item.label" 
          :label="item.label" :prop="item.prop" :width="item.width" :type="item.type">
        </el-table-column>
      </el-table>
    </div>
    <div ref="pagination" :class="cls+'-pagination'">
      <div :class="cls+'-pagination-left'">
        显示第{{data.pagination.pageSize*(data.pagination.currentPage-1)+1}}条到第{{data.pagination.pageSize*data.pagination.currentPage}}条记录，总共{{data.pagination.total}}条记录，每页显示{{data.pagination.pageSize}}条记录
      </div>
      <div :class="cls+'-pagination-right'">
        <el-pagination
          style="float:right"
          :class="cls+'-pagination-right-el'"
          background
          layout="sizes, prev, pager, next"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="data.pagination.currentPage"
          :page-sizes="[20, 50, 100, 500]"
          :page-size="data.pagination.pageSize"
          :total="data.pagination.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>

const cls = 'list-page'

import FInput from '@/components/field/FInput.vue'
import FAutocomplete from '@/components/field/FAutocomplete.vue'
import FSelect from '@/components/field/FSelect.vue'
import FRemoteSelect from '@/components/field/FRemoteSelect.vue'
import FPick from '@/components/field/FPick.vue'
import FDatepick from '@/components/field/FDatepick.vue'
import FDaterange from '@/components/field/FDaterange.vue'
import FRadio from '@/components/field/FRadio.vue'
import FCheckbox from '@/components/field/FCheckbox.vue'
import FTextarea from '@/components/field/FTextarea.vue'

export default {
  name: 'ListPage',
  components: {
    FInput,
    FAutocomplete,
    FSelect,
    FRemoteSelect,
    FPick,
    FDatepick,
    FDaterange,
    FRadio,
    FCheckbox,
    FTextarea
  },
  props: {
    template: {
      type: Object,
      default: () => {}
    },
    data: {
      type: Object,
      default: () => {}
    },
  },
  data () {
    return{
      cls,
      currentPage: 1,
      height: 400,
    }
  },
  mounted () {
    this.getGridHeight()
  },
  methods: {
    getFieldComponent (renderType) {
      switch (renderType) {
        case 'input':
          return FInput
        case 'autocomplete':
          return FAutocomplete
        case 'select':
          return FSelect
        case 'remoteSelect':
          return FRemoteSelect
        case 'pick':
          return FPick
        case 'datepick':
          return FDatepick
        case 'daterange':
          return FDaterange
        case 'radio':
          return FRadio
        case 'checkbox':
          return FCheckbox
        case 'textarea':
          return FTextarea
      }
    },
    getGridHeight () {
      this.$nextTick(() => {
        const winH = document.body.clientHeight
        const navbarH = 50
        const tabsH = 34
        const formH = this.$refs.form.offsetHeight
        const toolbarH = this.$refs.toolbar.offsetHeight
        const paginationH = 42
        this.height = winH - navbarH - tabsH - formH - toolbarH - paginationH - 10
      })
    },
    handleSizeChange () {

    },
    handleCurrentChange () {

    },
  }
}
</script>

<style>
@import "./index.scss";
</style>