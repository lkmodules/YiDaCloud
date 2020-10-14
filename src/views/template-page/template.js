export default {
  code: 200,
  message: '',
  data: {
    name: 'whList',
    page: [
      {
        layoutType: 'QueryForm',
        config: {
          labelPosition: 'left',
          labelWidth: '100px',
          size: 'small',
          gutter: 32,
          formItems: [
            {
                renderType: 'input',
                label: '盘点单号',
                span: 6,
                fieldKey: 'input',
                placeholder: '请输入盘点单号',
                disabled: false,
                required: true,
                maxlength: '',
                minlength: ''
            },
            {
                renderType: 'autocomplete',
                label: '盘点人员',
                span: 6,
                fieldKey: 'autocomplete',
                placeholder: '请输入盘点单号',
                disabled: false,
                url: 'a/b',
                required: false
            }, 
            {
                renderType: 'select',
                label: '本方公司',
                span: 6,
                fieldKey: 'select',
                placeholder: '请输入本方公司',
                disabled: false,
                required: false,
                multiple: false,
                options: [
                    {
                        id: '1',
                        name: '公司一'
                    },
                    {
                        id: '2',
                        name: '公司二'
                    },
                ]
            },
            {
                renderType: 'remoteSelect',
                label: '营运站点',
                span: 6,
                fieldKey: 'remoteSelect',
                placeholder: '请输入营运站点',
                disabled: false,
                required: false,
                url: ''
            },
            {
                renderType: 'pick',
                label: '盘库地点',
                span: 6,
                fieldKey: 'pick',
                placeholder: '请输入盘库地点',
                disabled: false,
                required: false,
                pickName: 'adressPick'
            },
            {
                renderType: 'textarea',
                label: '盘库总结',
                span: 24,
                fieldKey: 'textarea',
                placeholder: '请输入盘库总结',
                disabled: false,
                required: false
            },
          ]
        }
      },
      {
        layoutType: 'Toolbar',
        config: {
          left: [
            {
                label: '搜索',
                icon: 'el-icon-search',
                type: 'primary',
            },
            {
                label: '清空',
                icon: 'el-icon-search',
                type: 'default',
            },
            {
                label: '高级搜索',
                icon: 'el-icon-search',
                type: 'default',
            },
            {
                label: '设置',
                icon: 'el-icon-search',
                type: 'default',
            },
          ],
          right: [
            {
                label: '导出',
                icon: 'el-icon-search',
                type: 'default',
            },
          ]
        }
      },
      {
        layoutType: 'ListGrid',
        config: {
          columns: [
            {
                label: '序号',
                type: 'index',
                width: 60,
                align: 'center',
            },
            {
                type: 'selection',
                width: 60,
                align: 'center',
            },
            {
                label: '枚举类型',
                width: 120,
                align: 'left',
                prop: 'sheetType',
                type: 'enum',
                sortable: true,
                enumData: [
                    {
                        id: '0',
                        name: '库存盘点单'
                    },
                    {
                        id: '1',
                        name: '其他盘点单'
                    },
                ]
            },
            {
                label: '外链类型',
                width: 120,
                align: 'left',
                prop: 'link',
                type: 'link',
                linkType: '1'
            },
            {
                label: '普通类型',
                width: 200,
                align: 'left',
                prop: 'normal'
            },
            {
                label: '普通类型2',
                width: 200,
                align: 'left',
                prop: 'normal2'
            },
            {
                label: '普通类型3',
                width: 200,
                align: 'left',
                prop: 'normal3'
            },
            {
                label: '普通类型4',
                width: 200,
                align: 'left',
                prop: 'normal4'
            },
            {
                label: '普通类型5',
                width: 200,
                align: 'left',
                prop: 'normal5'
            },
            {
                label: '普通类型6',
                width: 200,
                align: 'left',
                prop: 'normal6'
            },
            {
                label: '金额格式化',
                width: 120,
                align: 'left',
                prop: 'amt',
                type: 'amt',
                format: '3'
            },
            {
                label: '数量格式化',
                width: 120,
                align: 'left',
                prop: 'qty',
                type: 'qty',
                format: '2'
            },
            {
                label: '日期格式化',
                width: 240,
                align: 'left',
                prop: 'date',
                type: 'date',
                format: 'yyyy-MM-dd'
            },
            // {
            //     label: '操作',
            //     width: 120,
            //     align: 'left',
            //     type: 'operate',
            //     operateList: [
            //         {
            //             label: '编辑'
            //         }
            //     ]
            // },
          ]
        }
      }
    ]
  }
}