<template>
  <el-select :size="size" v-model="value" :placeholder="field.placeholder" clearable :multiple="field.multiple">
    <el-option
      v-for="option in field.options"
      :key="option.id"
      :label="option.name"
      :value="option.id">
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'FSelect',
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