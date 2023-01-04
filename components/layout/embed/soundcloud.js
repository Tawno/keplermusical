import Link from "next/link"

function Soundcloud ({src, href, title}) {
  return (<>
  <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src={src}></iframe><div><Link href="https://soundcloud.com/nick-pallett" title="Nick Pallett" target="_blank" >Nick Pallett</Link> · <Link href={href} title={title} target="_blank" >{title}</Link></div></>)
}
export default Soundcloud

