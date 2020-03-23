<template>
  <div id="app">
    <yn-spin :spinning="spinning" size="large">
      <yn-locale-provider :locale="locale">
        <MainFrame />
      </yn-locale-provider>
    </yn-spin>
  </div>
</template>

<script>
import AppRouter from "yn-p1/libs/config/navi/router";
import MainFrame from "./components/ui/MainFrame.vue";
import "yn-p1/libs/themes/style/yn-app.less";
import "yn-p1/libs/components/yn-spin/";
import "yn-p1/libs/components/yn-locale-provider/";
import UiUtils from "yn-p1/libs/utils/UiUtils";
import DsUtils from "yn-p1/libs/utils/DsUtils";
import RouterUtils from "yn-p1/libs/utils/RouterUtils";
import { APPS, BACKEND } from "@/config/SETUP";

export default {
  name: "app",
  data() {
    return {
      screenWidth: 0,
      spinning: false,
      locale: null
    };
  },
  beforeCreate() {
    DsUtils.init(BACKEND.BASE_URL, APPS.NAME);
    UiUtils.init(this);
    RouterUtils.init(this);
  },
  components: {
    MainFrame
  },
  created() {
    let language = APPS.LANGUAGE || "zh_CN";
    import(`ant-design-vue/lib/locale-provider/${language}`).then(m => {
      this.locale = m.default;
    });
    AppRouter.loadMenu(this);
  },
  methods: {
    setWidth() {
      this.screenWidth = document.body.offsetWidth;
    }
  },
  mounted() {
    let that = this;
    that.setWidth();
    window.onresize = () => {
      that.setWidth();
    };
  }
};
</script>

<style>
#app > .ant-spin-nested-loading {
  height: 100%;
  position: static; /* fix the tree context menu position is not right issue. */
}
#app > .ant-spin-nested-loading > .ant-spin-container {
  position: static; /* fix the tree context menu position is not right issue. */
}

#app > .ant-spin-nested-loading > div > .ant-spin-spinning {
  max-height: inherit;
}
</style>
