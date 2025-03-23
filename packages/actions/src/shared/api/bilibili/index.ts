
export const getRecentPost = async (param: {
  mid: string
  keywords?: string,
}) => {
  if (param.mid) {
    const res = await fetch(`https://api.bilibili.com/x/series/recArchivesByKeywords?mid=${param.mid}&keywords=${param.keywords ?? ''}&ps=100`)
      .then(res => res.json())
    return res as any
  }
  return
}