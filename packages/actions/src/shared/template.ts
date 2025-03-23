import { ResultTemplate, Template } from './type.js'

export const modifyTemplate = (template: ResultTemplate, cur?: Template) => {
  let modified = false
  if(!template.prompt.system && typeof cur?.prompt?.system === 'string') {
    template.prompt.system = cur?.prompt?.system
    modified = true
  }
  if(!template.prompt.user && typeof cur?.prompt?.user === 'string') {
    template.prompt.user = cur?.prompt?.user
    modified = true
  }
  if(!template.filepath && typeof cur?.filepath === 'string') {
    template.filepath = cur?.filepath
    modified = true
  }
  if(!template.markdown  && typeof cur?.markdown === 'string') {
    template.markdown = cur?.markdown
    modified = true
  }
  if(!template['commit-message']  && typeof cur?.['commit-message'] === 'string') {
    template['commit-message'] = cur?.['commit-message']
    modified = true
  }
  return modified
}
