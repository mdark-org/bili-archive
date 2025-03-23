export type Template = {
  filepath?: string
  prompt?: {
    system?: string,
    user?: string
    jsonschema?: any
  }
  markdown?: string
  "commit-message"?: string
}

export type ResultTemplate = {
  filepath?: string | undefined
  prompt: {
    system?: string,
    user?: string
    jsonschema?: any
  }
  markdown?: string | undefined
  "commit-message"?: string | undefined
}


export type Condition<T extends Record<string, any> = Record<string, any>> = {
  and?: Condition<T>
  or?: Condition<T>
} & T




export type MatchRule = {
  id?: string
  platform: {
    bilibili: {
      condition: Condition,
      template: Template,
      // script, will execute if condition match
      script?: string
    },
  }
  fallback?: Template
}

export type BiliPostListenRule = {
  mid: string
  keywords: string
  // use to check if file exist
  script?: string
  filepath: string
  template: Template
}

export type ListenRule = {
  id?: string
  platform: {
    bilibili: {
      post: BiliPostListenRule,
      season?: unknown,
      series?: unknown,
      collection?: unknown,
    }
  }
}

export type Rule = {
  match?: MatchRule[]
  listen?: ListenRule[]
  fallback?: Template
}

// will as listen action output
export type Event = {
  type: 'bilibili',
  payload: {
    bvid: string
    presetFilepathTemplate?: string
    presetSystemPromptTemplate?: string
    presetPromptTemplate?: string
    presetMarkdownTemplate?: string
    presetCommitMessageTemplate?: string
  }
}