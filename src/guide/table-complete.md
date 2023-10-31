#### Complete Example

## Table Example

<cube/><pet/>
<TableList-example></TableList-example>
::: details View Code

```vue
<template>
  <div>
    <TableList
      :tableData="tableData"
      :tableHead="tableHead"
      :addBtnList="addBtnList"
      :loading="loading"
      :total="totalCount"
      :pageSize="pageSize"
      :currentPage="curPage"
      showCheckbox
      @page-change="pageChange"
      pagination
      @click-callback="listenCall"
      @multi-operate="multiOperate"
    >
      <template #content="{ curItem, curTablehead }">
        <!-- Check if it's a special column -->
        <div v-if="curTablehead.isCheckTag">
          <img :src="curItem" alt="" />
          <!-- You can add multiple special columns, continue adding 'if' conditions as needed -->
        </div>
        <span v-else>{{ curItem }}</span>
      </template>
      <template #emptyTable>
        <div class="emptyTable">No data available</div>
      </template>
    </TableList>
    <el-button @click="tableData = []"> Simulate No Data Scenario </el-button>
    <el-button @click="init"> Request Data </el-button>
  </div>
</template>
<script>
import mock from './data.js'
let data = mock.perform
export default {
  data() {
    return {
      totalCount: 12,
      curPage: 1,
      pageSize: 6,
      loading: true,
      tableHead: data.tableHead,
      tableData: [],
      addBtnList: data.addBtnList,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.tableData = data.tableData.slice(0, 6)
      setTimeout(() => {
        this.loading = false
      }, 300)
    },
    pageChange(val) {
      this.tableData = val > 1 ? data.tableData.slice(0, 6) : data.tableData.slice(6)
    },
    // Dynamically bind functions using this method
    listenCall(methodName, row, index) {
      this[methodName](row, index)
    },
    edit(row, index) {
      this.$message.warning(`Currently selected index is ${index}`)
    },
    delete(row, index) {
      this.$message.info(`Currently selected index is ${index}`)
    },
    multiOperate(items, ids) {
      if (ids.length) {
        this.$message.success(`Currently selected IDs are ${ids}`)
      } else {
        this.$message.error(`No data selected`)
      }
    },
  },
}
</script>

```

:::

### Attributes

| Parameter            | Description                                                                                                                                                                                                                                                                               | Type    | Options | Default |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :----- | :----- |
| tableHead       | Header information; an array of objects, each object should contain at least prop and label, which correspond to the field name and the displayed title, respectively. It can also include width for the current column's minimum width and class to add a class to the current column.                                                                                                                          | Array   |        | —      |
| headerCellStyle | ptional, header row style.                                                                                                                                                                                                                                                                 | Object  |        |        |
| tableData       |Table information; an array of objects, where each object corresponds to one row of information. The object's key corresponds to the prop in tableHead, and the value corresponds to the respective information. Extra fields are not displayed, and missing fields leave the position blank.                                                                                                                                    | Array   |        | —      |
| addBtnList      | Add an operation column with buttons at the end of the table. It's an object that should include a property object and a button array. property (operation column attributes) contains {width} for the column width, label for the displayed title, and class to add a class to the current column. The button array consists of objects with info for display information, method for the method name, icon for an icon, fontColor for text color, and iconColor for icon color. | Object  | —      | false  |
| showCheckbox    |Indicates whether to add a multi-select column. If true, a checkbox is added to the first column of the table for multi-selection, and a batch delete button is added to the lower-left corner of the table.                                                                                                                                              | boolean | —      | false  |
| pagination      | Optional, specifies whether a paginator is needed, and the paginator is located in the lower-right corner of the table.                                                                                                                                                                                                                        | boolean | —      | false  |
| total           |  The total number of data.                                                                                                                                                                                                                                                                         | number  |        | 0      |
| pageSize        | The number of items displayed per page.                                                                                                                                                                                                                                  | number  |        | 10     |
| currentPage     | Current page number.数                                                                                                                                                                                                                                                                           | number  |        | 1      |
| loading         | Indicates whether the table is in a loading state.                                                                                                                                                                                                                                                                    | boolean | —      | true   |

#### Attribute Usage Examples

::: details View Code

```vue
// template
<tablelist
  :loading="loading"
  :tableData="tableData"
  :tableHead="tableHead"
  :addBtnList="addBtnList"
  :headerCellStyle="headerCellStyle"
  :total="totalCount"
  :pageSize="pageSize"
  :currentPage="curPage"
  showCheckbox
>
</tablelist>

```

```js
// data
{
  loading: true,
  tableHead: [
    {
      prop: 'tenantName', // Field name
      label: 'tenantName', // Label text
      width: 150, // Column width
      class: 'text-center test', // Additional class for the column
    },
    {
      prop: 'deptName',
      label: 'deptName',
      width: 150,
      class: 'text-center',
    },
  ],
    tableData: [
      {
        tenantName: '111',
        deptName: 'Organization Department',
      },
      {
        tenantName: '111',
        deptName: 'Publicity Department',
      },
    ],
    addBtnList: {
      property: {
        width: 200,
        label: 'Action',
        class: 'text-center test',
      },
      button: [
        {
          info: 'Edit',
          method: 'edit',
          icon: 'el-icon-edit',
          type: 'primary',
          iconColor: 'red',
          fontColor: 'green',
        },
        {
          info: 'Delete',
          method: 'delete',
        },
      ],
  },
  headerCellStyle: {
    "background": "#F5F5FA",
    "color": "#8181A5",
    "font-size": "12px",
    "line-height": "18px",
  },
  totalCount: 100,
  curPage: 1,
  pageSize: 10,
}

```
:::

### Events

| Event Name    | Description                                           | Parameters                                      |
| :------------- | :---------------------------------------------------- | :----------------------------------------------- |
| click-callback | Triggers a custom event in the parent component.     | methodName: Custom method name, row: Current row data, index: Current row index |
| page-change    | Triggered when the currentPage changes.               | val: Current currentPage value                   |
| multi-operate  | If the showCheckbox attribute is enabled, a batch delete operation button will be available, and clicking it triggers this event. | items: All selected row data as an array, ids: If the data contains an id field, it returns an array of the selected row's ids, otherwise, it's an empty array. |


#### Event Example

::: details View Code

```vue
// template: Add to the property example
<tablelist @click-callback="listenCall" @page-change="pageChange" @multi-operate="multiOperate">
</tablelist>

```

```js
methods: {
  // Use this method to dynamically bind functions
  listenCall(methodName, row, index) {
    this[methodName](row, index);
  },
  edit(row, index) {
    // Edit logic
  },
  delete(row, index) {
    // Delete logic
  },
  pageChange(val) {
    // Page change logic
  },
  multiOperate(items, ids) {
    // Multi-operation logic
  },
}
```
:::

### Table Slot

| Name         | Description                                                                                                                                                                                                                                                                                                                                                              |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| content      | If you need to customize the presentation of table content, this slot may help you. It is bound to two values: `curItem` (the current table cell's content) and `curTablehead` (the current column's header information). You can add fields in `tableHead` to determine whether to customize the content for that column. The default presentation is text. |
| operate      | If you find that the style of the operation column doesn't meet your needs, this slot may help you. It is bound to a `row` value, providing the current row's information.                                                                                                                                                                                           |
| emptyTable   | Customize the content to display when the data is empty.                                                                                                                                                                                                                                                                                                                                                                              |


#### slot --- content Example

If the component configuration options don't meet your needs, you can use this slot.
::: details View Code

```vue
// Add to the template based on the attribute example
<tablelist>
  <!-- curItem is the current data, curTablehead is the current column header data -->
  <template #content="{ curItem, curTablehead }">
    <div v-if="curTablehead.isCheckTag">
      <el-tag v-if="curItem === 'Normal'">{{ curItem }}</el-tag>
      <el-tag v-else type="danger" @click="clicktest">
        {{ curItem }}
      </el-tag>
    </div>
    <span v-else>{{ curItem }}</span>
  </template>
</tablelist>

// data tableHead: [ { prop: 'tenantName', label: 'Tenant', width: 150, class: 'text-center test', isCheckTag: true, //
// Add fields to determine }
```

:::

#### slot --- operate Example

If the component configuration options don't meet your needs, you can use this slot.
::: details View Code

```vue
// Add to the template based on the attribute example; You still need to bind addBtnList to tablelist
<tablelist>
  <!-- row is the current row data -->
  <template #operate="{ row }">
    <el-button
      v-for="(item, index) in addBtnList.button"
      :key="index"
      @click.native.stop="listenCall(item.method, row)"  // Dynamically bind the method
      type="primary"
      size="small"
      round
    >
      <i class="el-icon-edit" style="color: red;"></i>
    </el-button>
  </template>
</tablelist>
```

:::
