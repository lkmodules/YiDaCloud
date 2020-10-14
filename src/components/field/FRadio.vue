<template>
  <el-radio-group :size="size" v-model="value" :border="field.border">
    <el-radio
      v-for="option in field.options"
      :key="option.id"
      :label="option.id">{{option.name}}
    </el-radio>
  </el-radio-group>
</template>

<script>
export default {
  name: 'FRadio',
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