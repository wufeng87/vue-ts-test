

<template>
  <div>
    <div>a1 {{ message }}</div>

    <yn-collapse v-model="activeKey">
      <yn-collapse-panel header="This is panel header 1" key="1">
        <p>{{text}}</p>
      </yn-collapse-panel>
      <yn-collapse-panel header="This is panel header 2" key="2" :disabled="false">
        <p>{{text}}</p>
      </yn-collapse-panel>
      <yn-collapse-panel header="This is panel header 3" key="3" disabled>
        <p>{{text}}</p>
      </yn-collapse-panel>
    </yn-collapse>
  </div>
</template>
<script lang="ts">
// import Vue from "vue";
// import Component from "vue-class-component";
import { Component, Vue, Watch } from "vue-property-decorator";

import "yn-p1/libs/components/yn-card/";
import "yn-p1/libs/components/yn-collapse/";
import "yn-p1/libs/components/yn-collapse-panel/";

// The @Component decorator indicates the class is a Vue component
@Component({
  // All component options are allowed in here
  // template: '<button @click="onClick">Click!</button>'
  name: "A1"
})
export default class extends Vue {
  // Initial data can be declared as instance properties
  message: string = "Hello!";
  text =
    "A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.";
  activeKey = ["1"];

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
