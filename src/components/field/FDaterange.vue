<template>
  <el-date-picker :size="size"
    v-model="value" :type="field.type" :format="field.format" :start-placeholde="field.startPlaceholde" 
    :end-placeholder="field.endPlaceholder" :range-separator="field.rangeSeparator"
    clearable></el-date-picker>
</template>

<script>
export default {
  name: 'FDaterange',
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