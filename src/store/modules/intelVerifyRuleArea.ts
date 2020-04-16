import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from "vuex-module-decorators";
// import { login, logout, getUserInfo } from "@/api/users";
// import { getToken, setToken, removeToken } from "@/utils/cookies";
// import router, { resetRouter } from "@/router";
// import { PermissionModule } from "./permission";
// import { TagsViewModule } from "./tags-view";
import store from "@/store";

/**
 *
 */
interface RuleAreaHead {
  //
  /**
   * 名称：高危、通过等
   */
  name: string;
  code: string;
  count: string;
}
interface RuleInfo {
  ruleName: string;
  invalidValue: string;
}
interface RuleAreaBody {
  code: string;
  name: string;
  count: string;
  value: RuleInfo[];
}
export interface IRuleAreaState {
  head: RuleAreaHead[];
  body: RuleAreaBody[];
}

@Module({ dynamic: true, store, name: "intelVerifyRuleArea" })
class IntelVerifyRuleArea extends VuexModule implements IRuleAreaState {
  /**
   * 名称：高危、通过等
   */
  public head: RuleAreaHead[] = [];
  public body: RuleAreaBody[] = [];

  @Mutation
  private SET_HEAD(head: RuleAreaHead[]) {
    this.head = head;
  }

  @Mutation
  private SET_BODY(body: RuleAreaBody[]) {
    this.body = body;
  }

  /**
   * 初始化
   */
  @Action
  public async InitRuleArea() {
    this.SET_HEAD([
      {
        name: "检查",
        code: "GW",
        count: "2"
      },
      {
        name: "通过",
        code: "GW",
        count: "3"
      },
      {
        name: "高危",
        code: "GW",
        count: "2"
      },
      {
        name: "可疑",
        code: "GW",
        count: "5"
      }
    ]);
    this.SET_BODY([
      {
        code: "GW",
        name: "高危",
        count: "2",
        value: [
          {
            ruleName: "发票有效期不在60天内",
            invalidValue: "发票日期:2019-01-01"
          },
          {
            ruleName: "发票有效期不在60天内2",
            invalidValue: "发票日期:2019-01-02"
          }
        ]
      },
      {
        code: "TG",
        name: "通过",
        count: "3",
        value: [
          {
            ruleName: "ok",
            invalidValue: "发票日期:2019-01-01"
          },
          {
            ruleName: "fine",
            invalidValue: "发票日期:2019-01-02"
          }
        ]
      }
    ]);
  }
}

export const IntelVerifyRuleAreaModule = getModule(IntelVerifyRuleArea);
