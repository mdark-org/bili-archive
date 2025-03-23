
import * as core from '@actions/core'
import path from 'node:path'
import { Template } from './type.js'

type ListenFunction = (data: any) => {
  filepath: string,
  template?: any
}
type TemplateFunction = (data: any) => Template
type Script = {
  listen?: ListenFunction
  template?: TemplateFunction
}

// assume that current work dir is repo root.
export const loadScript = async (p: string) => {
  const scriptPath = path.join(process.cwd(), p)
  core.debug(`loading-script: ${scriptPath}`)
  const {listen, template} = (await import(scriptPath)) as Script
  core.debug(`script-loaded, ${scriptPath}`)
  return {
    listen,
    template
  }
}