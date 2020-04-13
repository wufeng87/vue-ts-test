<template>
  <yn-collapse class="rule-collapse">
    <yn-collapse-panel :key="title">
      <div slot="header">
        <span
          style="padding-right: 2px;"
          :class="{
            'high-risk': RuleTypes.HighRisk === type,
            suspicious: RuleTypes.Suspicious === type,
            pass: RuleTypes.Pass === type
          }"
        >
          {{ title }}
        </span>
        ({{ list.length }}项)
      </div>
      <!-- TODO 滚动条 -->
      <div v-for="item in list" :key="item.title" class="rule-item">
        <span>{{ item.title }}</span>
        <span>{{ item.date }}</span>
      </div>
    </yn-collapse-panel>
  </yn-collapse>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import "yn-p1/libs/components/yn-collapse/";
import "yn-p1/libs/components/yn-collapse-panel/";

export enum RuleTypes {
  HighRisk = 1,
  Suspicious,
  Pass
}
const typeColorMap = {
  [RuleTypes.HighRisk]: "red",
  [RuleTypes.Suspicious]: "red",
  [RuleTypes.Pass]: "green"
};
interface RuleItem {
  title: string;
  date: number;
}
@Component({
  name: "RuleCollapse",
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) private title!: string;
  @Prop({ required: true }) private type!: string;
  @Prop({ required: true }) private list!: RuleItem[];
  RuleTypes = RuleTypes;
}
</script>

<style scoped>
span.high-risk,
span.suspicious {
  color: #d0021b;
}
span.pass {
  color: #689f38;
}
.ant-collapse
  > .ant-collapse-item
  > .ant-collapse-header
  .ant-collapse-arrow
  path {
  color: #1e88e5;
}

.rule-item {
  display: flex;
  justify-content: space-between;
}
.rule-collapse {
}
</style>
