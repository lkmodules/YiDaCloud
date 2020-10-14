import QueryForm from '@/components/layout/QueryForm.vue'
import Toolbar from '@/components/layout/Toolbar.vue'
import ListGrid from '@/components/layout/ListGrid.vue'
const layoutTypeEnum = { QueryForm, Toolbar, ListGrid }
export default {
  components: {
    QueryForm, Toolbar, ListGrid
  },
  data () {
    return {
      layoutTypeEnum,
    }
  },
  methods: {
    getLayoutType (layoutType) {
      return layoutTypeEnum[layoutType]
    }
  }
}