
import style from './Banner.module.css'

function Banner(props) {
  return <div className={style.banner}>{props.children}</div>;
}

export default Banner;