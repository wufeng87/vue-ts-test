// 用于测试tsx
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import "yn-p1/libs/components/yn-echart/";
import { VNode } from "vue";
import { IntelVerifyRuleAreaModule } from "@/store/modules/intelVerifyRuleArea";

// import "./FreeTrend2.less";

@Component({
  name: "FreeTrend",
  components: {}
})
export default class extends Vue {
  //   @Prop({ required: true }) private title!: string;

  lnOptions: any = {
    // title: {
    //   text: "折线图堆叠"
    // },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      y: "bottom",
      icon: "rect",
      itemHeight: 3,
      data: ["C1", "ECS", "元年云业务"]
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      height: 300,
      x: "12%",
      y: "12%",
      x2: "12%",
      y2: "12%",
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "2012年",
        "2013年",
        "2014年",
        "2015年",
        "2016年",
        "2017年",
        "2018年"
      ]
    },
    yAxis: {
      type: "value",
      axisLabel: { formatter: "{value} 万" }
    },
    series: [
      {
        name: "元年云业务",
        type: "line",
        stack: "总量",
        data: [120, 132, 101, 134, 90, 230, 210],
        itemStyle: {
          normal: {
            color: "yellow"
          }
        }
      },
      {
        name: "ECS",
        type: "line",
        stack: "总量",
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: "C1",
        type: "line",
        stack: "总量",
        data: [150, 232, 201, 154, 190, 330, 410]
      }
    ]
  };

  // 柱状图
  ccOptions = {
    // title: {
    //   text: "",
    //   subtext: ""
    // },
    tooltip: {
      trigger: "axis"
    },
    grid: {
      height: 300,
      x: "12%",
      y: "12%",
      x2: "12%",
      y2: "12%"
    },
    legend: {
      y: "bottom",
      icon: "rect",
      itemHeight: 8,
      data: ["共享业务", "管会业务"]
    },
    // toolbox: {
    //   show: true,
    //   feature: {
    //     mark: { show: true },
    //     dataView: { show: true, readOnly: false },
    //     magicType: { show: true, type: ["line", "bar"] },
    //     restore: { show: true },
    //     saveAsImage: { show: true }
    //   }
    // },
    calculable: true,
    xAxis: [
      {
        type: "value",
        // type: "category",
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ]
      }
    ],
    yAxis: [
      {
        type: "category",
        // type: "value",
        axisLabel: { formatter: "{value} W" }
      }
    ],
    series: [
      {
        name: "共享业务",
        type: "bar",
        data: [120, 149, 170, 123, 125, 176, 135, 162.2, 132, 120, 164, 133],
        markPoint: {
          data: [
            { type: "max", name: "最大值" },
            { type: "min", name: "最小值" }
          ]
        },
        markLine: {
          data: [{ type: "average", name: "平均值" }]
        },
        itemStyle: {
          normal: {
            color: "green"
          }
        }
      },
      {
        name: "管会业务",
        type: "bar",
        data: [126, 159, 110, 164, 177, 170, 175, 182, 148, 118, 160, 123],
        markPoint: {
          data: [
            { type: "max", name: "最大值" },
            { type: "min", name: "最小值" }
          ]
        },
        markLine: {
          data: [{ type: "average", name: "平均值" }]
        }
      }
    ]
  };

  render() {
    return (
      <div>
        <div class="testJsx">{IntelVerifyRuleAreaModule.head[0].name}</div>
        <yn-echart options={this.lnOptions}></yn-echart>
        <yn-echart options={this.ccOptions}></yn-echart>
      </div>
    );
  }
}
