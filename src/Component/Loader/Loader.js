import classNames from "classnames/bind";
import styles from './Loader.module.scss'

const cx = classNames.bind(styles)

function Loader() {
    return (
        <div className={cx("loader-wrap")}>
            <div className={cx("loader")}>
                <span>Now Loading...</span>
            </div>
        </div>
    );
}

export default Loader;