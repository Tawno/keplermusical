import Navigation from './Navigation';
import style from './Layout.module.css';
import Footer from './Footer';

function Layout(props) {
  return (
    <div>
      <Navigation />
      <main className={style.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;