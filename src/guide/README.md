# CMS Component Form and Table 

## **Introduction**

Given the continuous accumulation of code and the resulting complexity, maintenance can become a daunting task over time. To make coding more enjoyable and avoid unnecessary repetition of `<el-form>`, `<el-form-item>`, `<el-table>`, and `<el-table-column>` tags, we introduce FormList and TableList components. These components are built entirely based on Element UI and Vue 2.x.

Let's say goodbye to repetitive tags and make our "bricklaying" work more enjoyable. This component is ideal for intermediate and below-level business scenarios.

<cube/><pet/>

# Common Examples

### Input Example

<FormList :fieldList="input" :footer="false"></FormList>

::: details Code

```vue
<template>
  <div>
    <FormList :fieldList="formItem" :footer="false"></FormList>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formItem: [{ type: 'input', label: 'Input Field', rules: [{ required: true }] }],
    }
  },
}
</script>

```

:::

### Select Example

<FormList :fieldList="select" :footer="false"></FormList>

::: details Code

```vue
<template>
  <div>
    <FormList :fieldList="formItem" :footer="false"></FormList>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formItem: [
        {
          type: 'select',
          label: 'Dropdown',
          list: [
            {
              label: 'Option 1',
              value: 1,
            },
            {
              label: 'Option 2',
              value: 2,
            },
          ],
          multiple: true, // Multi-select, other select component properties can also be used, see details in the Element UI documentation
        },
      ],
    }
  },
}
</script>
```

:::

### Radio Example

<FormList :fieldList="radio" :footer="false"></FormList>

::: details Code

```vue
<template>
  <div>
    <FormList :fieldList="formItem" :footer="false"></FormList>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formItem: [
        {
          type: 'radio',
          list: [
            { value: 0, label: 'Option 1' },
            { value: 1, label: 'Option 2' },
          ],
        },
      ],
    }
  },
}
</script>

```

:::

### Basic Table Example

<br>
<TableList 
      :tableData="tableData"
      :tableHead="tableHead"
      :addBtnList="addBtnList"
      :loading="false"
      multiOperateText='Batch deletion'
      showCheckbox></TableList>

::: details View Code

```vue
<template>
  <div>
    <TableList
      :tableData="tableData"
      :tableHead="tableHead"
      :addBtnList="addBtnList"
      :loading="false"
      showCheckbox
    ></TableList>
  </div>
</template>
<script>
export default {
  data() {
    return {
      totalCount: 4,
      curPage: 1,
      pageSize: 3,
      loading: true,
      tableHead: [
       {
          prop: 'first', // Field Name
          label: 'Test Column 1',
          width: 150, // Column Width
          class: 'text-center test', // Add Class to Column
        },
        {
          prop: 'second',
          label: 'Test Column 2',
          width: 150,
          class: 'text-center',
        },
      ],
      tableData: [
        {
          first: 'Programmer',
          second: 'Programmer in Female Attire',
        },
        {
          first: 'Checked Shirt',
          second: 'Pleated Skirt',
        },
        {
          first: 'Five Years Single, Three Years as a Dog',
          second: 'In the Grass✿, Adored by Thousands',
        },
        {
          first: 'Mediterranean',
          second: 'Wig Piece',
        },
      ],
      addBtnList: {
        property: {
          width: 200, // Column Width
          label: 'Action',
          class: 'text-center test', // Add Class to Column
        },
        button: [
           {
            info: 'Edit', // Text
            method: 'edit', // Method Name
            icon: 'el-icon-edit', // Icon, supports Element UI icons
            type: 'primary', // Element UI button type property
            iconColor: '#e4f9f5', // Icon Color
            fontColor: '#e4f9f5', // Font Color
          },
          {
            info: 'Delete',
            method: 'delete',
          },
        ],
      },
    }
  },
}
</script>
```

:::

<script>
export default {
  data() {
    return {
      input: [
        {
          type: "input",
          label: "Input",
          rules: [{ required: true }],
        },
      ],
      select: [
        {
          type: "select",
          label: "Select",
          list: [
            {
              label: "Options1",
              value: 1,
            },
            {
              label: "Options2",
              value: 2,
            },
          ],
          multiple: true, // 多选,select组件 其他属性也可以,详情见ele
        },
      ],
      radio: [
      {
        type: "radio",
        list: [
          { value: 0, label: "Radio1" },
          { value: 1, label: "Radio1" },
        ],
      },
    ],
      totalCount: 4,
      curPage: 1,
      pageSize: 3,
      loading: true,
      tableHead: [
       {
          prop: 'first', // Field Name
          label: 'Test Column 1',
          width: 150, // Column Width
          class: 'text-center test', // Add Class to Column
        },
        {
          prop: 'second',
          label: 'Test Column 2',
          width: 150,
          class: 'text-center',
        },
      ],
      tableData: [
        {
          first: 'Programmer',
          second: 'Programmer in Female Attire',
        },
        {
          first: 'Checked Shirt',
          second: 'Pleated Skirt',
        },
        {
          first: 'Five Years Single, Three Years as a Dog',
          second: 'In the Grass✿, Adored by Thousands',
        },
        {
          first: 'Mediterranean',
          second: 'Wig Piece',
        },
      ],
      addBtnList: {
        property: {
          width: 200, // Column Width
          label: 'Action',
          class: 'text-center test', // Add Class to Column
        },
        button: [
           {
            info: 'Edit', // Text
            method: 'edit', // Method Name
            icon: 'el-icon-edit', // Icon, supports Element UI icons
            type: 'primary', // Element UI button type property
            iconColor: '#e4f9f5', // Icon Color
            fontColor: '#e4f9f5', // Font Color
          },
          {
            info: 'Delete',
            method: 'delete',
          },
        ],
      },
    };
  },
  methods:{
    delete(item,id){
      console.log(item,id);
    }
  }
};
</script>

[View Complete Example](./complete/)
