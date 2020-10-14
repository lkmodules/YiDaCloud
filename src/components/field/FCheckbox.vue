<template>
  <el-checkbox-group :size="size" v-model="value" :border="field.border">
    <el-checkbox
      v-for="option in field.options"
      :key="option.id"
      :label="option.id">{{option.name}}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  name: 'FCheckbox',
  props: {
    value: {
      type: String,
      default: ''
    },
    field: {
      type: Object,
      default: () => {}
    },
    size: {
      type: String,
      default: ''
    }
  }
}
</script>