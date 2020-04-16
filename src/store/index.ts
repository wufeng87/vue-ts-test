import Vue from "vue";
import Vuex from "vuex";

import { IRuleAreaState } from "./modules/intelVerifyRuleArea";
import { IIntelApplicantInfoState } from "./modules/intelVerifyApplicantInfo";

Vue.use(Vuex);

export interface IRootState {
  ruleArea: IRuleAreaState;
  applicantInfo: IIntelApplicantInfoState;
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({});
