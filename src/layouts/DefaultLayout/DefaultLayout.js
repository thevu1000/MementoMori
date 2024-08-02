import classNames from "classnames/bind";
import styles from './DefaultLayout.module.scss';
import Header from "~/layouts/header";
import Footer from "~/layouts/Footer";

const cx = classNames.bind(styles)

function DefaultLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('Bodycontainer')}>{children}</div>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;