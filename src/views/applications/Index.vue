<template>
  <div class="assitant-view">
    <div class="intelVerifyTitle">
      <span>{{ intelVerifyTitle }}</span>
      <div @click="onClick">
        <yn-icon type="close" />
      </div>
    </div>

    <div class="intelVerifyContent">
      <yn-collapse v-model="activeKey">
        <yn-collapse-panel :header="card1Title" key="1">
          <div v-for="(list, key) in applicantInfo" :key="key">
            {{ key }} {{ list }}
          </div>
        </yn-collapse-panel>
      </yn-collapse>
      <!-- TODO 这里能有组件属性提示吗 -->
      <div>
        <RuleCollapse
          :title="title1"
          :list="ruleItems1"
          :type="type1"
        ></RuleCollapse>

        <RuleCollapse
          :title="title3"
          :list="ruleItems3"
          :type="type3"
        ></RuleCollapse>
      </div>

      <RelativeCollapse></RelativeCollapse>

      <FeeTrend></FeeTrend>
    </div>
  </div>
</template>
<script lang="ts">
// import Vue from "vue";
// import Component from "vue-class-component";
import { Component, Vue, Watch } from "vue-property-decorator";

import "yn-p1/libs/components/yn-collapse/";
import "yn-p1/libs/components/yn-collapse-panel/";
import "yn-p1/libs/components/yn-icon/";

import RuleCollapse from "@/views/applications/components/RuleCollapse.vue";
import { RuleTypes } from "@/views/applications/components/RuleCollapse.vue";
import RelativeCollapse from "@/views/applications/components/RelativeCollapse.vue";
import FeeTrend from "@/views/applications/components/FeeTrend.vue";

declare global {
  interface Window {
    _onClick: any;
  }
}

// The @Component decorator indicates the class is a Vue component
// All component options are allowed in here
// template: '<button @click="onClick">Click!</button>'
type ApplicantInfoType = Record<string, string | number>;

@Component({
  components: {
    RuleCollapse,
    RelativeCollapse,
    FeeTrend
  }
})
export default class extends Vue {
  // Initial data can be declared as instance properties
  intelVerifyTitle: string = "审单助手";
  card1Title = "申请人信息";
  activeKey = ["1"];
  applicantInfo: ApplicantInfoType = {
    信用等级: "A",
    信用分: 108,
    借款未还: "10,000.00",
    申请未使用: "3,000.00",
    累积提单: 39,
    累积退单: 9,
    累积退单率: "24%"
  };

  title1 = "高危";
  ruleItems1 = [
    { title: "发票有效期不在60天内1", date: "发票日期：2019-01-01" },
    { title: "发票有效期不在60天内2", date: "发票日期：2019-01-01" },
    { title: "发票有效期不在60天内3", date: "发票日期：2019-01-01" }
  ];
  type1 = RuleTypes.HighRisk;

  title3 = "通过";
  ruleItems3 = [{ title: "符合标准", date: "2019-01-01" }];
  type3 = RuleTypes.Pass;

  @Watch("activeKey")
  activeKeyFun(key) {
    console.log(key);
  }
  // Component methods can be declared as instance methods
  onClick(): void {
    debugger;
    const json = {
      hideFloat: true
    };
    window.top.postMessage(JSON.stringify(json), "*");
    window._onClick && window._onClick();
  }
}
</script>

// scoped
<style lang="less">
.assitant-view {
  background: rgb(244, 244, 244);
  .ant-collapse {
    margin-bottom: 4px;
    border-radius: 0;
  }
  .rule-collapse.ant-collapse:last-child {
    margin-bottom: 4px;
  }
  .ant-collapse > .ant-collapse-item {
    border-bottom: none;
  }
}
.assitant-view .rule-collapse.ant-collapse {
  margin-bottom: 2px;
}

.assitant-view .ant-collapse > .ant-collapse-item > .ant-collapse-header {
  padding-left: 20px;
}
.assitant-view i.ant-collapse-arrow {
  right: 24px;
  left: auto !important;
}
.ant-collapse-item i.ant-collapse-arrow > svg {
  transform: rotate(-90deg);
}
.assitant-view
  .ant-collapse
  > .ant-collapse-item
  > .ant-collapse-header
  .ant-collapse-arrow
  path {
  color: #1e88e5;
}
.assitant-view .ant-collapse {
  background: #fff;
  border: none;
}
.assitant-view .ant-collapse > .ant-collapse-item:last-child,
.assitant-view
  .ant-collapse
  > .ant-collapse-item:last-child
  > .ant-collapse-header {
  border-radius: 0;
}

.intelVerifyTitle {
  align-items: center;
  display: flex;
  justify-content: space-between;
  background: rgb(247, 247, 247);
  //  #f8f8f8;
  height: 48px;
  padding: 0 16px;
  font-size: 16px;

  i {
    color: rgb(154, 154, 154);
  }
}
.intelVerifyContent {
  padding: 8px;
}
</style>
