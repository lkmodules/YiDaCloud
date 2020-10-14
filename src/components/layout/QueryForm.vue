<template>
  <div :class="cls">
    <el-form :label-width="config.labelWidth" :label-position="config.labelPosition" >
      <el-row :gutter="config.gutter">
        <el-col v-for="(field, index) in config.formItems" :key="index" :span="field.span">
          <el-form-item :label="field.label" :required="field.required">
            <component :is="getFieldComponent(field.renderType)" :value="data[field.fieldKey]" :field="field" :size="config.size"></component>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import FInput from '@/components/field/FInput.vue'
import FAutocomplete from '@/components/field/FAutocomplete.vue'
import FSelect from '@/components/field/FSelect.vue'
import FRemoteSelect from '@/components/field/FRemoteSelect.vue'
import FPick from '@/components/field/FPick.vue'
import FDatepick from '@/components/field/FDatepick.vue'
import FDaterange from '@/components/field/FDaterange.vue'
import FRadio from '@/components/field/FRadio.vue'
import FCheckbox from '@/components/field/FCheckbox.vue'
import FTextarea from '@/components/field/FTextarea.vue'
const cls = 'query-form'
const renderTypeEnum = {
  'input': FInput,
  'autocomplete': FAutocomplete,
  'select': FSelect,
  'remoteSelect': FRemoteSelect,
  'pick': FPick,
  'datepick': FDatepick,
  'daterange': FDaterange,
  'radio': FRadio,
  'checkbox': FCheckbox,
  'textarea': FTextarea
}
export default {
  name: 'QueryForm',
  components: { FInput, FAutocomplete, FSelect, FRemoteSelect, FPick, FDatepick, FDaterange, FRadio, FCheckbox, FTextarea },
  props: {
    config: {
      type: Object,
      default: () => {}
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      cls,
      renderTypeEnum
    }
  },
  methods: {
    getFieldComponent (renderType) {
      return renderTypeEnum[renderType]
    }
  },
  created () {
    
  },
}
</script>
<style lang="scss" scoped>
  .query-form {
    background-color: #fff;
    padding: 10px 10px 0 10px;
    box-shadow: 0 2px 4px rgb(178, 178, 178, 0.5);
  }
  .query-form .el-form-item {
    margin-bottom: 10px;
  }
</style>