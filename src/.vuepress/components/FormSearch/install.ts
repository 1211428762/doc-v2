import FormInput from "./components/FormInput.vue";
import FormSelect from "./components/FormSelect.vue";
import FormDate from "./components/FormDate.vue";
import FormSearch from "./src/index.vue";
import type { App } from "vue";

export default {
  install(app: App): void {
    app.component(FormInput.name, FormInput);
    app.component(FormSelect.name, FormSelect);
    app.component(FormDate.name, FormDate);
    app.component(FormSearch.name, FormSearch);
  },
};
