import * as core from "@actions/core";
import { Condition } from './type.js'

type RuleItem = {
  key: string;
  cond: string;
};

const applyRuleItem = (rule: RuleItem, data: any) => {
  try {
    const keys = rule.key.split(".");
    let cur = data;
    for (const key of keys) {
      cur = cur[key];
    }
    const v = cur?.toString();
    if (v === rule.cond) return true;
    const reg = new RegExp(rule.cond);
    return reg.test(v);
  } catch (e) {
    core.warning(
      // @ts-ignore
      `some error happen while applying rule ${JSON.stringify(rule)}: ${e?.message}`,
    );
    return false;
  }
};

type Matcher = (rule: RuleItem, value: any) => boolean

const applyAndRule = (rules: RuleItem[], data: any, matcher:Matcher = applyRuleItem) => {
  if (rules.length === 0) return true;
  for (const rule of rules) {
    const ok = applyRuleItem(rule, data);
    if (!ok) return ok;
  }
  return true;
};

const applyOrRule = (rules: RuleItem[], data: any, matcher:Matcher = applyRuleItem) => {
  if (rules.length === 0) return true;
  for (const rule of rules) {
    const ok = applyRuleItem(rule, data);
    if (ok) return ok;
  }
  return false;
};

export const testRule = (
  matchRule: Condition,
  data: any,
  matcher: Matcher | undefined = undefined,
  cur: "and" | "or" = "and",
) => {
  try {
    const subAndRule = matchRule.and;
    const subOrRule = matchRule.or;
    delete matchRule["and"];
    delete matchRule["or"];
    let subAndRuleRes = true;
    let subOrRuleRes = true;
    if (subAndRule) {
      subAndRuleRes = testRule(subAndRule, data, matcher, "and");
    }
    if (subOrRule) {
      subOrRuleRes = testRule(subOrRule, data, matcher, "or");
    }
    if (cur === "and" && !(subAndRuleRes && subOrRuleRes)) return false;
    if (cur === "or" && (subAndRuleRes || subOrRuleRes)) return true;
    const conds = Object.keys(matchRule).map((key) => ({
      key: key,
      cond: matchRule[key],
    }));
    if (cur === "and") return applyAndRule(conds, data, matcher);
    if (cur === "or") return applyOrRule(conds, data, matcher);
    core.warning(`unexpected match rule type: ${JSON.stringify(matchRule)}`);
    return false;
  } catch (e) {
    core.warning(`some error happen while apply rules, ${e?.toString()}`);
    return false;
  }
};
