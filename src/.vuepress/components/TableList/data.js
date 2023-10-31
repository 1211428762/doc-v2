export default {
  "perform": {
    "tableHead": [
      {
        "prop": "id",
        "label": "ID"
      },
      {
        "prop": "taskName",
        "label": "Task Name"
      },
      {
        "prop": "custom",
        "label": "Custom",
        "isCheckTag": true // Add a field to determine
      },
      {
        "prop": "time",
        "label": "Time"
      },
      {
        "prop": "place",
        "label": "Location"
      }
    ],
    "tableData": [
      {
        "id": 1,
        "taskName": "National People's Congress Meeting Tracking Report",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        "custom": "https://picsum.photos/id/377/200/200",
        "place": "314 Jingyue Street, Economic Development Zone, Changchun, Jilin Province"
      },
      {
        "id": 2,
        "taskName": "National People's Congress Meeting Tracking Report",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        "custom": "https://picsum.photos/id/42/200/200",
        "place": "314 Jingyue Street, Economic Development Zone, Changchun, Jilin Province"
      },
      {
        "id": 3,
        "taskName": "National People's Congress Meeting Tracking Report",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        "custom": "https://picsum.photos/id/41/200/200",
        "place": "314 Jingyue Street, Economic Development Zone, Changchun, Jilin Province"
      },
      {
        "id": 4,
        "taskName": "National People's Congress Meeting Tracking Report",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        "custom": "https://picsum.photos/id/40/200/200",
        "place": "314 Jingyue Street, Economic Development Zone, Changchun, Jilin Province"
      },
      {
        "id": 5,
        "taskName": "National People's Congress Meeting Tracking Report",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        "custom": "https://picsum.photos/id/39/200/200",
        "place": "314 Jingyue Street, Economic Development Zone, Changchun, Jilin Province"
      },
      {
        "id": 6,
        "taskName": "National People's Congress Meeting Tracking Report",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        "custom": "https://picsum.photos/id/38/200/200",
        "place": "314 Jingyue Street, Economic Development Zone, Changchun, Jilin Province"
      },
      {
        "id": 7,
        "taskName": "National People's Congress Meeting Tracking Report",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        "custom": "https://picsum.photos/id/37/200/200",
        "place": "314 Jingyue Street, Economic Development Zone, Changchun, Jilin Province"
      },
      {
        "id": 8,
        "taskName": "National People's Congress Meeting Tracking Report",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        "custom": "https://picsum.photos/id/36/200/200",
        "place": "314 Jingyue Street, Economic Development Zone, Changchun, Jilin Province"
      },
      {
        "id": 9,
        "taskName": "National People's Congress Meeting Tracking Report",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        "custom": "https://picsum.photos/id/35/200/200",
        "place": "314 Jingyue Street, Economic Development Zone, Changchun, Jilin Province"
      },
      {
        "id": 10,
        "taskName": "National People's Congress Meeting Tracking Report",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        "custom": "https://picsum.photos/id/34/200/200",
        "place": "314 Jingyue Street, Economic Development Zone, Changchun, Jilin Province"
      },
      {
        "id": 11,
        "taskName": "National People's Congress Meeting Tracking Report",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        "custom": "https://picsum.photos/id/33/200/200",
        "place": "314 Jingyue Street, Economic Development Zone, Changchun, Jilin Province"
      },
      {
        "id": 12,
        "taskName": "National People's Congress Meeting Tracking Report",
        "time": "2019-10-12 10:00 ~ 2019-10-13 10:00",
        "custom": "https://picsum.photos/id/32/200/200",
        "place": "314 Jingyue Street, Economic Development Zone, Changchun, Jilin Province"
      }
    ],
    "addBtnList": {
      "property": {
        width: 200, // Column width
        label: "Actions",
        class: "text-center test" // Add class to the column
      },
      "button": [
        {
          info: "Edit", // Text
          method: "edit", // Method name
          icon: "el-icon-edit", // Icon, supports element-ui icons
          type: "primary", // element-ui button type property
          iconColor: "white", // Icon color
          fontColor: "white" // Font color
        },
        {
          info: "Delete",
          method: "delete"
        }
      ]
    }
  }
};
