<script setup>
import { ref } from 'vue';
import {
  DxChart,
  DxSeries,
  DxArgumentAxis,
  DxCommonSeriesSettings,
  DxLegend,
  DxMargin,
} from 'devextreme-vue/chart';
import service from '../utils/data.js';
import DxDropDownButton from 'devextreme-vue/drop-down-button';

const dataSource = ref(service.getPopulationData()[0]);
const seriesType = ref(service.getPopulationData()[1]);
const type = ref('stackedarea');
const switchViewState = ref(false);
const actions = ref([
  { id: 1, text: "2019" },
  { id: 2, text: "2020" },
]);

function switchView(e) {
  switchViewState.value = e.item.id === 2 ? true : false
}

</script>
<template>
  <div class="long-title">
    <h3>Costs</h3>
    <DxDropDownButton :items="actions" key-expr="id" display-expr="text" :use-select-mode="true" :selected-item-key="1"
      @selection-changed="switchView" />
  </div>
  <div id="chart-demo">
    <DxChart :data-source="dataSource" palette="Harmony Light" v-if="!switchViewState">
      <DxCommonSeriesSettings :type="type" argument-field="country" />
      <DxSeries v-for="s in seriesType" :key="s.valueField" :value-field="s.valueField" :name="s.name" />
      <DxMargin :bottom="20" />
      <DxArgumentAxis :value-margins-enabled="false" />
      <DxLegend vertical-alignment="bottom" horizontal-alignment="center" />
    </DxChart>
    <DxChart :data-source="dataSource" palette="Harmony Light" v-else>
      <DxCommonSeriesSettings :type="type" argument-field="country" />
      <DxSeries v-for="s in seriesType" :key="s.valueField" :value-field="s.valueField" :name="s.name" />
      <DxMargin :bottom="20" />
      <DxArgumentAxis :value-margins-enabled="false" />
      <DxLegend vertical-alignment="bottom" horizontal-alignment="center" />
    </DxChart>
  </div>
</template>

<style>
.options {
  padding: 20px;
  background-color: rgba(191, 191, 191, 0.15);
  margin-top: 20px;
}

.option {
  margin-top: 10px;
}

.caption {
  font-size: 18px;
  font-weight: 500;
}

.option>span {
  margin-right: 10px;
}

.option>.dx-widget {
  display: inline-block;
  vertical-align: middle;
}
</style>