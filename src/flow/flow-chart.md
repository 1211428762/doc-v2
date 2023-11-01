<h1>Flowchart</h1>
This primarily includes the basic functionalities for creating, updating, and deleting flowchart nodes, as well as styling options and data printing operations.

<ClientOnly>
<FlowChart style="width:1000px !important; position: relative; left: -170px;"></FlowChart>
</ClientOnly>

### Attributes

| Attribute      | Type   | Description (see examples for details)      |
| -------------- | ------ | ------------------------------------------ |
| nodeItemList   | array  | A list of nodes displayed on the left for dragging and dropping |
| nodeList       | array  | A collection of nodes within the flowchart. These can be dragged and are used to convert data into flowchart elements |
| linkList       | array  | A collection of lines within the flowchart. These can be dragged and are used to convert data into flowchart elements |
| lineStyle      | object | Styling options for the lines in the flowchart |
| height         | string | The height of the flowchart, default is "600px" |

Example
::: details View Code

```js
 nodeItemList: [
    {
      meta: {
        label: "Start", // Name of the flowchart block
        type: "start",  // Types: "task", "finish", "start", "end", "default". Determines the icon of the flowchart block
        shape: "rect",  // Shape of the block. Default is "rect", other options are "ellipse", "rect", "diamond", "circle"
      }
    }
  ]
// To display nodes and links when the flowchart loads, pass nodeList and linkList.
 nodeList: [
    {
      "id": "nodegtEfnLITiPkkactm", // Format of the id is "node" followed by random alphanumeric characters (0-9A-Za-z), similar to a UUID
      "width": 100, // Width and height of the flowchart block. Customization not recommended
      "height": 50,
      "coordinate": [   // Coordinates for the block. The current canvas origin (top-left) is (0,0). The first value is the x-axis offset, and the second is the y-axis offset
        96.5625,
        304.53125
      ],
      "meta": {
        "label": "Start",
        "name": "Start",
        "type": "start"
      }
    }
  ]
  linkList: [
    {
      "id": "linkUvCdsP55ZQdHDn5R",
      "startId": "nodeZi3EZgYkE5IWy6HX", // Id of the starting node for the link. Must be synchronized with the nodes
      "endId": "node7ebfDyh191SgD4ZX", // Id of the ending node for the link. Must be synchronized with the nodes
      "startAt": [  // Starting position of the link relative to the flowchart block. For a rectangle, default positions are (0,25), (0,50), (0,75), etc. based on the block's width and height
        50,
        50
      ],
      "endAt": [ // Position where the link ends on the ending flowchart block
        0,
        25
      ],
      "meta": null // Text on the link. If there is text, pass meta: { desc: 'text' }
    }
  ]
lineStyle: {
    color: "#666666", // Line color
    hover: "#000", // Line color on hover
    textColor: "#666666", // Text color on the line description
    textHover: "#333", // Text color on hover
    font: "16px Arial", // Font for the line description. Refer to canvas font for settings
    dotted: false, // Whether it's a dotted line
}
```

:::

### Event

| Name       | Description                             |
| ---------- | -------------------------------- |
| chart-data | Returns the formatted flowchart data (string) |

::: details View Code

```vue
<template>
  <flow-chart height="600px" @chart-data="chartData" :lineStyle="lineStyle" />
</template>
<script>
export default {
  data() {
    return {
      lineStyle: {
        color: '#666666', // Line color
        hover: '#000', // Line hover color
        textColor: '#666666', // Line description text color
        textHover: '#333', // Line description text hover color
        font: '16px Arial', // Line description text font settings, reference to canvas font
        dotted: false, // Whether it is a dashed line
      },
    }
  },
  methods: {
    chartData(data) {
      console.log(data)
    },
  },
}
</script>
```

:::
