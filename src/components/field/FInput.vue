<template>
  <el-input type="text" :size="size"
    v-model="value" :placeholder="field.placeholder" :maxlength="field.maxlength" :minlength="field.minlength" 
    show-word-limit clearable></el-input>
</template>

<script>
export default {
  name: 'FInput',
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