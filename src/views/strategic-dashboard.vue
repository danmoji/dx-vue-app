<script setup>
import {
  DxResponsiveBox, DxItem, DxLocation, DxCol, DxRow,
} from 'devextreme-vue/responsive-box';
import CostChart from "../components/CostChart.vue"
import RevenueChart from "../components/RevenueChart.vue"
import QualityHealthRadar from "../components/QualityHealthRadar.vue";
import ProcesSatusControl from '../components/ProcesStatusControl.vue';
import { ref, onMounted } from 'vue'
import { getFlows, getQualities, getProjects } from "../utils/api.js"
// import api from "../utils/api.js"
// import axios from "axios"
// import dataService from "../utils/data.js"

// const projects = dataService.getProjects()

// function handlePostProjects() {
//   for(const p of projects) {
//   try {
//     axios.post('http://localhost:5169/api/projects', p, {
//       'Content-Type': 'application/json'
//     })
//   } catch (e) {
//     console.log(e)
//   }
// }
// }

const flowsData = ref({})
const qualityData = ref({})
const projectsData = ref({})

onMounted(async () => {
  flowsData.value = await getFlows()
  qualityData.value = await getQualities()
  projectsData.value = await getProjects()
});

function screen(width) {
  return (width < 900) ? 'sm' : 'lg';
}
</script>

<template>
  <div>
    <h2 class="content-block">Strategic Dashboard</h2>
    <div class="content-block dx-card">
      <div class="dx-card responsive-paddings" id="page">
        <DxResponsiveBox :screen-by-width="screen" single-column-screen="sm">
          <DxRow :ratio="1" />
          <DxRow :ratio="1" />
          <DxCol :ratio="1" screen="lg" />
          <DxCol :ratio="1" screen="lg" />
          <DxCol :ratio="1" screen="lg" />
          <DxCol :ratio="1" screen="lg" />
          <DxCol :ratio="1" screen="lg" />
          <DxCol :ratio="1" screen="lg" />
          <DxItem>
            <DxLocation :row="0" :col="0" :colspan="3" screen="lg" />
            <DxLocation :row="0" :col="0" :colspan="1" screen="sm" />
            <div class="item">
              <QualityHealthRadar :props="qualityData" />
            </div>
          </DxItem>
          <DxItem>
            <DxLocation :row="0" :col="3" :colspan="3" screen="lg" />
            <DxLocation :row="1" :col="1" :colspan="1" screen="sm" />
            <div class="item">
              <CostChart :data="projectsData" />
            </div>
          </DxItem>
          <br>
          <DxItem>
            <DxLocation :row="1" :col="0" :colspan="4" screen="lg" />
            <DxLocation :row="2" :col="1" :colspan="2" screen="sm" />
            <div class="item">
              <RevenueChart :data="projectsData" />
            </div>
          </DxItem>
          <DxItem>
            <DxLocation :row="1" :col="4" :colspan="2" screen="lg" />
            <DxLocation :row="3" :col="1" :colspan="2" screen="sm" />
            <div class="item">
              <ProcesSatusControl :data="flowsData" />
            </div>
          </DxItem>
        </DxResponsiveBox>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
