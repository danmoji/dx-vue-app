
<script setup>
import {
  DxCircularGauge, DxScale, DxLabel, DxGeometry, DxValueIndicator,
} from 'devextreme-vue/circular-gauge';
import { ref, computed, defineProps } from "vue"
import DxDropDownButton from 'devextreme-vue/drop-down-button';
import { DxPopover } from 'devextreme-vue/popover';
// import data from '../utils/data';
// function customizeText({ valueText }) {
//   return `${valueText} %`;
// }

const props = defineProps({
  data: Array
})
console.log(props)
const actions = ref([
  { id: 1, value: 44 ,type: "needleOne", text: "Average Flow Efficiency", shortcut: "AFE", active: true, popOverContent: `
  Flow efficiency measures how much of
  the overall flow time is spent in value-added
  work activities vs. waiting between steps.` },
  { id: 2, value: 26, type: "needleTwo", text: "Average Flow Time", shortcut: "AFL", active: false, popOverContent: `
  Flow time measures the total time
  elapsed for all the steps in a workflow
  and is, therefore, a measure of the
  efficiency of the entire system.` },
  { id: 3, value: 34, type: "needleThree", text: "Average Flow Velocity", shortcut: "AFV", active: false, popOverContent: `
  Flow velocity measures the number of
  tasks completed in a given timeframe;
  this is also known as the system’s throughput.` },
]);

function switchView(e) {
  e.item.active = true
  e.previousItem.active = false
}

const filteredByAction = computed(() => actions.value.filter(action => action.active))


</script>

<template>
  <div>
    <div id="gauge-demo">
      <div class="long-title">
        <h3>Flow Metrics</h3>
        <DxDropDownButton :items="actions" key-expr="id" display-expr="shortcut" :use-select-mode="true"
          :selected-item-key="1" @selection-changed="switchView" />
      </div>
      <div v-for="a in filteredByAction" :key="a.id">

        <DxCircularGauge :id="a.type" :value="a.value" :title="a.text">
          <DxScale :start-value="0" :end-value="50" :tick-interval="5">
            <DxLabel  />
          </DxScale>
          <DxGeometry :start-angle="180" :end-angle="0" />
          <DxValueIndicator type="rectangleNeedle" color="#9B870C" />
        </DxCircularGauge>
        <DxPopover  :target="'#' + a.type" show-event="dxhoverstart" hide-event="dxhoverend" class="popover">
          <pre>
            {{ a.popOverContent }}
          </pre>
          </DxPopover>
      </div>

    </div>
  </div>
</template>
<style scoped>
.popover {
  width: 100px;
}
#chart-demo {
  width: 100%;
}

#rectangleNeedle,
#twoColorNeedle,
#triangleNeedle,
#rangebar,
#textCloud,
#triangleMarker {
  display: inline-block;
}

#rectangleNeedle,
#twoColorNeedle,
#rangebar,
#textCloud {
  margin-right: 4px;
}


#rangebar,
#triangleMarker {
  width: 32%;
}

#textCloud {
  width: 35%;
  vertical-align: bottom;
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
  text-align: center;
  margin-bottom: 20px;
}
</style>

<!-- 

  <template>
  <div>
    <DxCircularGauge
      id="gauge"
      :value="45"
    >
      <DxScale
        :start-value="0"
        :end-value="100"
        :tick-interval="10"
      >
        <DxLabel
          :customize-text="customizeText"
        />
      </DxScale>
      <DxRangeContainer>
        <DxRange
          :start-value="0"
          :end-value="20"
          color="#CE2029"
        />
        <DxRange
          :start-value="20"
          :end-value="50"
          color="#FFD700"
        />
        <DxRange
          :start-value="50"
          :end-value="100"
          color="#228B22"
        />
      </DxRangeContainer>
      <DxExport
        :enabled="true"
      />
      <DxTitle
        text="Battery Charge"
      >
        <DxFont
          :size="28"
        />
      </DxTitle>
    </DxCircularGauge>
  </div>
</template>
<script>
import {
  DxCircularGauge, DxScale, DxLabel, DxRangeContainer, DxRange, DxExport, DxTitle, DxFont,
} from 'devextreme-vue/circular-gauge';

export default {
  components: {
    DxCircularGauge, DxScale, DxLabel, DxRangeContainer, DxRange, DxExport, DxTitle, DxFont,
  },
  methods: {
    customizeText({ valueText }) {
      return `${valueText} %`;
    },
  },
};
</script>
<style scoped>
#gauge {
  height: 440px;
  width: 100%;
}
</style>


 -->