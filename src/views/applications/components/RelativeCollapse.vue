<template>
  <yn-collapse>
    <yn-collapse-panel :key="title">
      <div slot="header">
        <span>同事项历史单据</span>
        <yn-icon type="edit" />
        <yn-icon type="delete" />
        <yn-icon type="more" />
      </div>
      <!-- <div
        v-for="(item, index) in list"
        :key="item.title + index"
        class="rule-item"
      >
        <span>{{ item.title }}</span>
        <span>{{ item.date }}</span>
      </div> -->
      <div v-for="item in list" :key="item.title" class="rule-item">
        <span>{{ item.itemTitle }} {{ item.itemType }} </span>
        <span>{{ item.itemAmount }}</span>
      </div>
    </yn-collapse-panel>
  </yn-collapse>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import "yn-p1/libs/components/yn-collapse/";
import "yn-p1/libs/components/yn-collapse-panel/";
import "yn-p1/libs/components/yn-icon/";

@Component({
  name: "RelativeCollapse",
  components: {}
})
export default class extends Vue {
  // @Prop({ required: true }) private title!: string;
  //   @Prop({ required: true })
  private list: any[] = [
    {
      itemTitle: "费用报销单(BX24235wefwef)1",
      itemType: "差旅补贴",
      itemAmount: "400.00"
    },
    {
      itemTitle: "费用报销单(BX24235wefwef)2",
      itemType: "差旅补贴",
      itemAmount: "400.00"
    },
    {
      itemTitle: "费用报销单(BX24235wefwef)3",
      itemType: "差旅补贴",
      itemAmount: "400.00"
    }
  ];
}
</script>

<style scoped>
.ant-collapse-header span {
  margin-right: 6px;
}
i.anticon {
  margin-left: 10px;
  color: #0088ec;
}
.anticon-more {
  transform: rotate(90deg);
}
.rule-item {
  display: flex;
  justify-content: space-between;
}
</style>
