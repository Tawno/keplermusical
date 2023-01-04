import style from './Block2x1.module.css'

function Block2x1(props) {
  return <div className={style.block}>{props.children}</div>;
}

export default Block2x1;