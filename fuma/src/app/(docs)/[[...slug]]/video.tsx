import { HTMLProps } from "react"

type VideoProps = {
  bvid?: string,
  ytid?: string
  iframeClassname?: string
}
export default function Video({bvid, iframeClassname, ...rest}:VideoProps & HTMLProps<HTMLDivElement>) {
  return <div style={{ position: 'relative', padding: "30% 45%" }} {...rest}>
    <iframe
      className={iframeClassname}
      style={{ position: 'absolute', width: '100%', height: '100%', left: 0, top: 0 }}
      src={`https://player.bilibili.com/player.html?bvid=${bvid}&high_quality=1&autoplay=false`}
      frameBorder="no" scrolling="no" allowFullScreen={true} />
  </div>
}