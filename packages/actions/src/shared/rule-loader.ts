import glob from 'fast-glob'
import path from 'node:path'
import fsp from 'fs/promises'
import { parse } from 'yaml'
import { Rule } from './type.js'



export const ruleLoader = async (basePath: string) => {
  const rulePaths = await glob(path.join(basePath, '/**/*.rule.{yml, yaml}'))
  const rulePromise = await Promise.allSettled(rulePaths.map(it => loadRule(it)))
  const rules = rulePromise
        .filter(it => it.status == 'fulfilled')
        .map(it => it.value)
  const matchRules = rules.flatMap(it => it.match).filter(it => it != undefined)
  const listenRules = rules.flatMap(it => it.listen).filter(it => it != undefined)
  const fallbackRule = rules.flatMap(it => it.fallback).filter(it => it != undefined)

  const rule = {
    match: matchRules,
    listen: listenRules,
    // todo: add default fallback
    fallback: fallbackRule[0]
  }

  console.log("loaded-rule", rule)
  return rule
}

const loadRule = async (path: string) => {
  const ruleString = await fsp.readFile(path, 'utf8')
  const res = parse(ruleString) as Rule
  return res
}