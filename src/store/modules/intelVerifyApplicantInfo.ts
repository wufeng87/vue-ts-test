import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from "vuex-module-decorators";
import store from "@/store";

interface ApplicantInfoAttribute {
  code: string;
  name: string;
  value: any; // string | number;
}
/**
    {
        "head":"申请人信息",
        "body":[
            {"code":"XYDJ","name":"信用等级","value":"A"},
            {"code":"XYF","name":"信用分","value":100}
        ]
    }
   */

export interface IIntelApplicantInfoState {
  head: string;
  body: ApplicantInfoAttribute[];
}

@Module({ dynamic: true, store, name: "intelApplicantInfo" })
class IntelApplicantInfo extends VuexModule
  implements IIntelApplicantInfoState {
  public head: string = "";
  /**
   * 对象结构 {"code":"XYDJ","name":"信用等级","value":"A"},
   */
  public body: ApplicantInfoAttribute[] = [];

  @Mutation
  private SET_HEAD(head: string) {
    this.head = head;
  }

  @Mutation
  private SET_BODY(body: ApplicantInfoAttribute[]) {
    this.body = body;
  }

  /**
   * 初始化
   */
  @Action
  public async Init(info: IIntelApplicantInfoState) {
    if (!info.head) {
      return;
    }
    this.SET_HEAD(info.head);
    this.SET_BODY(info.body);
  }
}

export const IntelApplicantInfoModule = getModule(IntelApplicantInfo);
