import Link from "next/link"

function Soundcloud ({src, href, title, description}) {
  return (<span><Link href={href} title={title} target="_blank" >{title}</Link>
  <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={src}></iframe><div><p>{description}</p></div></span>)
}
export default Soundcloud

