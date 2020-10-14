<template>
  <div :class="cls">
    <div :class="cls+'-table'">
      <el-table :data="data.details" border show-summary :height="height" style="width: 100%">
        <el-table-column v-for="item in config.columns" :key="item.label" 
          :label="item.label" :prop="item.prop" :width="item.width" :type="item.type">
        </el-table-column>
      </el-table>
    </div>
    <div :class="cls+'-pagination'">
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
const cls = 'list-grid'

export default {
  name: 'ListGrid',
  props: {
    config: {
      type: Object,
      default: () => {}
    },
    data: {
      type: Object,
      default: () => {}
    },
    height: {
      type: Number,
      default: 300
    }
  },
  data () {
    return {
      cls
    }
  },
  methods: {
    handleSizeChange () {

    },
    handleCurrentChange () {

    },
  },
  created () {
    
  },
  mounted () {},
}
</script>
<style lang="scss" scoped>
  .list-grid {
    background-color: #fff;
  }
  .list-grid-table {
    padding: 0 10px;
  }
  .list-grid-pagination {
    width: 100%;
    height: 42px;
    position: relative;
  }
  .list-grid-pagination-left {
    width: 100%;
    height: 100%;
    float: left;
    padding-left: 10px;
    line-height: 42px;
    color: #606266;
  }
  .list-grid-pagination-right {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    line-height: 42px;
  }
  .list-grid-pagination-right-el {
    height: 42px;
    padding-top: 7px;
    padding-right: 5px;
  }
</style>