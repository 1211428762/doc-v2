  <div>
    <cube/><pet/>
    <h1>Region Selection</h1>
    <h3>Default</h3>
    <areaSelect></areaSelect>
    <h3>Hidden Region</h3>
    <areaSelect hideArea></areaSelect>
    <h3>Only Show Province</h3>
    <areaSelect onlyProvince></areaSelect>
    <h3>Grayed Out - provinceDisabled/cityDisabled/areaDisabled</h3>
    <areaSelect provinceDisabled cityDisabled areaDisabled> </areaSelect>
    <h3>Custom Placeholder</h3>
    <areaSelect :placeholders="placeholders"> </areaSelect>
    <h3>Initial Values</h3>
    <areaSelect
      @city-selected="citySelected"
      :province.sync="province"
      :city.sync="city"
      :area.sync="area"
    />
  </div>

<script>
export default {
  name: "",
  data() {
    return {
      province: "Guangdong",
      city: "Shenzhen",
      area: "Nanshan District",
      resetBtn: {
        word: "Reset",
      },
      placeholders: {
        province: "-- Please select province --",
        city: "-- Please select city --",
        area: "-- Please select area --",
      },
    };
  },
  methods: {
    citySelected(val) {
      console.log("Selected Region--->", val);
    },
  },
};
</script>

### Attributes

| Parameter        | Description           | Type            | Optional Values | Default |
| ----------------- | ---------------------- | --------------- | --------------- | ------- |
| province          | Province               | String, Number  | 10000, Beijing  |         |
| city              | City                   | String, Number  |                 |         |
| area              | Area                   | String, Number  |                 |         |
| hideArea          | Hide Area              | Boolean         |                 | false   |
| onlyProvince      | Only Show Province     | Boolean         |                 | false   |
| provinceDisabled  | Disable Province       | Boolean         |                 | false   |
| cityDisabled      | Disable City           | Boolean         |                 | false   |
| areaDisabled      | Disable Area           | Boolean         |                 | false   |
| placeholders      | Custom Placeholders    | Object          |                 |         |

### Event

| Name           | Description                                           |
| -------------- | ----------------------------------------------------- |
| reset          | Component data reset method, requires getting the component instance |
| city-selected  | Selected component data, returned in the format '{province:"xx",city:"xx",area:""}' |

::: details View Code

```vue
<template>
  <areaSelect />
  // Default
  <areaSelect hideArea />
  // Hidden Region
  <areaSelect onlyProvince />
  // Only Show Province
  <areaSelect provinceDisabled cityDisabled areaDisabled />
  // Disable Province, City, and Area
  <areaSelect :placeholders="placeholders" />
  //placeholders: { // province: "-- Please select province --", // city: "-- Please select city --", // area: "-- Please select area --", // }
  <areaSelect @city-selected="citySelected" :province.sync="province" :city.sync="city" :area.sync="area" />
  // Initial values and selected values, check the console
</template>
```

:::
