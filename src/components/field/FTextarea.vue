<template>
  <el-input type="textarea" :size="size"
    v-model="value" :placeholder="field.placeholder" :rows="field.rows" :maxlength="field.maxlength" :minlength="field.minlength" 
    show-word-limit clearable></el-input>
</template>

<script>
export default {
  name: 'FTextarea',
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