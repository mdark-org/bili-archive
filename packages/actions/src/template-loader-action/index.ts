import * as core from "@actions/core";
import { ResultTemplate } from '../shared/type.js'
import { testRule } from '../shared/test-rule.js'
import { modifyTemplate } from '../shared/template.js'
import { format } from '../shared/format.js'
import { ruleLoader } from '../shared/rule-loader.js'
import { loadScript } from '../shared/load-script.js'

const input = core.getInput("variable");
const rulePath = core.getInput("rule-path") || ".autodoc/rules"

const presetFilepathTemplate = core.getInput("preset-filepath-template") || undefined
const presetSystemPromptTemplate = core.getInput("preset-system-prompt-template") || undefined
const presetPromptTemplate = core.getInput("preset-prompt-template") || undefined
const presetMarkdownTemplate = core.getInput("preset-markdown-template") || undefined
const presetCommitMessageTemplate = core.getInput("preset-commit-message-template") || undefined

const applyScript = async (template: ResultTemplate,script?: string) => {
  let applied = false
  if(script) {
    try {
      const scriptPath = format(script, {video: data, platform: 'bilibili'})
      const { template: fn } = await loadScript(scriptPath)
      if(fn && typeof fn == 'function') {
        let result = fn(data)
        if(result && typeof result === 'object') {
          applied = modifyTemplate(template,result)
        }
      }
    }catch (e) {
      applied = false
      core.notice(`load and execute script from ${script} failed, ${e}`)
    }
  }
  return applied
}

const loadPresetTemplate = () => {
  return {
    filepath: presetFilepathTemplate,
    prompt: {
      user: presetPromptTemplate,
      system: presetSystemPromptTemplate,
    },
    markdown: presetMarkdownTemplate,
    'commit-message': presetCommitMessageTemplate
  }
}

const data = JSON.parse(input)
const presetTemplate = loadPresetTemplate()



const rules = await ruleLoader(rulePath)



outer: for(const rule of rules.match) {
  if(rule.platform) {
    const platformRuleKey = Object.keys(rule.platform)
    for(const key of platformRuleKey) {
      const platform = rule.platform[key as keyof typeof rule.platform]
      const condition = platform.condition
      const scriptApplied = await applyScript(presetTemplate, platform.script)
      if(scriptApplied || testRule(condition, data)) {
        // apply platform-specific(like bilibili output audio) template
        modifyTemplate(presetTemplate, platform.template)
        modifyTemplate(presetTemplate, rule.fallback)
        break outer
      }
    }
  }
}
modifyTemplate(presetTemplate, rules.fallback)




core.setOutput('filepath-template', presetTemplate.filepath)
core.setOutput('system-prompt-template', presetTemplate.prompt?.system)
core.setOutput('prompt-template',  presetTemplate.prompt?.user)
core.setOutput('markdown-template',  presetTemplate.markdown)
core.setOutput('commit-message-template', presetTemplate['commit-message'])
