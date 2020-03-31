

<template>
  <div class="assitant-view">
    <div>a1 {{ message }}</div>

    <yn-collapse v-model="activeKey">
      <yn-collapse-panel :header="card1Title" key="1">
        <div v-for="(list, key) in applicantInfo" :key="key">{{ key }} {{ list }}</div>
      </yn-collapse-panel>
    </yn-collapse>
  </div>
</template>
<script lang="ts">
// import Vue from "vue";
// import Component from "vue-class-component";
import { Component, Vue, Watch } from "vue-property-decorator";

import "yn-p1/libs/components/yn-collapse/";
import "yn-p1/libs/components/yn-collapse-panel/";

// The @Component decorator indicates the class is a Vue component
// All component options are allowed in here
// template: '<button @click="onClick">Click!</button>'
type ApplicantInfoType = Record<string, string | number>;

export default class extends Vue {
  // Initial data can be declared as instance properties
  message: string = "Hello!";
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

  @Watch("activeKey")
  activeKeyFun(key) {
    console.log(key);
  }
  // Component methods can be declared as instance methods
  onClick(): void {
    window.alert(this.message);
  }
}
</script>

<style scoped>
.assitant-view .ant-collapse-header {
  padding-left: 20px;
}
.assitant-view i.ant-collapse-arrow {
  right: 24px;
  left: auto !important;
}
.ant-collapse-item i.ant-collapse-arrow > svg {
  transform: rotate(-90deg);
}
</style>