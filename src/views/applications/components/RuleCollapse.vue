<template>
  <div>
    <!-- head区域 -->
    <div class="head-section">
      <div v-for="item in head" :key="item.name" class="head-item">
        {{ item.name }}规则：{{ item.count }}
      </div>
    </div>
    <!-- defaultActiveKey -->
    <yn-collapse
      class="rule-collapse"
      v-for="item in body"
      :key="item.name"
      :defaultActiveKey="item.code === 'TG' ? null : '1'"
    >
      <yn-collapse-panel key="1">
        <div slot="header">
          <span
            style="padding-right: 2px;"
            :class="{
              'high-risk': item.code !== 'TG',
              suspicious: item.code !== 'TG',
              pass: item.code === 'TG'
            }"
          >
            {{ item.name }}
          </span>
          ({{ item.count }}项)
        </div>
        <!-- TODO 滚动条 -->
        <div
          v-for="listItem in item.value"
          :key="listItem.ruleName"
          class="rule-item"
        >
          <span>{{ listItem.ruleName }}</span>
          <span>{{ listItem.invalidValue }}</span>
        </div>
      </yn-collapse-panel>
    </yn-collapse>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import "yn-p1/libs/components/yn-collapse/";
import "yn-p1/libs/components/yn-collapse-panel/";

import { IntelVerifyRuleAreaModule } from "@/store/modules/intelVerifyRuleArea";

IntelVerifyRuleAreaModule.InitRuleArea();

@Component({
  name: "RuleCollapse",
  components: {}
})
export default class extends Vue {
  get head() {
    return IntelVerifyRuleAreaModule.head;
  }

  get body() {
    return IntelVerifyRuleAreaModule.body;
  }
}
</script>

<style scoped lang="less">
.head-section {
  background: #fff;
  margin-bottom: 2px;
  padding: 1.1rem 1rem;

  .head-item {
    width: 50%;
    display: inline-block;
    text-align: left;
  }
}
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
