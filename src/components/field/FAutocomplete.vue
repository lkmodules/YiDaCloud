<template>
  <el-input type="text" :size="size"
    v-model="value" :placeholder="field.placeholder" 
    clearable></el-input>
</template>

<script>
export default {
  name: 'FAutocomplete',
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