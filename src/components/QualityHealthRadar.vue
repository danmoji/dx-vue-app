<script setup>
import { ref } from 'vue';
import DxDropDownButton from 'devextreme-vue/drop-down-button';
import service from '../utils/data.js';
import {
  DxPolarChart,
  DxCommonSeriesSettings,
  DxSeries,
} from 'devextreme-vue/polar-chart';

const dataSourceOne = ref(service.getTemperatureData()[0]);
const dataSourceTwo = ref(service.getTemperatureData()[1]);
const currentType = ref('area');
const switchViewState = ref(false);
const actions = ref([
  { id: 1, text: "2020" },
  { id: 2, text: "2021" },
]);

function switchView(e) {
  switchViewState.value = e.item.id === 2 ? true : false
}
</script>
<template>
  <div class="chart-wrapper">
    <div class="long-title">
      <h3>Quality Health Radar</h3>
      <DxDropDownButton :items="actions" key-expr="id" display-expr="text" :use-select-mode="true" :selected-item-key="1"
        @selection-changed="switchView" />
    </div>
    <div id="chart-demo" v-if="!switchViewState">
      <DxPolarChart id="radarChart" :data-source="dataSourceOne">
        <DxCommonSeriesSettings :type="currentType" />
        <DxSeries value-field="day" name="Our Company" color="#ba4d51" />
        <DxSeries value-field="night" name="Industry Benchmark" color="#5f8b95" />
        <!-- TODO add legend explaining the 4 categories of Quality -->
        <!-- TODO add add a tooltip explaining every item in detail and how its calculated -->
      </DxPolarChart>
    </div>
    <div id="chart-demo-two" v-else>
      <DxPolarChart id="radarChartTwo" :data-source="dataSourceTwo">
        <DxCommonSeriesSettings :type="currentType" />
        <DxSeries value-field="day" name="Our Company" color="#ba4d51" />
        <DxSeries value-field="night" name="Industry Benchmark" color="#5f8b95" />
      </DxPolarChart>
    </div>
  </div>
</template>
<style>

#chart-demo>.center {
  text-align: center;
}

#chart-demo>.center>div,
#chart-demo>.center>.dx-widget {
  display: inline-block;
  vertical-align: middle;
}

.long-title h3 {
  font-family:
    'Segoe UI Light',
    'Helvetica Neue Light',
    'Segoe UI',
    'Helvetica Neue',
    'Trebuchet MS',
    Verdana;
  font-weight: 200;
  font-size: 28px;
  text-align: left;
  display: inline-block;
  margin: 0;
  margin-bottom: 20px;
}

.long-title {
  display: flex;
  justify-content: space-between;
}
</style>