<template>
  <div class="assitant-view">
    <div class="intelVerifyTitle">
      <span>{{ intelVerifyTitle }}</span>
      <div @click="onClick">
        <yn-icon type="close" />
      </div>
    </div>

    <div class="intelVerifyContent">
      <!-- 申请人信息 -->
      <yn-collapse
        v-model="activeKey"
        v-if="head && body[0]"
        class="applicantInfo"
      >
        <yn-collapse-panel :header="head" key="1">
          <div v-for="(item, key) in body" :key="key" class="attrItem">
            {{ item.name }} {{ item.value }}
          </div>
        </yn-collapse-panel>
      </yn-collapse>
      <!-- TODO 这里能有组件属性提示吗 -->
      <div>
        <RuleCollapse></RuleCollapse>

        <!-- <RuleCollapse
          :title="title3"
          :list="ruleItems3"
          :type="type3"
        ></RuleCollapse> -->
      </div>

      <!-- <RelativeCollapse></RelativeCollapse> -->

      <!-- <FeeTrend></FeeTrend> -->
      <!-- <FeeTrend2></FeeTrend2> -->
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
import queryString from "query-string";

import {
  IntelApplicantInfoModule,
  IIntelApplicantInfoState
} from "@/store/modules/intelVerifyApplicantInfo";

import RuleCollapse from "@/views/applications/components/RuleCollapse.vue";
import RelativeCollapse from "@/views/applications/components/RelativeCollapse.vue";
import FeeTrend from "@/views/applications/components/FeeTrend.vue";
import FeeTrend2 from "@/views/applications/components/FeeTrend2";

declare global {
  interface Window {
    _onClick: any;
  }
}

// The @Component decorator indicates the class is a Vue component
// All component options are allowed in here
// template: '<button @click="onClick">Click!</button>'
type ApplicantInfoType = Record<string, string | number>;

const parsed = queryString.parse(decodeURIComponent(location.search));
console.log("parsed:", parsed);
if (parsed.usedArea) {
  const decoded: IIntelApplicantInfoState = JSON.parse(parsed.usedArea);
  console.log("decoded:", decoded);
  IntelApplicantInfoModule.Init(decoded);
}

@Component({
  components: {
    RuleCollapse,
    RelativeCollapse,
    FeeTrend,
    FeeTrend2
  }
})
export default class extends Vue {
  // Initial data can be declared as instance properties
  intelVerifyTitle: string = "审单助手";
  activeKey = ["1"];

  get head() {
    return IntelApplicantInfoModule.head;
  }
  get body() {
    return IntelApplicantInfoModule.body;
  }

  @Watch("activeKey")
  activeKeyFun(key) {}
  // Component methods can be declared as instance methods
  onClick(): void {
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
#app {
  background: rgb(244, 244, 244);
}
.applicantInfo {
  .ant-collapse-content-box {
    width: 70%;

    .attrItem {
      display: inline-block;
      width: 50%;
    }
  }
}
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
  padding-left: 1rem;
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
  box-shadow: inset 0 -1px 0 0 #e4e4e4;
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
