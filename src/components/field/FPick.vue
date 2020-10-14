<template>
  <div>
    <el-input v-model="value" :size="size" :placeholder="field.placeholder">
      <el-button slot="append" icon="el-icon-search" @click="btnClick"></el-button>
    </el-input>
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'FPick',
  props: {
    field: {
      type: Object,
      default: () => {}
    },
    value: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogTableVisible: false,
    }
  },
  methods: {
    btnClick () {
      this.dialogTableVisible = true
    }
  }
}
</script>

<style>

</style>