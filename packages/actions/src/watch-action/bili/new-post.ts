
import { getRecentPost } from '../../shared/api/bilibili/index.js'
import * as core from '@actions/core'
import { render } from 'micromustache'
import { modifyTemplate } from '../../shared/template.js'
import { format } from '../../shared/format.js'
import fs from 'fs'
import { loadScript } from '../../shared/load-script.js'
import { ResultTemplate,BiliPostListenRule } from '../../shared/type.js'

const createPreset = () => ({
  filepath: undefined,
  prompt: {
    user: undefined,
    system: undefined,
  },
  markdown: undefined,
  'commit-message': undefined
} as ResultTemplate)

export const handlePostRule = async (postRule: BiliPostListenRule) => {
  let preset = createPreset()
  const v = await getRecentPost(postRule)
  let filepath = undefined
  if(v && v.data) {
    const video = v.data.archives[0]
    core.debug(`load-listen-script-template: ${postRule.script}`)
    if(postRule.script) {
      const script = render(postRule.script, v.data)
      const { listen } = await loadScript(script)
      if(listen && typeof listen === 'function') {
        const { filepath: fp, template } = listen(v.data)
        if (fp && typeof fp === 'string') {
          filepath = fp
          if(template) modifyTemplate(preset, template)
        }
        core.debug(`script-execute-result, fp:${fp}, template: ${template}`)
      }
    }
    if(!filepath) {
      filepath = format(postRule.filepath, video, true)
    }
    if(filepath && !fs.existsSync(filepath)) {
      return {
        type: 'bilibili' as const,
        payload: {
          bvid: video.bvid,
          presetFilepathTemplate: filepath,
          presetSystemPromptTemplate: preset.prompt.system,
          presetPromptTemplate: preset.prompt.user,
          presetMarkdownTemplate: preset.markdown,
          presetCommitMessageTemplate: preset['commit-message'],
        }
      }
    }
  }
}