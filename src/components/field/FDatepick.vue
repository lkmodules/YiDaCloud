<template>
  <el-date-picker :size="size"
    v-model="value" :type="field.type" :format="field.format" :placeholder="field.placeholder" :maxlength="field.maxlength" :minlength="field.minlength" 
    clearable></el-date-picker>
</template>

<script>
export default {
  name: 'FDatepick',
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