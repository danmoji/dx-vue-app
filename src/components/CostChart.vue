<script setup>
import { ref } from "vue"
import {
  DxChart,
  DxSeries,
  DxValueAxis,
  DxLegend,
} from 'devextreme-vue/chart';
import { DxButton } from 'devextreme-vue/button';
import service from '../utils/data.js';

const colors = ['#6babac', '#e55253'];
const eventReference = ref(undefined)
const isFirstLevel = ref(true)
const dataSource = ref(service.filterCountryCosts(''))

function hanldeDblClick(e) {
  const height = e.target.getAttribute("height")
  //TODO rather calculate and then check for actual parent element height from data you receive
  if (isFirstLevel.value && (height > 1 && height < 400)) {
    isFirstLevel.value = false;
    dataSource.value = service.filterCountryCosts(eventReference.value.target.originalArgument);
  }
}

function customizePoint() {
  return {
    color: colors[Number(this.isFirstLevel)],
    hoverStyle: !this.isFirstLevel ? {
      hatching: 'none',
    } : {},
  }
}

function onPointClickGrabReference(e) {
  eventReference.value = e
}

function onButtonClick() {
  if (!isFirstLevel.value) {
    isFirstLevel.value = true;
    dataSource.value = service.filterCountryCosts('');
  }
}

</script>
<template>
  <div v-on:dblclick="hanldeDblClick">
    <div class="long-title">
      <h3>Revenue Last Year</h3>
      <DxButton :visible="!isFirstLevel" class="button-container" text="Back" icon="chevronleft" @click="onButtonClick" />
    </div>
    <DxChart id="cost-chart" :customize-point="customizePoint" :class="isFirstLevel ? 'pointer-on-bars' : ''"
      :data-source="dataSource" @point-click="onPointClickGrabReference">
      <DxSeries type="bar" />
      <DxValueAxis :show-zero="false" />
      <DxLegend :visible="false" />
    </DxChart>
  </div>
</template>

<style scoped>
#chart {
  height: 440px;
  width: 100%;
}

#chart.pointer-on-bars .dxc-series rect {
  cursor: pointer;
}

.button-container {
  text-align: center;
  height: 40px;
  position: relative;
  top: 7px;
  left: 0;
}

#cost-chart rect {
  height: 0 !important;
}
</style>