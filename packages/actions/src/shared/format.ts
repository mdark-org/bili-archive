import { render } from 'micromustache'
import * as core from '@actions/core'
export const format = (template: string, data: any, sanitize: boolean = false) => {
  let sanitizedData = data
  try {
    if(sanitize) {
      sanitizedData = escapeAndReplaceLeafValues(data)
    }

  }catch (e) {
    core.warning(`sanitize error, ignore it, ${e?.toString()}`)
  }
  core.debug(`data, ${JSON.stringify(sanitizedData)}`)
  return render(template, sanitizedData)
}



export function escapeAndReplaceLeafValues(
  obj: any,
): any {
  function escapeString(s: any): any {
    if (typeof s !== "string") {
      return s;
    }
    const sanitized = s.replace(/[^\p{L}\p{N}_.\-]/gu, '_');
    return sanitized;
  }

  function processNode(node: any): any {
    if (typeof node === "object" && node !== null) {
      if (Array.isArray(node)) {
        return node.map(processNode);
      } else {
        const newNode: { [key: string]: any } = {};
        for (const key in node) {
          if (node.hasOwnProperty(key)) {
            newNode[key] = processNode(node[key]);
          }
        }
        return newNode;
      }
    } else {
      if (typeof node === "string") {
        return escapeString(node);
      } else {
        return node;
      }
    }
  }
  return processNode(obj);
}
